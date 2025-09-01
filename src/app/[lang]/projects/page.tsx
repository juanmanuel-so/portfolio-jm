import Link from 'next/link';

export default async function Page(
  {
    params
  }: {
    params: Promise<{ lang: string }>;
  }
) {
  const { lang } = await params;
  const { title, description } = getTexts(lang);
  const projects = getProjects(lang);

  return (
    <>
      <main className=" w-full h-full pt-25">
        <section className="flex flex-col items-start justify-center w-screen max-w-5xl mx-auto px-4 dark:text-juan-light text-juan-black ">
          <h1 className="text-4xl text-left tracking-tight font-medium ">
            {title}
          </h1>
          <h2 className="text-2xl text-left tracking-tight font-light mb-4">
            {description}
          </h2>
        </section>

        <section className="w-screen max-w-5xl mx-auto px-4 mt-6">
          <ul className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <li key={p.href} className="border dark:border-juan-light/20 border-juan-black/20 rounded-lg p-4 hover:shadow transition">
                <Link href={p.href} className="block">
                  <h3 className="text-xl font-medium">{p.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

const getTexts = (lang: string) => {
  const es = {
    title: 'Proyectos',
    description: 'Proyectos realizados por mi a lo largo de mi carrera y que puedo mostrar :)',
  }
  const en = {
    title: 'Projects',
    description: 'Projects made by me throughout my career and that I can show :)',
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

const getProjects = (lang: string) => {
  return [
    {
      title: 'Hypermantis',
      href: `/${lang}/projects/hypermantis`,
    },
    {
      title: 'Sapec',
      href: `/${lang}/projects/sapec`,
    },
    {
      title: 'Planificador de cosechas',
      href: `/${lang}/projects/planificador-cosechas`,
    }
  ];
}