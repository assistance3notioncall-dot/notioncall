import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Reveal from "../_components/Reveal";
import DiscoveryForm from "./DiscoveryForm";
import VideoPlayer from "./VideoPlayer";

export default function Page() {
  return (
    <>
      <Header />

      <section className="px-6 py-24 text-center md:px-16 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold tracking-widest text-[#50DFAE]">APPEL DÉCOUVERTE</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#9DBBFF] md:text-5xl">
            Quinze minutes <span className="text-[#50DFAE]">avec le fondateur.</span>
          </h1>
          <p className="mt-6 text-slate-400">
            La vidéo d&rsquo;abord. Puis quatre questions. Ensuite, vous décidez.
          </p>
        </div>
      </section>

      <section className="px-6 pb-14 md:px-16">
        <div className="mx-auto max-w-4xl">
          <VideoPlayer />
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-[#50DFAE]">DEVENIR CLIENT</p>
          <Reveal>
            <h2 className="mt-2 text-3xl font-extrabold text-[#EAF0FF]">
              Parlez-nous de votre entreprise
            </h2>
          </Reveal>
          <p className="mt-3 text-slate-400">
            Quatre questions. Le reste, on le voit ensemble à l&rsquo;appel.
          </p>

          <DiscoveryForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
