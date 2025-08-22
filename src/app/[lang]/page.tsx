import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const { degree, description } = getTexts(lang as 'en' | 'es');
  return <main className=" h-screen w-screen dark:bg-juan-black bg-juan-light dark:text-juan-light text-juan-black grid place-items-center  p-4 text-center sm:text-left">

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 items-center justify-items-center">
      <div className="max-w-xl">
        <div className="transition duration-300 hover:scale-105 ">
          <h1 className="text-4xl font-medium ">
            Juan Manuel Sandoval Olavarría
          </h1>
          <h2 className="font-normal text-xl ">
            {degree}
          </h2>
        </div>
        <p className="font-light text-lg mt-4 second rounded-md transition duration-300 hover:scale-110  p-1">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-4 gap-x-8">
        <RiNextjsFill className="w-20 h-20" />
        <RiReactjsFill   className="w-20 h-20" />
        <BiLogoPostgresql  className="w-20 h-20"  />
        <FaPython  className="w-20 h-20"/>
        <SiJavascript  className="w-20 h-20"/>
        <VscGraph  className="w-20 h-20"/>
      </div>
    </div>
  </main>
}

type Texts = (lang: 'en' | 'es') => {
  title: string;
  degree: string;
  description: string;
};
const getTexts: Texts = (lang) => {
  const en = {
    title: 'Hello World!',
    degree: 'Computer Engineer',
    description: 'I am a computer engineer with experience in fullstack web application development. I am an enthusiast of the innovative and disruptive, seeking continuous learning and constant improvement. My vocation and work lie in my passion for problem-solving, always looking for modern and creative solutions.'
  }
  const es = {
    title: '¡Hola Mundo!',
    degree: 'Ingeniero Civil en Informática',
    description: 'Soy un ingeniero civil en informática con experiencia en desarrollo de aplicaciones web fullstack. Soy un aficionado de lo innovador y disruptivo, buscando el aprendizaje continuo y la mejora constante. Mi vocación y trabajo recaen en mi pasión por la resolución de problemas, buscando siempre la solución moderna y creativa.'
  }
  switch (lang) {
    case 'en':
      return en;
    case 'es':
      return es
    default:
      return es
  }
}

