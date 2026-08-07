import type { Metadata } from 'next';
import Link from 'next/link';
import { T } from '@/components/lang';
import { artykulyOdNajnowszych, formatujDate } from '@/content/articles';

export const metadata: Metadata = {
  title: 'Articles | Janusz Lenkiewicz',
  description: 'Notes from building production AI systems — architecture decisions, evaluation, human-in-the-loop design.',
};

export default function ListaArtykulow() {
  const artykuly = artykulyOdNajnowszych();

  return (
    <main className="subpage">
      <div className="narrow">
        <div className="page-head">
          <T k="articles_label" className="label" />
          <T k="articles_h1" as="h1" />
          <T k="articles_lead" as="p" className="lead" />
        </div>

        {artykuly.length === 0 ? (
          <T k="articles_empty" as="p" className="art-empty" />
        ) : (
          <div className="art-list">
            {artykuly.map((a, i) => (
              <article className="art-item" key={a.slug}>
                <div className="num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <Link href={`/articles/${a.slug}`}>
                    <h2>{a.tytul}</h2>
                  </Link>
                  <p>{a.lead}</p>
                  <div className="art-meta">
                    <span>{formatujDate(a.data, a.jezyk)}</span>
                    <span className="badge">{a.jezyk.toUpperCase()}</span>
                    <span>{a.tag}</span>
                    <span>
                      {a.czas} <T k="reading_time" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
