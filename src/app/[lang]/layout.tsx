
import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { cookies } from "next/headers";
import ThemeSwitch from '@/components/ThemeSwitch'

import LangSwitch from "@/components/LangSwitch";

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
    <html lang={lang} suppressHydrationWarning>
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
      <body className={`${host.className} ${cookieTheme === "dark" ? "dark" : 'light'} h-dvh w-screen  overflow-y-auto dark:bg-juan-black bg-juan-light dark:text-juan-light text-juan-black`}>
          
          {children}
          <NavBar lang={lang} />
          <footer className="sticky bottom=0 z-10">
            <LangSwitch current={lang} />
            <ThemeSwitch />
          </footer>
      </body>
    </html>
  );
}

