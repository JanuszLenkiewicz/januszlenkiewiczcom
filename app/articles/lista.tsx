'use client';

import Link from 'next/link';
import { T, useLang } from '@/components/lang';
import { artykulyOdNajnowszych, formatujDate } from '@/content/articles';

export function Lista() {
  const { lang } = useLang();
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
                    <h2>{a.tytul[lang]}</h2>
                  </Link>
                  <p>{a.lead[lang]}</p>
                  <div className="art-meta">
                    <span>{formatujDate(a.data, lang)}</span>
                    <span>{a.tag[lang]}</span>
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
