
import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { cookies } from "next/headers";
import ThemeSwitch from '@/components/ThemeSwitch'

import LangSwitch from "@/components/LangSwitch";
import Background1 from "@/assets/Background1";
import Background2 from "@/assets/Background2";

const host = Host_Grotesk({})
export const metadata: Metadata = {
  title: "Juan Manuel Sandoval Olavarría",
  description: "Ingeniero Civil en Informática, Chile. Desarrollador Fullstack, entusiasta de la innovación y la resolución de problemas.",
};


export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const cookiesHeader = await cookies();
  const cookieTheme = cookiesHeader.get("theme")?.value as "light" | "dark" | undefined;

  return (
    <html lang={lang} suppressHydrationWarning className={cookieTheme === "dark" ? "dark" : 'light'}>
      <head>
        {!cookieTheme && (
          // Evalúa preferencia del sistema antes del primer render
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(){
                try {
                  var m = window.matchMedia("(prefers-color-scheme: dark)");
                  if(m.matches){ document.documentElement.classList.add("dark"); }
                } catch(e){}
              })();
            `,
            }}
          />
        )}
      </head>
      <body className={`${host.className} flex flex-col min-h-dvh max-h-dvh overflow-y-auto  dark:bg-juan-black bg-juan-light dark:text-juan-light text-juan-black `}>
       <Background1 />
        <Background2/>
        <header className="sticky top-0 place-self-center z-40 h-fit">
          <NavBar lang={lang} />
        </header>
        <main className="z-20 flex-1 flex">
          {children}

        </main>
        <footer className="sticky bottom-0  z-40 w-full flex justify-between p-2 h-fit ">
          <LangSwitch current={lang} />
          <ThemeSwitch />
        </footer>
      </body>
    </html>
  );
}


/*

*/