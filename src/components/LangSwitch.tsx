import Link from "next/link";

export default async function LangSwitch({ current }: { current: string }) {

  return (

    <Link href={current === "en" ? "/es" : "/en"} className="fixed bottom-5 left-5">
      <button
        type="submit"
        aria-label="Cambiar tema"
        className="rounded-xl px-3 py-2 border border-neutral-200 text-sm dark:border-neutral-700 text-juan-light bg-juan-dark transition  duration-100 hover:scale-110 cursor-pointer active:bg-juan-light-second"
      >
        {current === 'en' ? "Ir a la versión en español" : current === "es" ? "Go to english version" : "🖥️"}
      </button>
    </Link>

  );
}
