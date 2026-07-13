import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight, Instagram, Star, ArrowDown, ExternalLink, Flame, MapPin, Clock, Mail, Mountain, Sparkles, Heart, MessageSquare, Home as HomeIcon } from 'lucide-react';
import { CompassRoseSvg, OrnamentDivider, StudioIcon } from '../components/CustomSvgs';
import { TATTOO_PORTFOLIO, TESTIMONIALS, ARTISTS } from '../data';
import { motion } from 'motion/react';

export const Home: FC = () => {
  // Tease first 3 elements from our portfolio
  const featuredTattoos = TATTOO_PORTFOLIO.slice(0, 3);
  
  return (
    <div className="bg-transparent min-h-screen text-soft-white font-sans relative" id="home-page-root">
      <SEO 
        title="AmorsNadel | Tattoo, Piercing & Permanent Make-up in Dresden, Kamenz & Zittau" 
        description="Dein Studio für Custom Tattoos, Piercings & Permanent Make-up. Erlebe höchste Hygienestandards und individuelle Kunst in Dresden, Kamenz und Zittau." 
      />
      {/* Background Decor SVG from Artistic Flair Mockup */}
      <div className="absolute top-12 right-12 opacity-10 pointer-events-none z-0">
        <svg width="240" height="240" viewBox="0 0 100 100" fill="none" stroke="#D4A017" strokeWidth="0.5">
          <path d="M50 10 Q60 40 90 50 T50 90 T10 50 T50 10 M50 30 Q55 45 70 50 T50 70 T30 50 T50 30" />
          <path d="M20 20 L80 80 M80 20 L20 80" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* 1. Hero Landing Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-soft-white/5" id="hero-section">
        {/* Ambient Darkened Hero Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/tattoo-kuenstler-sergej-bei-der-arbeit.png"
            alt="Tattoo-Künstler Sergey bei der Arbeit im AmorsNadel Studio"
            className="w-full h-full object-cover filter brightness-[0.22] contrast-[1.15] scale-105 animate-pulse duration-10000"
          />
          {/* Subtle color gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-black/30 via-transparent to-ink-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8 flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <CompassRoseSvg className="h-20 w-20 text-old-gold/80 hover:rotate-45 transition-transform duration-1000" />
          </motion.div>

          <div className="space-y-4 flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-mono text-eyebrow uppercase tracking-[0.4em] text-old-gold"
            >
              Tattoo · Piercing · Permanent Make-up · Kamenz &amp; Dresden
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-hand text-6xl sm:text-8xl md:text-9xl text-soft-white leading-none"
            >
              Amors<span className="text-tattoo-red">Nadel</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex justify-center w-full origin-center"
            >
              <svg className="my-1 text-old-gold" width="180" height="8" viewBox="0 0 180 8">
                <path d="M2 5 Q 45 2, 90 5 T 178 3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="max-w-xl mx-auto text-lead text-soft-white/85 font-light tracking-wide mt-2"
            >
              Individuelle Tattoos, von Hand gezeichnet und sauber gestochen. Über 20 Jahre Erfahrung in Kamenz, Dresden und Umgebung – auf Wunsch komme ich auch mobil zu dir.
            </motion.p>
          </div>

          {/* Action Buttons styled precisely according to mockup */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md pt-4"
          >
            <Link
              to="/buchung"
              className="border border-old-gold text-soft-white px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-old-gold hover:text-ink-black transition-all duration-300 rounded-none text-center font-mono font-medium shadow-lg shadow-old-gold/5"
            >
              Termin Buchen
            </Link>
            <Link
              to="/galerie"
              className="bg-tattoo-red text-soft-white px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-soft-white hover:text-tattoo-red transition-all duration-300 rounded-none text-center font-mono font-medium"
            >
              Galerie Entdecken
            </Link>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="pt-12 text-soft-white/40 flex flex-col items-center space-y-1 text-xs"
          >
            <span className="font-mono text-eyebrow uppercase tracking-[0.2em]">Erfahre mehr</span>
            <ArrowDown className="h-4 w-4 text-old-gold" />
          </motion.div>
        </div>
      </section>

      {/* 2. Core Philosophy & Hand-crafted Aesthetic */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" id="philosophy-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text content (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red block">
                Philosophie &amp; Versprechen
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-soft-white tracking-wide">
                <span className="font-hand text-old-gold">Amors<span className="text-tattoo-red">Nadel</span></span> – wo deine Geschichte unter die Haut geht
              </h2>
            </div>

            <p className="text-body text-soft-white/80 font-light">
              <em className="text-old-gold not-italic font-medium">Amor</em> steht für Gefühl, <em className="text-old-gold not-italic font-medium">die Nadel</em> für Präzision und Hygiene. Aus beidem entsteht dein ganz persönliches Custom-Tattoo – individuell gezeichnet, sauber gestochen, perfekt auf deinen Körper abgestimmt.
            </p>

            <p className="text-body text-soft-white/80 font-light">
              Du findest mich in <strong className="text-soft-white">Kamenz</strong>, <strong className="text-soft-white">Dresden</strong> und Umgebung – und auf Wunsch komme ich als mobiler Tätowierer auch zu dir.
            </p>

            {/* Icons list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-body text-soft-white/85">
              {[
                { icon: '016-tattoo', label: 'Echte Custom-Anfertigungen' },
                { icon: '007-license', label: 'Über 20 Jahre Erfahrung' },
                { icon: '020-ink', label: 'Haltbare & scharfe Pigmente' },
                { icon: '008-catalog', label: 'Ich biete auch Tattoo- & Permanent-Make-up-Kurse an' },
              ].map((feature) => (
                <div key={feature.label} className="flex items-center space-x-3 group">
                  <div className="h-10 w-10 rounded-full bg-surface-dark border border-old-gold/30 flex items-center justify-center shrink-0 group-hover:border-old-gold/60 transition-colors">
                    <StudioIcon name={feature.icon} className="h-6 w-6" />
                  </div>
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Collage (5 columns) */}
          <div className="lg:col-span-5 relative flex justify-center" id="collage-container">
            <div className="relative w-full max-w-[340px] aspect-[4/5] border border-old-gold/20 p-2 z-10 bg-surface-dark">
              <img
                src="/images/tattoo-kuenstler-sergej-maori-tribal.png"
                alt="Sergey sticht ein Maori-Tribal-Tattoo bei AmorsNadel"
                className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlapping Badge */}
              <Link
                to="/buchung"
                className="absolute -bottom-6 -left-6 bg-ink-black border border-old-gold/40 hover:border-old-gold px-5 py-4 shrink-0 max-w-[190px] space-y-1 block shadow-lg transition-colors group"
              >
                <span className="block font-display text-lg text-old-gold leading-none font-semibold">Kostenlose Beratung</span>
                <span className="block font-mono text-eyebrow uppercase tracking-wider text-soft-white/60 group-hover:text-soft-white/90 transition-colors">Termin in 48&nbsp;Std. · jetzt anfragen</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2.25 Ablauf / So entsteht dein Tattoo */}
      <section className="py-24 bg-surface-dark/40 border-y border-soft-white/5" id="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Dein Weg zur Hautkunst</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-soft-white">So entsteht dein Tattoo</h2>
            <p className="text-body text-soft-white/80 max-w-xl mx-auto font-light">
              Von der ersten Idee bis zur abgeheilten Kunst auf deiner Haut – vier sorgfältige Schritte, kompromisslos präzise und hygienisch begleitet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', icon: '047-customer', title: 'Beratung & Idee', desc: 'Im persönlichen Gespräch erfassen wir deine Vision, Motiv, Größe und Platzierung.' },
              { step: '02', icon: '026-sketch', title: 'Individueller Entwurf', desc: 'Jedes Design wird von Hand gezeichnet und exakt auf deine Anatomie abgestimmt.' },
              { step: '03', icon: '041-tattoo machine', title: 'Präzises Stechen', desc: 'Unter sterilen Bedingungen entsteht dein Motiv mit feinster Nadel- und Linienführung.' },
              { step: '04', icon: '015-lotion', title: 'Heilung & Nachsorge', desc: 'Du erhältst einen detaillierten Pflegeplan für eine makellose, langlebige Abheilung.' },
            ].map((s) => (
              <div
                key={s.step}
                className="group relative bg-ink-black border border-soft-white/10 p-8 flex flex-col items-center text-center space-y-4 hover:border-old-gold/40 transition-colors duration-300"
              >
                <span className="absolute top-3 right-4 font-display text-2xl text-old-gold/15 group-hover:text-old-gold/30 transition-colors">
                  {s.step}
                </span>
                <div className="h-20 w-20 rounded-full bg-surface-dark border border-old-gold/25 flex items-center justify-center group-hover:border-old-gold/50 transition-colors">
                  <StudioIcon name={s.icon} className="h-11 w-11" />
                </div>
                <h3 className="font-sans text-lg font-semibold text-soft-white group-hover:text-old-gold transition-colors">{s.title}</h3>
                <p className="text-body text-soft-white/75 font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Behind the Needle & Founder Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-soft-white/5 relative" id="behind-the-needle-section">
        {/* Title Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Hinter Der Nadel</span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-soft-white">Künstler &amp; Studio</h2>
          <p className="text-body text-soft-white/80 max-w-xl mx-auto font-light">
            Ich bin Sergey, Tätowierer und Gründer von AmorsNadel in Kamenz &amp; Dresden. In meinem Studio bekommst du handgezeichnete Tattoos, kompromisslose Hygiene und über 20 Jahre Erfahrung – alles aus einer Hand.
          </p>
          <div className="pt-2 relative flex flex-col items-center">
            <OrnamentDivider className="max-w-xs text-old-gold mx-auto" />
            <span className="font-hand text-old-gold text-2xl -rotate-[3deg] mt-2 block">
              mit Tinte und Geduld.
            </span>
          </div>
        </div>

        {/* Artists Section */}
        <div className="space-y-24" id="artists-presentation">
          {ARTISTS.map((artist, index) => (
            <div
              key={artist.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              id={`artist-block-${artist.id}`}
            >
              
              {/* Image box (5 columns) */}
              <div className={`lg:col-span-5 relative flex justify-center ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="relative w-full max-w-[360px] aspect-[4/5] border border-old-gold/20 p-2.5 z-10 bg-surface-dark">
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale brightness-[0.85] hover:grayscale-0 hover:brightness-100 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Decorative frame overlay */}
                  <div className="absolute inset-0 border border-soft-white/5 pointer-events-none margin-4 mb-4" />
                </div>
                {/* Visual decoration in background */}
                <div className="absolute -top-6 -right-6 text-old-gold/10 pointer-events-none">
                  <CompassRoseSvg className="h-44 w-44" />
                </div>
              </div>

              {/* Text box (7 columns) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-eyebrow uppercase tracking-widest text-tattoo-red">
                    {artist.role}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-soft-white">
                    {artist.name}
                  </h3>
                </div>

                <p className="text-body text-soft-white/80 font-light">
                  {artist.bio}
                </p>

                {/* Specialties / Stil-Fokus */}
                <div className="space-y-3">
                  <span className="block font-mono text-eyebrow uppercase tracking-[0.25em] text-old-gold border-b border-soft-white/10 pb-1.5 font-medium">
                    Stil-Schwerpunkte
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {artist.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="bg-surface-dark text-soft-white/80 border border-soft-white/10 px-3 py-1 text-xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages & Instagram */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-caption pt-2">
                  <div className="border border-soft-white/5 p-3.5 bg-surface-dark">
                    <span className="block text-eyebrow uppercase text-old-gold/70 mb-1">Sprachen</span>
                    <span className="text-soft-white/85">{artist.languages.join(' • ')}</span>
                  </div>
                  <div className="border border-soft-white/5 p-3.5 bg-surface-dark flex justify-between items-center">
                    <div>
                      <span className="block text-eyebrow uppercase text-old-gold/70 mb-1">Instagram</span>
                      <a
                        href={`https://instagram.com/${artist.instagram.substring(1)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-soft-white/90 hover:text-tattoo-red flex items-center space-x-1"
                      >
                        <span>{artist.instagram}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="pt-2">
                  <Link
                    to="/buchung"
                    state={{ preselectedArtist: artist.name }}
                    className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-old-gold hover:text-soft-white border-b border-old-gold pb-1 transition-colors group"
                  >
                    <span>Deine Tattoo-Idee mit {artist.name} besprechen</span>
                    <Flame className="h-4 w-4 text-tattoo-red transition-transform group-hover:rotate-12 group-hover:scale-110" />
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Portfolio Teaser (TattooGrid slice) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="portfolio-teaser-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Hautnah Zu Erleben</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-soft-white">Aktuelle Meisterwerke</h2>
          </div>
          <Link
            to="/galerie"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.15em] text-old-gold hover:text-soft-white transition-colors group"
          >
            <span>Gesamtes Portfolio ansehen</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Teaser Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTattoos.map((item) => (
            <div
              key={item.id}
              className="group border border-soft-white/10 p-3 bg-surface-dark relative block overflow-hidden"
              id={`teaser-item-${item.id}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-ink-black/85 text-old-gold font-mono text-eyebrow uppercase tracking-widest px-2 py-1 border border-old-gold/30">
                  {item.style}
                </span>
                <span className="absolute top-3 right-3 font-mono text-eyebrow text-old-gold bg-ink-black/85 px-2 py-1 border border-old-gold/30">
                  Nº 04{item.id}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-hand text-lg text-soft-white group-hover:text-old-gold transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="font-mono text-caption text-soft-white/60 flex justify-between items-center">
                  <span>Artist: {item.artist}</span>
                  <span className="text-tattoo-red text-caption">{item.duration}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4.5 Autoren-Tattoos & Exklusive Projekte (Tattoo Meeting Video Section) */}
      <section className="bg-ink-black py-28 border-t border-soft-white/10 relative overflow-hidden" id="autoren-tattoo-section">
        {/* Subtle Ambient Glow Background */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-old-gold/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-tattoo-red/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 border border-old-gold/30 bg-ink-black/80">
              <Sparkles className="h-3.5 w-3.5 text-old-gold" />
              <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-old-gold">Exklusive Autoren-Tattoos</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-soft-white">
              Wo deine Geschichte beginnt
            </h2>
            <p className="font-hand text-xl sm:text-2xl text-old-gold/90 font-light italic">
              &bdquo;Ein Tattoo ist mehr als nur Tinte unter der Haut.&ldquo;
            </p>
          </div>

          {/* Cinematic Split Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Cinematic Hochkant / Portrait Video Player (5 Cols) */}
            <div className="lg:col-span-5 relative group max-w-[420px] mx-auto w-full">
              {/* Decorative Frame Elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-old-gold/40 via-transparent to-tattoo-red/40 rounded-none blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-surface-dark border border-soft-white/15 p-2 sm:p-3 shadow-[0_0_60px_rgba(0,0,0,0.85)]">
                {/* Status / Location Tag overlaying top edge */}
                <div className="absolute top-5 left-5 z-20 pointer-events-none flex items-center space-x-2 bg-ink-black/90 border border-old-gold/40 px-3 py-1.5 backdrop-blur-md">
                  <Mountain className="h-3.5 w-3.5 text-old-gold" />
                  <span className="font-mono text-caption uppercase tracking-widest text-soft-white">
                    Outdoor &amp; Studio Sessions
                  </span>
                </div>

                {/* Portrait / Hochkant Video Player (2:3 Aspect Ratio - 0% Cropping) */}
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-ink-black">
                  <video
                    src="/videos/autoren-tattoo-meeting.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    Dein Browser unterstützt das HTML5-Video-Tag nicht.
                  </video>
                </div>

                {/* Video Caption Bar */}
                <div className="mt-3 px-3 py-2 flex items-center justify-between border-t border-soft-white/10 font-mono text-caption text-soft-white/60">
                  <span>Autoren-Tattoo Meeting</span>
                  <span className="text-old-gold">Einzigartiges Unikat</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Key Pillars (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Lead Narrative Text */}
              <div className="space-y-4 border-l-2 border-old-gold pl-6">
                <p className="text-body text-soft-white/90 font-light leading-relaxed">
                  Manche Tattoos entstehen nicht im Studio – sondern dort, wo ihre Geschichte beginnt.
                </p>
                <p className="text-body text-soft-white/75 font-light leading-relaxed">
                  Für besondere Projekte nehme ich mir Zeit: Wir sprechen über deine Idee, die Bedeutung, die Symbolik und erschaffen gemeinsam ein einzigartiges Unikat.
                </p>
              </div>

              {/* Feature Cards / Pillars */}
              <div className="space-y-4">
                
                {/* Pillar 1 */}
                <div className="bg-surface-dark/70 border border-soft-white/10 p-5 hover:border-old-gold/40 transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 bg-ink-black border border-old-gold/30 text-old-gold shrink-0">
                      <Mountain className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-soft-white font-normal">
                        Der perfekte Ort für deine Geschichte
                      </h3>
                      <p className="font-sans text-sm text-soft-white/70 mt-1 leading-relaxed">
                        Wenn es zur Geschichte passt, wählen wir sogar den perfekten Ort – zum Beispiel in den Bergen, am See oder an einem anderen Ort mit persönlicher Bedeutung. 🌲⛰️
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="bg-surface-dark/70 border border-soft-white/10 p-5 hover:border-old-gold/40 transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 bg-ink-black border border-old-gold/30 text-old-gold shrink-0">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-soft-white font-normal">
                        Vertrauen &amp; Atmosphäre
                      </h3>
                      <p className="font-sans text-sm text-soft-white/70 mt-1 leading-relaxed">
                        ✨ Ein exklusives Tattoo beginnt mit Vertrauen, einer starken Idee und der richtigen Atmosphäre für deine persönliche Symbolik.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="bg-surface-dark/70 border border-soft-white/10 p-5 hover:border-old-gold/40 transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 bg-ink-black border border-old-gold/30 text-old-gold shrink-0">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-soft-white font-normal">
                        Ein Leben lang an deiner Seite
                      </h3>
                      <p className="font-sans text-sm text-soft-white/70 mt-1 leading-relaxed">
                        Gemeinsam entwickeln wir dein Motiv und schaffen ein Tattoo, das nicht nur gut aussieht, sondern eine Geschichte erzählt und dich ein Leben lang begleitet. ❤️
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Call to Action Card */}
              <div className="pt-4 space-y-4">
                <p className="font-hand text-lg text-old-gold">
                  Wenn auch du von einem individuellen, tief durchdachten Autoren-Tattoo träumst, das wirklich zu dir passt, dann schreib mir. 💬
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to="/buchung"
                    className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-old-gold hover:bg-soft-white text-ink-black font-semibold font-mono text-xs uppercase tracking-wider transition-colors duration-300 shadow-lg"
                  >
                    <MessageSquare className="h-4 w-4 text-ink-black" />
                    <span>Schreib mir jetzt – Projekt anfragen</span>
                  </Link>
                </div>
                <p className="font-mono text-caption text-soft-white/50">
                  📩 Schreib mir jetzt – ich freue mich auf dein Projekt!
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. Testimonial slide / list */}
      <section className="bg-surface-dark py-24 border-t border-soft-white/10" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Kundeneindrücke</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-soft-white">Kundenstimmen &amp; Heilung</h2>
          </div>

          {/* Mobile View: Vertikal gestapelte Cards */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {TESTIMONIALS.map((t) => (
              <div
                key={`mobile-${t.id}`}
                className="bg-ink-black border border-soft-white/10 p-8 space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-old-gold text-old-gold" />
                    ))}
                  </div>
                  <p className="text-body text-soft-white/80 italic font-light">
                    &bdquo;{t.text}&ldquo;
                  </p>
                </div>
                
                <div className="pt-6 border-t border-soft-white/5 flex items-center justify-between">
                  <div>
                    <span className="block font-medium text-body text-soft-white">{t.name}</span>
                    <span className="block font-mono text-eyebrow text-tattoo-red uppercase tracking-wider">{t.style}</span>
                  </div>
                  <span className="font-mono text-caption text-soft-white/50">{t.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Sanft fließender, langsamer Marquee-Verlauf (stoppt bei Hover) */}
          <div className="hidden md:block overflow-hidden relative -mx-4 px-4">
            {/* Fade-Gradients am Rand für weiche Übergänge */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface-dark to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-slow space-x-8">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                <div
                  key={`desktop-${t.id}-${idx}`}
                  className="bg-ink-black border border-soft-white/10 p-8 space-y-4 relative flex flex-col justify-between w-[380px] shrink-0"
                >
                  <div className="space-y-4">
                    {/* Rating Stars */}
                    <div className="flex space-x-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-old-gold text-old-gold" />
                      ))}
                    </div>
                    <p className="text-body text-soft-white/80 italic font-light">
                      &bdquo;{t.text}&ldquo;
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-soft-white/5 flex items-center justify-between">
                    <div>
                      <span className="block font-medium text-body text-soft-white">{t.name}</span>
                      <span className="block font-mono text-eyebrow text-tattoo-red uppercase tracking-wider">{t.style}</span>
                    </div>
                    <span className="font-mono text-caption text-soft-white/50">{t.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial CTA button */}
          <div className="mt-12 text-center">
            <Link
              to="/buchung"
              className="inline-flex items-center space-x-3 px-8 py-3.5 bg-old-gold hover:bg-soft-white text-ink-black font-semibold font-mono text-xs uppercase tracking-wider transition-colors duration-300"
            >
              <Star className="h-4 w-4 text-ink-black" />
              <span>Überzeuge dich selbst – Jetzt Wunschtermin sichern</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 6. CTA booking Banner */}
      <section className="py-24 max-w-5xl mx-auto px-4" id="consultation-cta-section">
        <div className="border border-old-gold/30 bg-surface-dark p-8 md:p-16 text-center space-y-6 relative overflow-hidden">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-old-gold/50" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-old-gold/50" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-old-gold/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-old-gold/50" />
          
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Kostenlose Erstberatung</span>
            <h2 className="font-display text-2xl sm:text-4xl font-light text-soft-white tracking-wide">
              Bereit, deine eigene Geschichte unter die Haut zu bringen?
            </h2>
          </div>
          
          <p className="text-body text-soft-white/80 max-w-xl mx-auto font-light">
            Egal ob du bereits ein fertiges Motiv im Kopf hast oder mit einer unfertigen Idee zu uns kommst. Zusammen entwerfen wir ein Tattoo, das dich dein Leben lang begeistert.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              to="/buchung"
              className="px-8 py-3.5 bg-tattoo-red hover:bg-tattoo-red/80 text-soft-white text-xs font-mono uppercase tracking-[0.2em] transition-all rounded-none border border-tattoo-red"
            >
              Terminanfrage online stellen
            </Link>
            <a
              href="mailto:amorsnadel@gmail.com"
              className="px-8 py-3.5 bg-transparent hover:bg-soft-white/10 text-soft-white text-xs font-mono uppercase tracking-[0.2em] border border-soft-white/30 transition-all"
            >
              Schreib uns eine E-Mail
            </a>
          </div>
        </div>
      </section>

      {/* 7. Besuche Uns / Location & Directions */}
      <section className="py-24 border-t border-soft-white/5 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-center" id="home-studio-location">
        <div className="space-y-6 max-w-3xl mx-auto">
          <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Besuche Uns</span>
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-light text-soft-white">Atelier &amp; Standorte</h2>
            <p className="text-body text-soft-white/80 font-light">
              Mein Homestudio befindet sich in Kamenz (Neschwitzer Str. 11), außerdem empfange ich meine Kunden als Gast-Tätowierer in Sohland (Bahnhofstr. 17). Ich arbeite ausschließlich nach Termin, damit ich mir für dich und dein Motiv die volle Zeit nehmen kann. Stell einfach deine Anfrage, und wir finden gemeinsam deinen Wunschtermin.
            </p>
          </div>
        </div>

        {/* Studio Impressionen - 2-Spalten Bildergalerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-surface-dark border border-soft-white/10 hover:border-old-gold/40 transition-all duration-500 overflow-hidden group flex flex-col justify-between text-left">
            <div className="overflow-hidden bg-ink-black/40 h-64 sm:h-80 relative">
              <img
                src="/images/studio/tattoo-studio-amorsnadel-kamenz-dresden-atelier-1.webp"
                alt="AmorsNadel Tattoo Studio Atelier in Kamenz und Dresden – exklusives Ambiente für Custom Tattoos"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-5 bg-surface-dark/90 border-t border-soft-white/5 space-y-1">
              <span className="font-mono text-eyebrow uppercase tracking-[0.2em] text-old-gold block">AmorsNadel Studio</span>
              <h3 className="font-sans text-base font-medium text-soft-white group-hover:text-old-gold transition-colors">
                Privates Atelier &amp; Beratung
              </h3>
              <p className="text-caption text-soft-white/70 font-light">
                Ruhige, exklusive Atmosphäre – 100% Fokus auf dich und dein individuelles Motiv.
              </p>
            </div>
          </div>

          <div className="bg-surface-dark border border-soft-white/10 hover:border-old-gold/40 transition-all duration-500 overflow-hidden group flex flex-col justify-between text-left">
            <div className="overflow-hidden bg-ink-black/40 h-64 sm:h-80 relative">
              <img
                src="/images/studio/tattoo-studio-amorsnadel-kamenz-dresden-atelier-2.webp"
                alt="Hygienisch ausgestatteter Tattoo Arbeitsbereich und professionelles Equipment im Studio AmorsNadel Kamenz Dresden"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-5 bg-surface-dark/90 border-t border-soft-white/5 space-y-1">
              <span className="font-mono text-eyebrow uppercase tracking-[0.2em] text-old-gold block">Höchste Standards</span>
              <h3 className="font-sans text-base font-medium text-soft-white group-hover:text-old-gold transition-colors">
                Hygienischer Arbeitsplatz
              </h3>
              <p className="text-caption text-soft-white/70 font-light">
                Kompromisslose Sauberkeit, steriles Equipment &amp; modernste Technik für dein Tattoo.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs max-w-6xl mx-auto">
          {/* Homestudio Address */}
          <div className="space-y-3 bg-surface-dark/40 border border-soft-white/5 p-6 text-left">
            <div className="flex items-center space-x-2 text-old-gold pb-2 border-b border-soft-white/10">
              <HomeIcon className="h-4 w-4" />
              <span className="font-bold tracking-wider uppercase text-eyebrow">Homestudio</span>
            </div>
            <div className="text-soft-white/80 leading-relaxed font-sans text-body pt-2">
              <p className="font-medium text-soft-white">AmorsNadel Homestudio</p>
              <p className="mt-1 text-soft-white/80 font-mono text-caption text-old-gold">Neschwitzer Str. 11, 01917 Kamenz</p>
              <p className="mt-1 text-caption text-soft-white/60">Privates Atelier • Termine nach Vereinbarung</p>
            </div>
          </div>

          {/* Gast-Tätowierer Address */}
          <div className="space-y-3 bg-surface-dark/40 border border-soft-white/5 p-6 text-left">
            <div className="flex items-center space-x-2 text-old-gold pb-2 border-b border-soft-white/10">
              <MapPin className="h-4 w-4" />
              <span className="font-bold tracking-wider uppercase text-eyebrow">Gast-Tätowierer</span>
            </div>
            <div className="text-soft-white/80 leading-relaxed font-sans text-body pt-2">
              <p className="font-medium text-soft-white">Gast-Tätowierer Sessions</p>
              <p className="mt-1 text-soft-white/80 font-mono text-caption text-old-gold">Bahnhofstr. 17, 02689 Sohland</p>
              <p className="mt-1 text-caption text-soft-white/60">Kundenempfang als Gast-Tätowierer vor Ort</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3 bg-surface-dark/40 border border-soft-white/5 p-6 text-left">
            <div className="flex items-center space-x-2 text-old-gold pb-2 border-b border-soft-white/10">
              <Clock className="h-4 w-4" />
              <span className="font-bold tracking-wider uppercase text-eyebrow">Öffnungszeiten</span>
            </div>
            <div className="text-soft-white/80 leading-relaxed text-caption pt-2">
              <p><span className="text-soft-white/40">Mo – Fr</span> <span className="block font-sans text-body font-medium mt-0.5">12:00 – 20:00</span></p>
              <p className="mt-1"><span className="text-soft-white/40">Sa</span> <span className="block font-sans text-body font-medium mt-0.5">11:00 – 18:00</span></p>
              <p className="mt-1 text-soft-white/30">So · Geschlossen</p>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3 bg-surface-dark/40 border border-soft-white/5 p-6 text-left">
            <div className="flex items-center space-x-2 text-old-gold pb-2 border-b border-soft-white/10">
              <Mail className="h-4 w-4" />
              <span className="font-bold tracking-wider uppercase text-eyebrow">Direktkontakt</span>
            </div>
            <div className="text-soft-white/80 leading-relaxed text-caption word-break font-sans pt-2">
              <p className="text-caption text-soft-white/40 font-mono">E-Mail</p>
              <a href="mailto:amorsnadel@gmail.com" className="block text-soft-white hover:text-old-gold transition-colors text-body font-semibold truncate">
                amorsnadel@gmail.com
              </a>
              <p className="text-caption text-soft-white/40 font-mono mt-2">Telefon</p>
              <a href="tel:+491744312856" className="block text-soft-white hover:text-old-gold transition-colors text-body font-semibold">
                0174 4312856
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
