import Link from "next/link"
import { ReactNode } from "react"
const NavBar = ({ lang }: { lang: string }) => {
  const { home, projects, hypermantis ,sapec} = getTexts(lang)
  return (
    <nav className="h-fit z-30">
      <ul className="h-fit w-fit border flex flex-row border-neutral-200 dark:border-neutral-700 bg-juan-dark rounded-xl shadow-lg font-light text-juan-white text-center">
        <NavItem href={"/" + lang}>
          {home}
        </NavItem>
        <NavItemDropMenu href={"/" + lang + "/projects"} content={
          [
            {
              title: 'Hypermantis',
              description: hypermantis,
              href: '/' + lang + '/projects/hypermantis'
            },
            {
              title: 'Sapec',
              description: sapec,
              href: '/' + lang + '/projects/sapec'
            },
            {
              title: 'Planificador de cosechas',
              description: 'Web application for planning boat movements',
              href: '/' + lang + '/projects/planificador-cosechas'
            }
          ]
        }>
          <button className="peer">
            {projects}
          </button>

        </NavItemDropMenu>
        <div className="absolute left-0 top-full hidden peer-hover:block peer-focus:block">
          <ul className="bg-juan-dark rounded-lg shadow-lg">
            <NavItem href={"/" + lang + "/projects/hypermantis"}>Hypermantis</NavItem>
            <NavItem href={"/" + lang + "/projects/other-project"}>Other Project</NavItem>
          </ul>
        </div>
      </ul>
    </nav>
  )
}
export default NavBar

type Texts = (lang: string) => {
  home: string;
  projects: string;
  sapec: string; // Optional for other languages
  hypermantis: string; // Optional for other languages
};
const getTexts: Texts = (lang) => {
  const en = {
    home: 'About me',
    projects: 'Projects',
    hypermantis: 'Desktop application to visualize hyperspectral images',
    sapec: 'Web application for surveys for teachers',
  }
  const es = {
    home: 'Sobre mí',
    projects: 'Proyectos',
    hypermantis: 'Aplicación de escritorio para visualizar imágenes hiperespectrales',
    sapec: 'Aplicación web de encuestas para docentes',
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

const NavItem = ({ children, href }: { children?: ReactNode, href: string }) => {
  return (
    <li className=" px-4 py-2 text-lg hover:bg-juan-black rounded-xl hover:scale-110  border-juan-dark  transition duration-150 z-10">
      <Link className="" href={href}>{children}</Link>
    </li>
  )
}

type ContentType = {
  title: string;
  description: string;
  href: string;
}
const NavItemDropMenu = ({ children, href, content }: { children?: ReactNode, href: string, content: ContentType[] }) => {
  return (
    <>
      <li className="group z-50 px-4 py-2 text-lg hover:bg-juan-black rounded-xl hover:scale-110  border-juan-dark transition duration-150">
        <Link className="" href={href}>{children}</Link>
        <ul className="absolute left-0 top-[100%]  z-50 hidden group-hover:block group-focus:block text-sm w-fit dark:border-0 border border-slate-200 bg-juan-dark rounded-lg p-4">
          {
            content.map((item, index) => (

              <li key={index} className="w-sm px-4 py-2  z-50 bg-juan-dark text-juan-white hover:bg-juan-light-second  rounded-xl hover:scale-x-105 transition duration-150">
                <Link className="" href={item.href}>
                  <div className="">
                    {item.title}
                  </div>
                  <div className="text-xs text-neutral-100">
                    {item.description}
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </li>

    </>
  )
}