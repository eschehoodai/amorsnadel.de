import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { OrnamentDivider } from '../components/CustomSvgs';
import { ArrowLeft, Shield } from 'lucide-react';

export const Impressum: FC = () => {
  return (
    <div className="bg-transparent min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative" id="impressum-page">
      <SEO 
        title="Impressum | AmorsNadel" 
        description="Impressum und rechtliche Hinweise des Tattoo & Piercing Studios AmorsNadel." 
      />
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-[0.03] select-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tattoo-red rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-old-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto" id="impressum-header">
          <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Rechtliche Hinweise</span>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-soft-white tracking-wide">
            Impressum
          </h1>
          <div className="pt-2">
            <OrnamentDivider className="max-w-xs text-old-gold mx-auto" />
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-surface-dark border border-soft-white/10 p-8 md:p-12 space-y-8 shadow-xl">
          <section className="space-y-4">
            <h2 className="font-sans text-xl font-semibold text-soft-white border-b border-soft-white/10 pb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              <strong>AmorsNadel</strong><br />
              Inhaber: Sergey Kontratiev<br />
              Neschwitzer Str. 11<br />
              01917 Kamenz
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-xl font-semibold text-soft-white border-b border-soft-white/10 pb-2">
              Kontakt
            </h2>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Telefon: 0174 4312856<br />
              E-Mail: <a href="mailto:amorsnadel@gmail.com" className="text-old-gold hover:text-soft-white transition-colors">amorsnadel@gmail.com</a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-xl font-semibold text-soft-white border-b border-soft-white/10 pb-2">
              Umsatzsteuer-ID
            </h2>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <span className="font-mono text-caption text-old-gold">[Umsatzsteuer-ID / falls vorhanden]</span>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-xl font-semibold text-soft-white border-b border-soft-white/10 pb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Sergey Kontratiev<br />
              Neschwitzer Str. 11<br />
              01917 Kamenz
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-xl font-semibold text-soft-white border-b border-soft-white/10 pb-2">
              EU-Streitschlichtung
            </h2>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noreferrer"
                className="text-old-gold hover:text-soft-white transition-colors underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>.
            </p>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-xl font-semibold text-soft-white border-b border-soft-white/10 pb-2">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        {/* Back and Privacy Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-soft-white/10">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-wider text-soft-white/70 hover:text-old-gold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Zurück zur Startseite</span>
          </Link>

          <Link
            to="/datenschutz"
            className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-wider text-soft-white/70 hover:text-old-gold transition-colors"
          >
            <Shield className="h-4 w-4 text-tattoo-red" />
            <span>Datenschutzerklärung ansehen</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
