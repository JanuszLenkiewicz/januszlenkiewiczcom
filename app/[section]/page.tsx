import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Home } from '@/components/Home';
import { SEKCJE, czySekcja } from '@/content/sections';
import { DOMENA } from '@/content/kontakt';

type Props = { params: Promise<{ section: string }> };

export function generateStaticParams() {
  return SEKCJE.map(({ slug }) => ({ section: slug }));
}

// Sekcje podają tę samą stronę główną, więc wskazujemy wyszukiwarkom adres główny
// jako kanoniczny — inaczej ta sama treść liczyłaby się jako sześć osobnych stron.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params;
  if (!czySekcja(section)) return {};
  return { alternates: { canonical: `${DOMENA}/` } };
}

export default async function SekcjaStrony({ params }: Props) {
  const { section } = await params;
  if (!czySekcja(section)) notFound();
  return <Home section={section} />;
}
