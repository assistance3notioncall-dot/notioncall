# NC_Intake — mise en service (20 minutes)

Collecte le formulaire pré-discovery du site dans l'onglet **DISCOVERY** du classeur EXPNEW.

> **Pourquoi un projet Apps Script séparé d'EXPNEW.** Le web app d'intake doit être déployé « Tout le monde, même anonyme » — sinon le site ne peut pas poster. Le dashboard EXPNEW est déployé « Moi uniquement ». Un seul projet ne peut pas avoir les deux réglages : tout ce qui est dans le projet devient public avec lui. Deux projets, un seul classeur.

---

## 1. Créer le projet

1. [script.google.com](https://script.google.com) → **Nouveau projet**, connecté en **oaouameur@gmail.com** (le compte propriétaire d'EXPNEW).
2. Renommer le projet **NC_Intake**.
3. Coller le contenu de `NC_Intake_Code.gs` dans `Code.gs` (remplacer tout). Enregistrer.

## 2. Configurer

Dans `NC_CONFIG()`, renseigner :

| Propriété | Valeur |
|---|---|
| `SHEET_ID` | l'id du classeur EXPNEW — dans son URL entre `/d/` et `/edit` |
| `ALERT_EMAIL` | `aouameur@notioncall.com` |
| `WA_NUMBER` | `212707290640` |

`INTAKE_TOKEN` se génère seul, ne pas y toucher.

Lancer **`NC_CONFIG`** → autoriser → ouvrir **Exécution → Journaux** et **copier le jeton affiché**.
Puis remettre `SHEET_ID` et `ALERT_EMAIL` à `''` dans le code : les valeurs vivent maintenant dans les propriétés du script, plus dans le fichier.

> `SHEET_ID` laissé vide : le script crée un classeur `NC_DISCOVERY` autonome et écrit son URL dans les journaux. Utile pour tester avant qu'EXPNEW ne soit en place — mais la maison de la table, c'est EXPNEW.

## 3. Créer la table

Lancer **`NC_SETUP`**. Crée l'onglet DISCOVERY : 23 colonnes, en-tête figé, liste fermée sur STATUT, couleurs par statut, colonnes texte là où il faut (le `0` initial des codes postaux ne saute pas).

Relançable autant de fois que voulu : il ne touche jamais aux lignes déjà collectées.

## 4. Déployer

**Déployer → Nouveau déploiement → Application web**

| Réglage | Valeur |
|---|---|
| Exécuter en tant que | **Moi** |
| Qui a accès | **Tout le monde** |

Copier l'**URL /exec**.

## 5. Brancher le site

Fichier **`appel-decouverte.html`**, bloc `window.NC_CONFIG` tout en haut du fichier (juste après `<title>`) :

```js
window.NC_CONFIG = {
  VIDEO_URL:       '',
  INTAKE_URL:      'https://script.google.com/macros/s/AKfy...../exec',
  INTAKE_TOKEN:    'nc-xxxxxxxxxxxx',   // le jeton du journal, à l'identique
  WHATSAPP_NUMBER: '212707290640'
};
```

Les deux vont ensemble : un jeton différent de celui du script = tout est refusé. Les deux vides = le formulaire marche quand même (pop-up + WhatsApp), mais rien n'est enregistré.

## 6. Vérifier

1. Dans l'éditeur, lancer **`NC_TEST`** → une ligne « Test Rénovation SARL » doit apparaître dans DISCOVERY, et un email arriver.
2. Depuis le site en ligne, remplir le formulaire pour de vrai. Deuxième ligne.
3. Supprimer les deux lignes de test.

---

## La table DISCOVERY

| Colonne | Contenu |
|---|---|
| `ID` | `D{AAMMJJ}-{6 hex}` — clé stable, reprise par le JOURNAL |
| `RECU_LE` · `STATUT` | horodatage · liste fermée (voir plus bas) |
| `NOM` `ENTREPRISE` | le contact — pas de téléphone ni d'email : c'est WhatsApp qui les apporte |
| `PRODUIT` / `PRODUIT_LABEL` | `classique` · `consenti` · `leads` + le libellé public affiché |
| `CP1` `DEPT1` … `CP3` `DEPT3` | les 3 agences, département dérivé côté serveur (20 → Corse, 97x sur 3 chiffres) |
| `NB_AGENCES` | 1 à 3 — ≈ nombre de packs sur Leads |
| `COMMERCIAUX` | `0–3` · `4–8` · `9–14` · `+15` |
| `EXPERIENCE` / `EXPERIENCE_LABEL` | `actuel` · `passe` · `jamais` — le filtre KPC |
| `WHATSAPP` | lien cliquable, message des 4 réponses déjà écrit |
| `SOURCE` `PAGE` `FILL_MS` | provenance, URL, temps de remplissage (détection de robot) |
| `CODE_CLIENT` `NOTE` | remplis à la promotion vers `CLIENTS` |

**Statuts** : `nouveau` → `contacté` → `discovery` → `test` → `client`, plus `relance`, `doublon`, `archivé (NO)`.
Repris de `SPEC_Formulaire-Discovery_v1.md` §2-A : un lead qui refuse est relancé ou archivé, jamais sans état.

**Le code stocke deux colonnes par question** (`PRODUIT` et `PRODUIT_LABEL`) : le code ne bouge jamais et sert aux filtres et aux jointures, le libellé peut être réécrit sur le site sans casser l'historique.

---

## Ce qui est filtré, et ce qui ne l'est pas

| Protection | Effet |
|---|---|
| Jeton partagé | Bloque les robots génériques |
| Pot de miel | Champ invisible ; s'il est rempli, réponse `ok` et rien n'est écrit |
| Temps de remplissage | Moins de 3 secondes = ignoré |
| Verrou d'écriture | Deux envois simultanés ne s'écrasent pas |
| Plafond 200/jour | Au-delà, refus — un flood ne noie pas la table |
| Doublons | Même entreprise sous 30 jours → ligne quand même écrite, statut `doublon`, note pointant vers l'original. **Rien n'est jamais jeté silencieusement.** |
| Injection de formule | Une valeur commençant par `=` est neutralisée avant écriture |

**À savoir, sans détour : le jeton n'est pas un secret.** Il est dans le JavaScript de la page, donc lisible par n'importe qui ouvre le code source. Il arrête les robots de passage, pas quelqu'un de motivé. Ce qui rend ça acceptable : l'endpoint n'expose aucune donnée (`doGet` ne renvoie qu'un ping), il ne fait qu'ajouter des lignes, et le plafond journalier borne les dégâts. Si un jour tu vois du faux trafic, régénère le jeton avec `NC_CONFIG` et recolle-le sur le site — les deux valeurs se changent en une minute.

---

## La suite, quand l'app EXPNEW aura sa page Prospects

Deux fonctions sont déjà là pour ça, conformes à la doctrine V5 (*aucune saisie dans les onglets, tout passe par l'app*) :

- `getDiscovery(limite)` → les leads, du plus récent au plus ancien, en objets prêts à afficher
- `setDiscoveryStatus(id, statut, note, codeClient)` → change le statut, écrit la note, pose le code client, et trace au JOURNAL

Il suffira de les appeler en `google.script.run` depuis la page Prospects. Le passage `discovery → test` est le point où la fiche client (formulaire 2) reprend la main avec les 4 réponses déjà pré-remplies.
