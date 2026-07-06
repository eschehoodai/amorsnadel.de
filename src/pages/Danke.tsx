import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/SEO';
import { OrnamentDivider } from '../components/CustomSvgs';
import { CheckCircle2, Calendar, Clock, User, Mail, Sparkles, ArrowRight, Instagram, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface DankeState {
  submissionCode?: string;
  name?: string;
  date?: string;
  timeSlot?: string;
  email?: string;
  style?: string;
  service?: string;
  bookingType?: string;
  formType?: string;
}

export const Danke: FC = () => {
  const location = useLocation();
  const state = (location.state as DankeState) || {};

  const formatDateGerman = (dateString?: string) => {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length === 3) {
      return `${parts[2]}.${parts[1]}.${parts[0]}`;
    }
    return dateString;
  };

  const hasPersonalData = Boolean(state.name || state.submissionCode || state.date || state.service || state.style);

  return (
    <div className="bg-transparent min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="danke-page">
      <SEO 
        title="Vielen Dank für deine Anfrage! | AmorsNadel" 
        description="Deine Anfrage wurde erfolgreich bei AmorsNadel eingereicht. Wir melden uns in Kürze persönlich bei dir." 
      />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-20 select-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-old-gold rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-tattoo-red rounded-full blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 max-w-2xl mx-auto" id="danke-header"
        >
          <div className="mx-auto w-20 h-20 bg-old-gold/10 border border-old-gold/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <CheckCircle2 className="h-10 w-10 text-old-gold animate-bounce" />
          </div>

          <div className="space-y-3">
            <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-old-gold">
              Anfrage erfolgreich gesendet
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-light text-soft-white tracking-wide">
              {hasPersonalData && state.name ? `Vielen Dank, ${state.name}!` : 'Vielen Dank für deine Anfrage!'}
            </h1>
          </div>

          <div className="pt-2">
            <OrnamentDivider className="max-w-xs text-old-gold mx-auto" />
          </div>

          <p className="text-body text-soft-white/80 font-light leading-relaxed max-w-lg mx-auto">
            {hasPersonalData ? (
              <>Wir haben deine Anfrage erfolgreich erhalten. Unser Studio-Team prüft deine Angaben und meldet sich in Kürze persönlich bei dir, um Skizzenentwürfe und den finalen Termin abzustimmen.</>
            ) : (
              <>Deine Nachricht wurde erfolgreich an unser Studio übermittelt. Unser Team prüft dein Anliegen und meldet sich so schnell wie möglich persönlich bei dir.</>
            )}
          </p>
        </motion.div>

        {/* Details Card */}
        {hasPersonalData && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface-dark border border-old-gold/30 p-6 md:p-10 space-y-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-old-gold/5 rounded-bl-full pointer-events-none" />

            {state.submissionCode && (
              <div className="border border-old-gold/30 bg-ink-black/90 p-5 font-mono text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-2 text-soft-white/70 text-xs uppercase tracking-wider">
                  <Tag className="h-4 w-4 text-old-gold" />
                  <span>Referenz-Code für Rückfragen:</span>
                </div>
                <strong className="text-old-gold text-lg tracking-widest font-bold bg-old-gold/10 px-4 py-1.5 border border-old-gold/20">
                  {state.submissionCode}
                </strong>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="font-mono text-caption uppercase tracking-widest text-soft-white/60 border-b border-soft-white/10 pb-2">
                Zusammenfassung deiner Angaben
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-light">
                {state.name && (
                  <div className="flex items-start gap-3 p-3 bg-ink-black/40 border border-soft-white/5">
                    <User className="h-4 w-4 text-old-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs text-soft-white/50 uppercase font-mono">Name</span>
                      <span className="text-soft-white font-medium">{state.name}</span>
                    </div>
                  </div>
                )}

                {state.email && (
                  <div className="flex items-start gap-3 p-3 bg-ink-black/40 border border-soft-white/5">
                    <Mail className="h-4 w-4 text-old-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs text-soft-white/50 uppercase font-mono">E-Mail</span>
                      <span className="text-soft-white font-medium">{state.email}</span>
                    </div>
                  </div>
                )}

                {(state.style || state.service) && (
                  <div className="flex items-start gap-3 p-3 bg-ink-black/40 border border-soft-white/5">
                    <Sparkles className="h-4 w-4 text-old-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs text-soft-white/50 uppercase font-mono">
                        {state.service ? 'Gewünschter Service' : 'Wunschstil'}
                      </span>
                      <span className="text-soft-white font-medium">{state.service || state.style}</span>
                    </div>
                  </div>
                )}

                {state.date && (
                  <div className="flex items-start gap-3 p-3 bg-ink-black/40 border border-soft-white/5">
                    <Calendar className="h-4 w-4 text-old-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs text-soft-white/50 uppercase font-mono">Wunschdatum</span>
                      <span className="text-soft-white font-medium">
                        {state.bookingType === 'flexible' ? 'Flexibel / Nach Vereinbarung' : formatDateGerman(state.date)}
                      </span>
                    </div>
                  </div>
                )}

                {state.timeSlot && state.bookingType !== 'flexible' && (
                  <div className="flex items-start gap-3 p-3 bg-ink-black/40 border border-soft-white/5">
                    <Clock className="h-4 w-4 text-old-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs text-soft-white/50 uppercase font-mono">Wunschzeit</span>
                      <span className="text-soft-white font-medium">{state.timeSlot}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-old-gold/5 border border-old-gold/20 p-4 text-xs text-soft-white/70 font-light leading-relaxed">
              <span className="text-old-gold font-mono uppercase tracking-wider font-semibold block mb-1">
                Wie geht es weiter?
              </span>
              Wir haben dir (falls angegeben) eine Eingangsbestätigung an deine E-Mail-Adresse gesendet. Bitte prüfe auch deinen Spam-Ordner, falls du innerhalb der nächsten 10 Minuten keine Nachricht in deinem Posteingang siehst.
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
        >
          <Link
            to="/"
            className="px-8 py-4 bg-old-gold text-ink-black hover:bg-soft-white transition-colors font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Zurück zur Startseite</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          <a
            href="https://www.instagram.com/amors_nadel_"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-surface-dark border border-soft-white/20 text-soft-white/80 hover:text-soft-white hover:border-old-gold transition-all font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <Instagram className="h-4 w-4 text-old-gold" />
            <span>Folge uns auf Instagram</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
