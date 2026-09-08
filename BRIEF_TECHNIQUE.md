# NotionCall — brief technique de mise en ligne

Version site : **V3** (7 sept. 2026). Contact projet : Oussama Aouameur.

---

## 1. Ce que c'est

**Six pages HTML statiques, totalement autonomes.** Chaque fichier embarque ses polices, ses images et son JavaScript. Pas de build, pas de framework à installer, pas de base de données côté serveur, pas de PHP, pas de Node. N'importe quel hébergeur qui sert des fichiers suffit.

Un seul point de contact réseau, et il est optionnel : le formulaire de la page Appel découverte poste vers un web app Google Apps Script (voir §5). Tout le reste fonctionne hors ligne.

Pourquoi les fichiers font 2 à 3 Mo : tout est embarqué en base64 dans chaque page (polices, images, runtime). Voir §9 pour ce que ça implique et ce qu'on peut faire plus tard.

## 2. Contenu du paquet et plan d'URL

| Fichier | URL | Rôle |
|---|---|---|
| `index.html` | `/` | Accueil |
| `a-propos.html` | `/a-propos.html` | À propos |
| `appel-decouverte.html` | `/appel-decouverte.html` | **Vidéo + formulaire** — la page de conversion, cible de toutes les pastilles d'appel à l'action |
| `notre-service.html` | `/notre-service.html` | Notre service |
| `contact.html` | `/contact.html` | Contact |
| `mentions-legales.html` | `/mentions-legales.html` | Mentions légales + politique de confidentialité (ancres `#mentions-legales`, `#confidentialite`) |
| `og-image.jpg` | `/og-image.jpg` | Image d'aperçu pour WhatsApp / LinkedIn / Facebook (1200×630) |
| `robots.txt`, `sitemap.xml` | | Indexation |

Tous les liens internes sont **relatifs** (`a-propos.html`, pas `/a-propos.html`) : le site fonctionne à la racine d'un domaine comme dans un sous-dossier.

Chaque page porte déjà `<html lang="fr">`, `<title>`, `meta description`, `canonical`, balises Open Graph.

## 3. Le domaine

Le paquet est construit pour **`https://notioncall.com`** (canonical, `og:url`, sitemap, robots). Si le domaine final est différent (par ex. `www.notioncall.com`), une seule substitution dans les 8 fichiers texte :

```bash
sed -i 's#https://notioncall.com#https://www.notioncall.com#g' *.html sitemap.xml robots.txt
```

### DNS
- Apex `notioncall.com` → A / ALIAS vers l'hébergeur ; `www` → CNAME. Rediriger l'un vers l'autre en 301 (peu importe lequel, mais un seul canonique).
- **Le domaine porte déjà du courrier (`@notioncall.com`). Ne pas toucher aux enregistrements MX, SPF (TXT), DKIM, DMARC.** Ne modifier que A/AAAA/CNAME du site.
- Baisser le TTL à 300 s avant la bascule, le remonter après.

### HTTPS
Obligatoire, pas optionnel : WhatsApp (`wa.me`), l'envoi du formulaire (`fetch` / `sendBeacon`) et les iframes vidéo se dégradent ou se bloquent en HTTP. Let's Encrypt via l'hébergeur suffit.

## 4. Hébergement

N'importe quel hébergeur statique. Par ordre de simplicité :

- **Cloudflare Pages / Netlify / Vercel** : glisser le dossier, brancher le domaine, terminé. HTTPS, compression et CDN inclus.
- **Nginx / Apache / hébergement mutualisé (OVH, o2switch…)** : déposer les fichiers à la racine web.

Réglages utiles, tous optionnels :

```nginx
# Nginx
location / { try_files $uri $uri/ $uri.html =404; }      # URLs propres : /a-propos → a-propos.html
gzip on; gzip_types text/html application/javascript;    # ~25 % de gain (le base64 se compresse mal)
add_header Cache-Control "public, max-age=3600";         # HTML : 1 h. og-image.jpg : 1 an.
```

```apache
# Apache .htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^([^.]+)$ $1.html [L]
```

Si les URLs propres sont activées, mettre à jour `sitemap.xml` et les `canonical` en conséquence (retirer `.html`). Les liens internes en `.html` continuent de fonctionner dans les deux cas.

Page 404 : aucune n'est fournie ; celle de l'hébergeur convient.

## 5. Ordre de mise en service

1. **Oussama** déploie le web app Apps Script **`NC_Intake`** (fichiers `NC_Intake_Code.gs` + `NC_Intake_LISEZMOI.md`, 20 min, sur son compte Google). Il en sort deux valeurs : l'**URL `/exec`** et le **jeton**.
2. Ouvrir `appel-decouverte.html`. Le bloc de configuration est **en tête du fichier**, juste après `<title>`, en clair — c'est le seul endroit à éditer :

```html
<script>
window.NC_CONFIG = {
  VIDEO_URL:       '',                 // YouTube (watch / youtu.be / shorts), Vimeo, ou .mp4
  INTAKE_URL:      '',                 // URL /exec du web app NC_Intake
  INTAKE_TOKEN:    '',                 // jeton affiché par NC_CONFIG() dans Apps Script
  WHATSAPP_NUMBER: '212707290640'      // chiffres uniquement, indicatif compris
};
</script>
```
   Une valeur vide désactive simplement la fonction : sans `VIDEO_URL` l'aperçu gris reste affiché, sans `INTAKE_URL` le formulaire fonctionne (pop-up + WhatsApp) mais rien n'est enregistré.
3. Ajuster le domaine si besoin (§3).
4. Publier. Brancher le DNS.
5. Dérouler la checklist §7.

## 6. Ce que les pages contactent, et la CSP

Aucune ressource externe n'est requise pour afficher le site. Sorties **optionnelles**, déclenchées par le visiteur :

| Destination | Quand | Type |
|---|---|---|
| `script.google.com` | envoi du formulaire | `POST` en `text/plain` (requête simple, sans preflight), replis `no-cors` puis `sendBeacon` |
| `wa.me` | clic WhatsApp | navigation |
| `instagram.com`, `linkedin.com`, `facebook.com`, `youtube.com` | icônes du pied de page | navigation |
| `youtube.com` / `player.vimeo.com` | si `VIDEO_URL` est renseigné | iframe |

Le `<link rel="preconnect" href="https://fonts.googleapis.com">` présent dans le HTML est un vestige sans effet : les polices sont embarquées.

**CSP : ne pas en poser au lancement.** Le runtime des pages s'appuie sur des scripts inline, `blob:`, `data:` et l'évaluation dynamique. Si une politique est imposée par l'hébergeur ou par votre standard, celle-ci fonctionne :

```
default-src 'self' data: blob:;
script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:;
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:;
font-src 'self' data: blob:;
connect-src 'self' https://script.google.com https://script.googleusercontent.com;
frame-src https://www.youtube.com https://player.vimeo.com blob:;
```

Ne pas activer non plus de « minification HTML » ou d'« optimisation automatique » côté hébergeur (Cloudflare Auto Minify / Rocket Loader, etc.) : les pages contiennent des blocs `<script type="__bundler/...">` que ces outils peuvent altérer.

## 7. Checklist après publication

1. Les 6 URLs répondent en HTTPS, `http://` redirige vers `https://`.
2. Onglet du navigateur : titre de page correct (pas « Bundled Page »).
3. Navigation : les 4 liens du menu, les 3 pastilles de l'accueil, la pastille de Notre service et celle d'À propos aboutissent où il faut (§2).
4. Mobile : le menu burger s'ouvre, ses liens fonctionnent.
5. `appel-decouverte.html` : la vidéo se lance ; remplir le formulaire → pop-up → le bouton WhatsApp ouvre une conversation vers `+212 707 290 640` avec les réponses déjà écrites.
6. Côté Google : une ligne est apparue dans l'onglet `DISCOVERY` et un email d'alerte est arrivé. Supprimer la ligne de test.
7. Partager l'URL dans WhatsApp / LinkedIn : l'aperçu montre le titre et `og-image.jpg`.
8. `https://notioncall.com/robots.txt` et `/sitemap.xml` répondent. Soumettre le sitemap dans Google Search Console.

## 8. Sécurité et données

- Le formulaire ne collecte que **nom, entreprise, produit recherché, codes postaux d'agences, nombre de commerciaux, expérience centre d'appels**. Ni téléphone ni email : c'est la conversation WhatsApp qui les apporte. La politique de confidentialité (`mentions-legales.html`) décrit exactement ces champs.
- Le **jeton `INTAKE_TOKEN` n'est pas un secret** : il est dans le HTML, lisible par quiconque. C'est une friction anti-robots, doublée d'un pot de miel, d'un contrôle du temps de remplissage, d'un verrou d'écriture, d'un plafond de 200 envois/jour et d'une neutralisation des formules côté Google. L'endpoint n'expose aucune donnée en lecture (`GET` = ping) et ne fait qu'ajouter des lignes. En cas de faux trafic, on régénère le jeton des deux côtés en une minute.
- Aucun cookie, aucun traceur, aucune analytique embarquée. Si vous ajoutez un outil de mesure, la page Mentions légales devra le dire.

## 9. Performance — ce qu'il faut savoir

Chaque page pèse 2 à 3 Mo parce qu'elle embarque **ses propres** polices (4 fichiers woff2), images et runtime, en base64. Rien n'est partagé entre les pages, donc rien n'est mis en cache d'une page à l'autre.

C'est acceptable pour le lancement (audience B2B, desktop majoritaire, pages peu nombreuses). Si le temps de chargement mobile devient un sujet, la bonne piste est d'**extraire les ressources en fichiers partagés** (polices, images, JS) servis avec un cache long. Ce travail se fait depuis la source du site (export Claude Design), **pas à la main dans ces fichiers** — voir §10.

## 10. À ne pas faire

- **Ne pas éditer le contenu à la main dans ces fichiers.** Le HTML de chaque page est stocké sous forme d'une chaîne JSON d'une seule ligne (`<script type="__bundler/template">`) et les ressources dans un manifeste base64. Toute édition manuelle casse l'échappement. Les modifications de contenu se font à la source, puis on régénère.
- La seule exception prévue est le bloc `window.NC_CONFIG` en tête de `appel-decouverte.html`, écrit en clair pour ça.
- Ne pas passer les fichiers dans un minifieur / optimiseur HTML.
- Ne pas servir en HTTP.
- Ne pas poser de CSP stricte sans la politique du §6.
- `NotionCall_Site_V3.html` (le fichier unique de 17 Mo) est la **version de relecture**, tout-en-un avec un sélecteur de pages en bas d'écran. **Il ne se publie pas.** Le paquet à publier, c'est ce dossier.

## 11. Fichiers de la base de données

`NC_Intake_Code.gs` et `NC_Intake_LISEZMOI.md`, à déployer par Oussama sur **son** compte Google (celui qui possède le classeur EXPNEW). Le brief de déploiement est dans le LISEZMOI ; rien n'est à faire côté hébergeur.
