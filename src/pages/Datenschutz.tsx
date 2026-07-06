import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { OrnamentDivider } from '../components/CustomSvgs';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export const Datenschutz: FC = () => {
  return (
    <div className="bg-transparent min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative" id="datenschutz-page">
      <SEO 
        title="Datenschutzerklärung | AmorsNadel" 
        description="Datenschutzerklärung und Informationen zum Umgang mit deinen Daten bei AmorsNadel." 
      />
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-[0.03] select-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-old-gold rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-tattoo-red rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto" id="datenschutz-header">
          <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Datensicherheit</span>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-soft-white tracking-wide">
            Datenschutzerklärung
          </h1>
          <div className="pt-2">
            <OrnamentDivider className="max-w-xs text-old-gold mx-auto" />
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-surface-dark border border-soft-white/10 p-8 md:p-12 space-y-8 shadow-xl">
          
          <section className="space-y-4">
            <h2 className="font-sans text-xl font-semibold text-soft-white border-b border-soft-white/10 pb-2">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-sans text-lg font-semibold text-soft-white mt-4">Allgemeine Hinweise</h3>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <h3 className="font-sans text-lg font-semibold text-soft-white mt-4">Datenerfassung auf dieser Website</h3>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
            </p>
            <p className="text-body text-soft-white/80 font-light leading-relaxed italic pl-4 border-l border-old-gold/40">
              Sergey Kontratiev<br />
              Neschwitzer Str. 11<br />
              01917 Kamenz<br />
              Telefon: 0174 4312856<br />
              E-Mail: <a href="mailto:amorsnadel@gmail.com" className="text-old-gold hover:text-soft-white transition-colors">amorsnadel@gmail.com</a>
            </p>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in unser Buchungsformular (Terminanfrage) eingeben.
            </p>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten (wie die des Buchungsformulars) werden zur Bearbeitung Ihrer Terminanfragen und für die Kommunikation mit Ihnen genutzt.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-xl font-semibold text-soft-white border-b border-soft-white/10 pb-2">
              2. Hosting
            </h2>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3 className="font-sans text-lg font-semibold text-soft-white mt-4">Externes Hosting</h3>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Dies können v. a. IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, sein.
            </p>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Unser Hoster ist:
            </p>
            <p className="text-body text-soft-white/80 font-light leading-relaxed italic pl-4 border-l border-old-gold/40">
              netcup GmbH<br />
              Daimlerstraße 25<br />
              76185 Karlsruhe
            </p>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Der Einsatz des externen Hosters erfolgt im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-xl font-semibold text-soft-white border-b border-soft-white/10 pb-2">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="font-sans text-lg font-semibold text-soft-white mt-4">Datenschutz</h3>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
            <h3 className="font-sans text-lg font-semibold text-soft-white mt-4">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist die im Impressum genannte natürliche Person (Sergey Kontratiev).
            </p>
            <h3 className="font-sans text-lg font-semibold text-soft-white mt-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
            <h3 className="font-sans text-lg font-semibold text-soft-white mt-4">Rechte der Betroffenen (Auskunft, Berichtigung, Löschung, Einschränkung)</h3>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Wenden Sie sich hierzu gerne an uns unter der angegebenen Kontaktadresse.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-xl font-semibold text-soft-white border-b border-soft-white/10 pb-2">
              4. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-sans text-lg font-semibold text-soft-white mt-4">Buchungsformular (Terminanfrage)</h3>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Wenn Sie uns per Buchungsformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail, Telefonnummer, Körperstelle, Größe, Beschreibung des Motivs) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen (z. B. der Beratung für ein Tattoo) erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), falls diese abgefragt wurde.
            </p>
            <p className="text-body text-soft-white/80 font-light leading-relaxed">
              Die von Ihnen im Buchungsformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>
        </div>

        {/* Back and Impressum Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-soft-white/10">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-wider text-soft-white/70 hover:text-old-gold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Zurück zur Startseite</span>
          </Link>

          <Link
            to="/impressum"
            className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-wider text-soft-white/70 hover:text-old-gold transition-colors"
          >
            <ShieldAlert className="h-4 w-4 text-tattoo-red" />
            <span>Impressum ansehen</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
