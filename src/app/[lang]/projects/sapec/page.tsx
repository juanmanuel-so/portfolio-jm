import Link from "next/link";

const hypermantis = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const { subtitle, description, visit } = getTexts(lang);
  return (
    <section className="z-20 max-w-5xl mx-auto px-4 h-fit dark:text-juan-light text-juan-black">
      <h1 className="text-4xl text-left tracking-tight font-medium ">
        SAPEC
      </h1>
      <h2 className="text-2xl  text-left tracking-tight font-light mb-4">
        {subtitle}
      </h2>
      <p className="text-lg text-left tracking-tight font-light mt-4">
        {description}
      </p>
      <Link  href="https://sapec.vercel.app" className="mt-8 cursor-pointer" target="_blank" rel="noopener noreferrer">
        <button className="w-full rounded-xl border border-juan-dark bg-juan-black hover:bg-juan-light-second text-juan-light-third text-xl mt-8 py-4 px-2 transition duration-300 hover:scale-105">
          {visit}
        </button>
      </Link>
     

    </section>


  )
}

const getTexts = (lang: string) => {
  const es = {
    title: 'SAPEC',
    subtitle: 'Aplicación web de encuestas para docentes',
    description: 'En esta aplicación web los docentes responden preguntas para informar sobre el estados de los cursos que imparten. Este proyecto esta realizado con Next.js y Sequelize.',
    visit: 'Visitar demo',
  }
  const en = {
    title: 'SAPEC',
    subtitle: 'Web application for surveys for teachers',
    description: 'In this web application, teachers answer questions to report on the status of the courses they teach. This project is made with Next.js and Sequelize.',
    visit: 'Visit demo',
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