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
      <Link  href="https://https://demo-proyeccion.vercel.app" className="mt-8 cursor-pointer" target="_blank" rel="noopener noreferrer">
        <button className="w-full rounded-xl border border-juan-dark bg-juan-black hover:bg-juan-light-second text-juan-light-third text-xl mt-8 py-4 px-2 transition duration-300 hover:scale-105">
          {visit}
        </button>
      </Link>
     

    </section>


  )
}

const getTexts = (lang: string) => {
  const es = {
    title: 'Planificador de cosechas',
    subtitle: 'Aplicación para movimientos de barcos',
    description: 'Aplicación para programar y gestionar movimientos de barcos para sus faenas con ayuda de un mapa visualizador de distancias y lugares. Esta aplicación está hecha con Next, postgreSQL y Leaflet. Puede usar la demo con las credenciales demo@demo.com - demo1234, siéntase libre de jugar con la aplicación',
    visit: 'Visitar demo',
  }
  const en = {
    title: 'Planificador de cosechas',
    subtitle: 'Application for ship movements',
    description: 'Application to schedule and manage ship movements for operations with the help of a map that visualizes distances and locations. This application is built with Next, PostgreSQL, and Leaflet. You can use the demo with the credentials demo@demo.com - demo1234; feel free to explore the application.',
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