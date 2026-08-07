import { MailLink } from './Mail';
import { LINKEDIN } from '@/content/kontakt';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="brand">JANUSZ LENKIEWICZ</div>
      <div className="links">
        <a href={LINKEDIN} target="_blank" rel="noopener">
          LINKEDIN
        </a>
        <MailLink>E-MAIL</MailLink>
      </div>
      <div className="copy">© 2026 JANUSZ LENKIEWICZ</div>
    </footer>
  );
}
