export default async function Page(
  {
    params
  }: {
    params: Promise<{ lang: string }>;
  }
) {
  const { lang } = await params;
  const { title, description } = getTexts(lang);
  return (
    <>
      <main className="dark:bg-juan-black bg-juan-light dark:text-juan-light text-juan-black w-full h-full pt-25">
        <section className="flex flex-col items-start justify-center w-screen max-w-5xl mx-auto px-4 dark:text-juan-light text-juan-black ">
          <h1 className="text-4xl text-left tracking-tight font-medium ">
            {title}
          </h1>
          <h2 className="text-2xl text-left tracking-tight font-light mb-4">
            {description}
          </h2>
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