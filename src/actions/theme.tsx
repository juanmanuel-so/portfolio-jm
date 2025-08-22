"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function toggleTheme() {
  const cks = await cookies();
  const current = cks.get("theme")?.value === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  await cks.set("theme", next, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  // Revalida el árbol actual para que el server vuelva a pintar con la nueva clase
  revalidatePath("/", "layout");
}
