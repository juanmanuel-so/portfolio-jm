// /src/app/page.tsx
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

// Ensure this page is always evaluated per-request (so header-based redirect works)
export const dynamic = 'force-dynamic';

function detectPreferredLang(acceptLanguageHeader: string | null): 'en' | 'es' {
  if (!acceptLanguageHeader) return 'en';

  // Split "es-ES,es;q=0.9,en;q=0.8" into ordered tokens
  const tokens = acceptLanguageHeader
    .split(',')
    .map(t => t.trim().toLowerCase())
    .map(t => t.split(';')[0]) // remove q factors
    .map(t => t.split('-')[0]); // normalize region variants

  // Find first supported language
  for (const code of tokens) {
    if (code === 'es') return 'es';
    if (code === 'en') return 'en';
  }
  return 'en';
}

export default async function RootPage() {
  const hdrs = await headers();

  const acceptLanguage = hdrs.get('accept-language');
  const lang = detectPreferredLang(acceptLanguage);
  redirect(`/${lang}`);
}