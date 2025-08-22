import { toggleTheme } from "@/actions/theme";
import { cookies } from "next/headers";

export default async function ThemeToggle() {
  const cks = await cookies();
  const current = (cks.get("theme")?.value as "light" | "dark" | undefined) ?? "system";

  return (

      <button
      onClick={toggleTheme}
        type="submit"
        aria-label="Cambiar tema"
        className="rounded-xl px-3 py-2 border border-neutral-200 dark:border-neutral-700 fixed bottom-5 right-5 bg-juan-dark transition  duration-100 hover:scale-110 cursor-pointer active:bg-juan-light-second"
      >
        {current === "dark" ? "☀️" : current === "light" ? "🌙" : "🖥️"}
      </button>
    
  );
}
