import { FC, useState, useEffect, KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { X, Mail, Phone, Calendar, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoSvg } from './CustomSvgs';

export const WhatsAppWidget: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // Set current time (HH:MM) to display in simulated chat
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/491744312856?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setMessage('');
    setIsOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="whatsapp-widget-container">
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="whatsapp-trigger"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center justify-center w-14 h-14 bg-ink-black border border-old-gold rounded-full shadow-[0_0_20px_rgba(214,160,23,0.25)] text-soft-white hover:text-old-gold hover:border-green-500 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300 cursor-pointer relative group"
            aria-label="Kontakt-Widget öffnen"
          >
            {/* Glowing gold pulsing circle */}
            <span className="absolute inset-0 rounded-full border border-old-gold/30 group-hover:border-green-500/30 animate-ping opacity-60 pointer-events-none" />
            
            {/* Online Badge */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-ink-black rounded-full" />
            
            {/* WhatsApp Logo SVG */}
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 fill-[#D4A017] group-hover:fill-[#25D366] transition-colors duration-300 ease-in-out group-hover:rotate-12 transform"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.058 5.386 5.396.048 11.971.048c3.187.001 6.182 1.24 8.436 3.496 2.254 2.256 3.491 5.253 3.491 8.441-.003 6.584-5.342 11.921-11.916 11.921-2.004-.001-3.973-.505-5.724-1.467L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.247 0 9.518-4.268 9.52-9.517 0-2.543-1.01-4.933-2.846-6.771-1.838-1.838-4.27-2.85-6.81-2.852-5.25 0-9.52 4.269-9.523 9.52 0 1.63.486 3.22 1.408 4.606l-.997 3.64 3.723-.976zm11.23-6.19c-.297-.15-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.61-.92-2.203-.242-.584-.487-.504-.67-.514l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expandable Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="whatsapp-chatbox"
            initial={{ opacity: 0, y: 80, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.92 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="fixed md:absolute bottom-0 md:bottom-20 right-0 left-0 md:left-auto w-full md:w-[380px] bg-surface-dark/95 border-t md:border border-soft-white/10 md:rounded-2xl shadow-2xl backdrop-blur-md z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-ink-black px-4 py-3 border-b border-soft-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Logo with gold border */}
                <div className="w-10 h-10 rounded-full border border-old-gold p-1 flex items-center justify-center bg-surface-dark shadow-[0_0_10px_rgba(212,160,23,0.15)]">
                  <LogoSvg className="h-full w-full text-old-gold" />
                </div>
                <div>
                  <h4 className="font-hand text-2xl text-soft-white leading-none">AmorsNadel</h4>
                  <div className="flex items-center space-x-1.5 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-soft-white/60 tracking-wider uppercase">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-soft-white/60 hover:text-soft-white transition-colors rounded-lg bg-surface-dark/60 cursor-pointer"
                aria-label="Widget schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div 
              className="p-4 space-y-4 max-h-[260px] md:max-h-[300px] overflow-y-auto bg-ink-black/85 relative"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(13, 13, 13, 0.88), rgba(20, 20, 20, 0.94)), url('/textures/marble-06.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Message from studio */}
              <div className="flex flex-col space-y-1 items-start">
                <span className="text-[10px] font-mono text-old-gold/60 ml-1">AmorsNadel</span>
                <div className="bg-surface-dark/90 text-soft-white rounded-r-2xl rounded-bl-2xl p-3 border.5 border-soft-white/5 max-w-[85%] text-sm shadow-lg leading-relaxed">
                  <p>Hallo! 🖤 Hast du Fragen zu Tattoos, Piercings oder Permanent Make-up? Schreib uns einfach direkt hier!</p>
                  <span className="block text-[9px] text-soft-white/30 text-right mt-1.5 font-mono">{currentTime}</span>
                </div>
              </div>
            </div>

            {/* Message input and fallback hub */}
            <div className="p-4 bg-ink-black border-t border-soft-white/10 space-y-3">
              {/* Message inputs */}
              <div className="relative flex items-center">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Deine Nachricht hier eingeben..."
                  rows={2}
                  className="w-full bg-surface-dark border border-soft-white/15 rounded-xl pl-3 pr-10 py-2 text-sm text-soft-white placeholder-soft-white/30 focus:outline-none focus:border-old-gold/60 transition-colors resize-none leading-normal"
                />
                <button
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className={`absolute right-2 p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                    message.trim()
                      ? 'text-[#25D366] hover:text-white bg-[#25D366]/10 hover:bg-[#25D366]/20'
                      : 'text-soft-white/20 cursor-not-allowed'
                  }`}
                  aria-label="Nachricht senden"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {/* Redirect prompt */}
              <p className="text-[10px] text-center text-soft-white/40 font-mono tracking-wide">
                💡 Leitet zu WhatsApp weiter (keine App-Installation nötig).
              </p>

              {/* Alternatives divider */}
              <div className="relative py-1 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-soft-white/10"></div>
                </div>
                <span className="relative px-3 bg-ink-black text-[9px] font-mono text-soft-white/40 uppercase tracking-[0.15em]">
                  Alternativen
                </span>
              </div>

              {/* Alternative Quick links */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {/* Form navigation */}
                <Link
                  to="/buchung"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-1.5 py-2 px-2.5 border border-tattoo-red/30 hover:border-tattoo-red bg-tattoo-red/5 hover:bg-tattoo-red/10 text-soft-white hover:text-old-gold transition-all duration-300 text-center uppercase tracking-wider text-[9px]"
                >
                  <Calendar className="h-3.5 w-3.5 text-tattoo-red" />
                  <span>Anfrage-Form</span>
                </Link>

                {/* Direct Phone Call */}
                <a
                  href="tel:+491744312856"
                  className="flex items-center justify-center space-x-1.5 py-2 px-2.5 border border-soft-white/10 hover:border-old-gold/50 bg-surface-dark hover:bg-ink-black text-soft-white/70 hover:text-soft-white transition-all duration-300 uppercase tracking-wider text-[9px]"
                >
                  <Phone className="h-3.5 w-3.5 text-old-gold" />
                  <span>Anrufen</span>
                </a>
              </div>

              {/* E-Mail address shortcut */}
              <a
                href="mailto:amorsnadel@gmail.com"
                className="w-full flex items-center justify-center space-x-2 py-2 border border-soft-white/10 hover:border-old-gold/50 bg-surface-dark hover:bg-ink-black text-soft-white/70 hover:text-soft-white transition-all duration-300 text-[9px] uppercase tracking-widest font-mono"
              >
                <Mail className="h-3.5 w-3.5 text-old-gold" />
                <span>amorsnadel@gmail.com</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
