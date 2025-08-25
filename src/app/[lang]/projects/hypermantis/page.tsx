import Image from "next/image";
import Link from "next/link"
import { FaApple, FaWindows } from "react-icons/fa"

const hypermantis = async ({params}:{params:Promise<{lang:string}>}) => {
  const { lang } = await params;
  const { subtitle, description, download } = getTexts(lang);
  return (
    <main className="h-fit min-h-full w-full dark:bg-juan-black bg-juan-light dark:text-juan-light text-juan-black grid place-items-center  p-4 text-center sm:text-left">
      <section className="flex flex-col items-start justify-center w-screen max-w-5xl mx-auto px-4 h-fit dark:text-juan-light text-juan-black ">
        <h1 className="text-4xl text-left tracking-tight font-medium ">
          Hypermantis
        </h1>
        <h2 className="text-2xl  text-left tracking-tight font-light mb-4">
          {subtitle}
        </h2>
        <p className="text-lg text-left tracking-tight font-light mt-4">
          {description}
        </p>

        <div className="w-full py-4">
          <h2 className="text-xl lg:text-3xl  text-left tracking-tight font-semibold  mb-4">
            {download}
          </h2>
          <div className="flex flex-row space-x-2 items-center justify-start">

            <Link download href='https://www.dropbox.com/scl/fi/gkvk536ye928g82phtx7t/Hypermantis-darwin-arm64-1.0.0.zip?rlkey=vo1xqmij2ye8gyrgwce7qx74y&st=jqszll19&dl=1'>
              <button className=" space-x-2 inline-flex h-12 animate-shimmer active:bg-slate-900 items-center justify-center rounded-md border border-slate-800 bg-linear-to-r from-juan-black from-80% to-juan-dark to-95%% px-6 font-medium text-slate-400 transition-colors duration-100 ease-in-out focus:outline-none active:ring-1 active:ring-slate-900 focus:ring-offset-2 focus:ring-offset-slate-800 cursor-pointer hover:from-slate-950">
                <FaApple />
                <p>MacOS ARM64</p>
              </button>
            </Link>
            <Link download href='https://www.dropbox.com/scl/fi/67pcg3eu1m1mvkkvsf2nw/Hypermantis-1.0.0WIN.zip?rlkey=7sqklg827tlxwwqektydfj4mp&st=cy12eqmk&dl=1'>

            <button className=" space-x-2 inline-flex h-12 animate-shimmer active:bg-slate-900 items-center justify-center rounded-md border border-slate-800 bg-linear-to-r from-juan-black from-80% to-juan-dark to-95%% px-6 font-medium text-slate-400 transition-colors duration-100 ease-in-out focus:outline-none active:ring-1 active:ring-slate-900 focus:ring-offset-2 focus:ring-offset-slate-800 cursor-pointer hover:from-slate-950">
                <FaWindows />
                <p>Windows 64 bits</p>
              </button>
            </Link>
          </div>
        </div>
        <Image width={800} height={400} src='/show_hypermantis.gif' alt="Hypermantis showing"></Image>

      </section>
    </main>


  )
}

const getTexts = (lang: string) => {
  const es = {
    title: 'Hypermantis',
    subtitle: 'Aplicación de escritorio para visualizar imágenes hiperespectrales',
    description: 'Esta aplicación nace por la falta de una herramienta para analizar imágenes hiperespectrales de manera sencilla en MacOs. A partir de esta base, la aplicación me sirvió como ensamble para integrar las redes neuronales convolucionales entrenadas en mi proyecto de título para clasificación de FAN.',
    download: 'Descargar ahora',
  }
  const en = {
    title: 'Hypermantis',
    subtitle: 'Desktop application to visualize hyperspectral images',
    description: 'This application was created due to the lack of a tool to analyze hyperspectral images easily on MacOS. Based on this, the application served as a framework to integrate the convolutional neural networks trained in my thesis project for FAN classification.',
    download: 'Download now',
  }
  switch (lang) {
    case 'en':
      return en;
    case 'es':
      return es;
    default:
      return es;
  }
}

export default hypermantis