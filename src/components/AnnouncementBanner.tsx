import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, MapPin, ArrowRight } from 'lucide-react';

export const AnnouncementBanner: FC = () => {
  const announcements = [
    {
      id: 1,
      text: 'BEKANNTMACHUNG: Ab sofort empfange ich Kunden als Gast-Tätowierer unter der Adresse',
      highlight: 'Bahnhofstr. 17, 02689 Sohland an der Spree',
    },
    {
      id: 2,
      text: 'STANDORTE: Homestudio in Kamenz & Gast-Tätowierer Sessions in',
      highlight: 'Bahnhofstr. 17, 02689 Sohland',
    },
  ];

  return (
    <div
      className="relative z-40 bg-gradient-to-r from-[#8a0a1e] via-tattoo-red to-[#8a0a1e] border-y border-old-gold/40 text-soft-white overflow-hidden py-2.5 shadow-lg select-none"
      id="announcement-banner"
      aria-label="Wichtige Bekanntmachung zum Studio-Standort"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-old-gold/15 via-transparent to-transparent pointer-events-none" />

      <div className="flex overflow-hidden relative">
        <div className="animate-marquee-banner flex items-center whitespace-nowrap">
          {/* Duplicate multiple times for seamless infinite scroll */}
          {[...announcements, ...announcements, ...announcements, ...announcements].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="inline-flex items-center space-x-3 px-6 text-xs sm:text-caption font-mono tracking-wider"
            >
              <span className="inline-flex items-center justify-center bg-ink-black/60 text-old-gold px-2 py-0.5 rounded text-eyebrow border border-old-gold/30">
                <Megaphone className="h-3 w-3 mr-1.5 text-old-gold animate-pulse" />
                INFO
              </span>

              <span className="text-soft-white/90 font-sans">
                {item.text}{' '}
                <span className="inline-flex items-center text-old-gold font-semibold underline decoration-old-gold/50 underline-offset-4">
                  <MapPin className="h-3.5 w-3.5 mr-1 inline text-old-gold" />
                  {item.highlight}
                </span>
              </span>

              <Link
                to="/buchung"
                className="inline-flex items-center space-x-1 ml-2 px-3 py-0.5 bg-ink-black/80 hover:bg-ink-black text-old-gold border border-old-gold/50 hover:border-old-gold transition-all duration-300 text-eyebrow uppercase tracking-widest rounded-none group shrink-0"
              >
                <span>Termin anfragen</span>
                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <span className="text-soft-white/30 px-3">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
