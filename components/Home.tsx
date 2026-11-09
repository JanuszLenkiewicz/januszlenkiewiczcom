'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import type { SekcjaSlug } from '@/content/sections';
import { LINKEDIN, LINKEDIN_ETYKIETA, PRODUKT, PRODUKT_ETYKIETA, X_ETYKIETA, X_KONTO } from '@/content/kontakt';
import { Adres, MailLink } from './Mail';
import { T } from './lang';

/** Projekt n ma swoje teksty w słowniku pod kluczami p{n}_title, p{n}_tag, p{n}_desc, p{n}_stack, p{n}_details */
const PROJEKTY = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'] as const;

const PODEJSCIE = [1, 2, 3, 4] as const;

const FAKTY = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export function Home({ section }: { section?: SekcjaSlug }) {
  const pierwszy = useRef(true);

  useEffect(() => {
    if (!section) {
      pierwszy.current = false;
      return;
    }
    const cel = document.getElementById(section);
    if (!cel) return;

    // wejście wprost pod adres sekcji: przewijamy dopiero po 'load', bo dogrywające się
    // zasoby przesuwają jeszcze layout. Nawigacja wewnątrz strony jest już płynna.
    const przewin = (behavior: ScrollBehavior) => cel.scrollIntoView({ behavior, block: 'start' });

    if (pierwszy.current) {
      pierwszy.current = false;
      if (document.readyState === 'complete') przewin('instant');
      else {
        const h = () => przewin('instant');
        window.addEventListener('load', h, { once: true });
        return () => window.removeEventListener('load', h);
      }
    } else {
      przewin('smooth');
    }
  }, [section]);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-text">
          <T k="hero_label" className="label" />
          <T k="hero_title" as="h1" />
          <Link className="cta" href="/projects" scroll={false}>
            <T k="hero_cta" />
          </Link>
        </div>
        <div className="hero-panel">
          <div className="row">
            <T k="stat1_k" className="k" />
            <T k="stat1_v" className="v" />
          </div>
          <div className="row">
            <T k="stat2_k" className="k" />
            <T k="stat2_v" className="v" />
          </div>
          <div className="row">
            <T k="stat3_k" className="k" />
            <T k="stat3_v" className="v" />
          </div>
          <div className="row">
            <T k="stat4_k" className="k" />
            <T k="stat4_v" className="v" />
          </div>
          <div className="hero-tags">
            <T k="hero_tags_label" className="hero-tags-label" />
            <T k="hero_tags" as="div" className="hero-tags-list" />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div>
            <T k="about_h2" as="h2" />
            <T k="about_p1" as="p" />
            <T k="about_p2" as="p" />
            <T k="about_p3" as="p" />
          </div>
          <div className="facts">
            <T k="facts_label" className="label facts-label" />
            {FAKTY.map((n) => (
              <div className="fact" key={n}>
                <T k={`fact${n}_k` as 'fact1_k'} as="b" />
                <T k={`fact${n}_v` as 'fact1_v'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="projects" id="projects">
        <div className="container">
          <T k="projects_label" className="label" />

          {PROJEKTY.map((num, i) => {
            const n = i + 1;
            return (
              <div className="project" key={num}>
                <div className="num">{num}</div>
                <div>
                  <div className="head">
                    <T k={`p${n}_title` as 'p1_title'} as="h3" />
                    <T k={`p${n}_tag` as 'p1_tag'} className="tag" />
                  </div>
                  <T k={`p${n}_desc` as 'p1_desc'} as="p" />
                  <T k={`p${n}_stack` as 'p1_stack'} as="div" className="stack" />
                  <details className="more">
                    <summary>
                      <T k="more_label" />
                    </summary>
                    <T k={`p${n}_details` as 'p1_details'} as="div" className="more-body" />
                  </details>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="skills" id="skills">
        <div className="container">
          <T k="skills_label" className="label" />
          <div className="skills-grid">
            <div>
              <T k="skills_h_have" as="div" className="col-h" />
              <T k="skills_have" as="div" />
            </div>
            <div>
              <T k="skills_h_learn" as="div" className="col-h" />
              <T k="skills_learn" as="div" />
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="approach" id="approach">
        <div className="container">
          <T k="approach_label" className="label" />

          {PODEJSCIE.map((n) => (
            <div className="approach-item" key={n}>
              <T k={`appr${n}_k` as 'appr1_k'} className="k" />
              <T k={`appr${n}` as 'appr1'} as="p" />
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact" id="contact">
        <div className="contact-left">
          <T k="contact_h2" as="h2" />
          <MailLink className="contact-link">
            <T k="contact_email_l" as="small" />
            <Adres />
          </MailLink>
          <a className="contact-link" href={LINKEDIN} target="_blank" rel="noopener">
            <small>LinkedIn</small>
            {LINKEDIN_ETYKIETA}
          </a>
          <a className="contact-link" href={X_KONTO} target="_blank" rel="noopener">
            <small>X</small>
            {X_ETYKIETA}
          </a>
          <a className="contact-link" href={PRODUKT} target="_blank" rel="noopener">
            <T k="contact_product_l" as="small" />
            {PRODUKT_ETYKIETA}
          </a>
        </div>
        <div className="contact-right">
          <T k="collab_label" className="label" />
          <T k="collab_p1" as="p" />
          <T k="collab_p2" as="p" />
        </div>
      </section>
    </main>
  );
}
