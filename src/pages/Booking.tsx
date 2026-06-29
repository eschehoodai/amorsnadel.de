import React, { useState, useEffect, FC } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Calendar as CalendarIcon, 
  User, 
  AlignLeft, 
  Check, 
  CheckCircle2, 
  RefreshCw, 
  ArrowRight, 
  ArrowLeft, 
  Mail, 
  Phone, 
  Clock, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { FAQS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { OrnamentDivider } from '../components/CustomSvgs';

interface FormState {
  style: string;
  placement: string;
  size: string;
  artist: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // Selected slot
  newsletter: boolean;
}

export const Booking: FC = () => {
  const location = useLocation();
  const preselected = location.state as { preselectedArtist?: string; preselectedStyle?: string } | null;

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [bookingType, setBookingType] = useState<'flexible' | 'fixed'>('flexible');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [submissionCode, setSubmissionCode] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  
  // Form Fields State
  const [formData, setFormData] = useState<FormState>({
    style: preselected?.preselectedStyle || 'Fineline',
    placement: '',
    size: 'Mittel (ca. 10-15 cm)',
    artist: preselected?.preselectedArtist || 'Sergey',
    name: '',
    email: '',
    phone: '',
    description: '',
    date: '',
    timeSlot: '',
    newsletter: false,
  });

  // Keep track of accordion open state in FAQs
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Errors for validation
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselected) {
      if (preselected.preselectedStyle) {
        setFormData(prev => ({ ...prev, style: preselected.preselectedStyle! }));
      }
      if (preselected.preselectedArtist) {
        setFormData(prev => ({ ...prev, artist: preselected.preselectedArtist! }));
      }
    }
  }, [preselected]);

  const tattooStyles = [
    { value: 'Fineline', label: 'Fineline (Feine Nadeln / Minimalistisch)' },
    { value: 'Blackwork', label: 'Blackwork (Sattes Schwarz / Kontrastreich)' },
    { value: 'Wikingisch', label: 'Wikingischer Stil (Mythen / Runen / Knoten)' },
    { value: 'Calligraphy', label: 'Kalligrafie (Schriftzüge / Schriftkunst)' },
    { value: 'Anime', label: 'Anime & Manga Art (Otaku- und Comicpanels)' },
    { value: 'Custom', label: 'Custom-Entwurf (Eigene Bildvorlage / Anderes)' },
  ];

  const sizeOptions = [
    { value: 'Klein (unter 5 cm)', label: 'Klein (Filigrane Akzente, unter 5 cm)' },
    { value: 'Mittel (ca. 10-15 cm)', label: 'Mittel (Klassisches Motiv, ca. 10-15 cm)' },
    { value: 'Groß (ca. 15-25 cm)', label: 'Groß (Oberschenkel, Rippenbogen, ca. 15-25 cm)' },
    { value: 'Großprojekt (Kompletter Arm/Rücken)', label: 'Großprojekt (Kompletter Ärmel, Rücken-Epos)' },
  ];

  const artistOptions = [
    { value: 'Sergey', label: 'Sergey (Studio-Inhaber & Master Artist)' },
  ];

  const monthNames = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    const now = new Date();
    if (currentMonth.getFullYear() > now.getFullYear() || currentMonth.getMonth() > now.getMonth()) {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    }
  };

  const isPastDate = (day: number) => {
    const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day, 23, 59, 59);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return checkDate < today;
  };

  const isSunday = (day: number) => {
    const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return checkDate.getDay() === 0;
  };

  const handleDateSelect = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const yyyy = selected.getFullYear();
    const mm = String(selected.getMonth() + 1).padStart(2, '0');
    const dd = String(selected.getDate()).padStart(2, '0');
    const dateStr = `${yyyy}-${mm}-${dd}`;
    
    setFormData(prev => ({ 
      ...prev, 
      date: dateStr,
      timeSlot: '' 
    }));
    
    if (fieldErrors.date) {
      setFieldErrors(prev => ({ ...prev, date: '' }));
    }
  };

  const getSlotsForDate = (dateString: string) => {
    if (!dateString) return [];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 6) {
      return [
        { value: 'Mittag (11:00 - 14:00)', label: 'Mittag (11:00 - 14:00)' },
        { value: 'Nachmittag (14:00 - 18:00)', label: 'Nachmittag (14:00 - 18:00)' }
      ];
    } else {
      return [
        { value: 'Mittag (12:00 - 15:00)', label: 'Mittag (12:00 - 15:00)' },
        { value: 'Nachmittag (15:00 - 18:00)', label: 'Nachmittag (15:00 - 18:00)' },
        { value: 'Abend (18:00 - 20:00)', label: 'Abend (18:00 - 20:00)' }
      ];
    }
  };

  const formatDateGerman = (dateString: string) => {
    if (!dateString) return '';
    const parts = dateString.split('-');
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
  };

  const validateStep1 = (): boolean => {
    if (bookingType === 'flexible') {
      return true;
    }
    const errors: Record<string, string> = {};
    if (!formData.date) {
      errors.date = 'Bitte wähle ein Wunschdatum im Kalender aus.';
    }
    if (!formData.timeSlot) {
      errors.timeSlot = 'Bitte wähle einen bevorzugten Zeitraum aus.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.placement.trim()) {
      errors.placement = 'Bitte gib die gewünschte Körperstelle an.';
    }
    if (!formData.size) {
      errors.size = 'Bitte wähle eine ungefähre Größe.';
    }
    if (!formData.description.trim()) {
      errors.description = 'Bitte beschreibe deine Motividee kurz.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep3 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Dein Name wird benötigt.';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Deine Telefonnummer ist für Rückfragen notwendig.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const code = `AMOR-${formData.date.replace(/-/g, '')}-${Math.floor(100 + Math.random() * 900)}`;
      setSubmissionCode(code);
      setIsSubmitting(false);
      setFormSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 1500);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayIndex = getFirstDayOfMonth(year, month);
  
  const calendarDays = [];
  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const selectedDateObject = formData.date ? new Date(formData.date) : null;
  const isSelected = (day: number) => {
    if (!selectedDateObject) return false;
    return selectedDateObject.getDate() === day &&
           selectedDateObject.getMonth() === month &&
           selectedDateObject.getFullYear() === year;
  };

  const weekdays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  const timeSlots = getSlotsForDate(formData.date);

  return (
    <div className="bg-transparent min-h-screen text-soft-white font-sans py-16" id="booking-page">
      <SEO 
        title="Termin buchen | AmorsNadel Tattoo & Piercing" 
        description="Buche deinen Termin für dein neues Tattoo, Piercing oder Permanent Make-up bei AmorsNadel. Wir freuen uns auf dich!" 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Online-Buchungsdienst</span>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-soft-white">Terminanfrage stellen</h1>
          <p className="text-body text-soft-white/80 max-w-xl mx-auto font-light">
            Wähle deinen Wunschtermin und beschreibe dein Wunschmotiv. Wir melden uns innerhalb von 48 Stunden mit der passenden Bestätigung bei dir.
          </p>
          <div className="pt-2">
            <OrnamentDivider className="max-w-xs text-old-gold mx-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24" id="booking-grid">
          
          <div className="lg:col-span-8 bg-surface-dark border border-soft-white/10 p-6 md:p-10 relative">
            <AnimatePresence mode="wait">
              
              {!formSubmitted ? (
                <div className="space-y-10" id="booking-interactive-form">
                  
                  <div className="flex items-center justify-between pb-6 border-b border-soft-white/10 text-eyebrow font-mono tracking-widest text-soft-white/40">
                    <span className={`font-bold transition-colors duration-300 ${currentStep === 1 ? 'text-old-gold' : 'text-soft-white/60'}`}>
                      1. TERMIN &amp; ZEIT
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-soft-white/20" />
                    <span className={`font-bold transition-colors duration-300 ${currentStep === 2 ? 'text-old-gold' : 'text-soft-white/60'}`}>
                      2. MOTIV &amp; DETAILS
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-soft-white/20" />
                    <span className={`font-bold transition-colors duration-300 ${currentStep === 3 ? 'text-old-gold' : 'text-soft-white/60'}`}>
                      3. KONTAKT
                    </span>
                  </div>

                  {currentStep === 1 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-8"
                      id="step-datetime"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-old-gold bg-old-gold/10 border border-old-gold/20 px-2.5 py-0.5 font-bold">1.</span>
                          <h3 className="font-sans text-xl font-semibold text-soft-white">Anfrage-Art &amp; Wunschtermin</h3>
                        </div>
                        <p className="text-body text-soft-white/75">Wähle, ob du eine einfache flexible Anfrage stellen oder direkt einen Wunschtermin reservieren möchtest.</p>
                      </div>

                      {/* Mode Selector */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div
                          onClick={() => {
                            setBookingType('flexible');
                            setFieldErrors({});
                          }}
                          className={`p-5 border cursor-pointer transition-all duration-200 space-y-2 relative flex flex-col justify-between ${
                            bookingType === 'flexible'
                              ? 'bg-old-gold/10 border-old-gold shadow-lg shadow-old-gold/5'
                              : 'bg-ink-black/40 border-soft-white/10 hover:border-soft-white/30'
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-eyebrow uppercase tracking-wider text-old-gold font-bold">Empfohlen (Schnell)</span>
                              <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${bookingType === 'flexible' ? 'border-old-gold bg-old-gold' : 'border-soft-white/30'}`}>
                                {bookingType === 'flexible' && <Check className="h-3 w-3 text-ink-black stroke-[3]" />}
                              </span>
                            </div>
                            <h4 className="font-sans text-lg font-semibold text-soft-white">Einfache Anfrage (Flexibel)</h4>
                            <p className="text-caption text-soft-white/75 font-light">
                              Du hast noch keinen festen Termin oder möchtest dich erst unverbindlich beraten lassen.
                            </p>
                          </div>
                        </div>

                        <div
                          onClick={() => {
                            setBookingType('fixed');
                            setFieldErrors({});
                          }}
                          className={`p-5 border cursor-pointer transition-all duration-200 space-y-2 relative flex flex-col justify-between ${
                            bookingType === 'fixed'
                              ? 'bg-old-gold/10 border-old-gold shadow-lg shadow-old-gold/5'
                              : 'bg-ink-black/40 border-soft-white/10 hover:border-soft-white/30'
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-eyebrow uppercase tracking-wider text-soft-white/50">Optional</span>
                              <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${bookingType === 'fixed' ? 'border-old-gold bg-old-gold' : 'border-soft-white/30'}`}>
                                {bookingType === 'fixed' && <Check className="h-3 w-3 text-ink-black stroke-[3]" />}
                              </span>
                            </div>
                            <h4 className="font-sans text-lg font-semibold text-soft-white">Kalender-Wunschtermin</h4>
                            <p className="text-caption text-soft-white/75 font-light">
                              Wähle direkt einen festen Tag im Kalender und ein Zeitfenster für deinen Termin aus.
                            </p>
                          </div>
                        </div>
                      </div>

                      {bookingType === 'flexible' ? (
                        <div className="p-6 bg-ink-black/40 border border-soft-white/10 space-y-6">
                          <div className="flex items-start space-x-3">
                            <Clock className="h-5 w-5 text-old-gold shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              <h4 className="font-sans text-base font-semibold text-soft-white">Terminabsprache im Anschluss</h4>
                              <p className="text-body text-soft-white/75 font-light">
                                Klicke einfach auf <strong>„Weiter zu Motivdetails“</strong>. Wir stimmen mögliche freie Termine direkt persönlich anhand deiner Motividee mit dir ab.
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2 max-w-md">
                            <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">
                              Dein Wunsch-Artist
                            </label>
                            <div className="relative">
                              <select
                                value={formData.artist}
                                onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                                className="w-full bg-ink-black border border-soft-white/10 px-4 py-3.5 text-base text-soft-white focus:outline-none focus:border-old-gold appearance-none"
                              >
                                {artistOptions.map(opt => (
                                  <option key={opt.value} value={opt.value} className="bg-surface-dark">{opt.label}</option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-soft-white/50 pointer-events-none" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="border border-soft-white/10 bg-ink-black/60 p-5 rounded-none">
                            
                            <div className="flex items-center justify-between mb-6">
                              <h4 className="font-display font-medium text-old-gold uppercase tracking-wider text-sm">
                                {monthNames[month]} {year}
                              </h4>
                              <div className="flex space-x-2">
                                <button 
                                  onClick={prevMonth}
                                  className="p-2 border border-soft-white/10 text-soft-white/60 hover:text-old-gold hover:border-old-gold transition-colors disabled:opacity-30 disabled:pointer-events-none"
                                  disabled={currentMonth.getFullYear() === new Date().getFullYear() && currentMonth.getMonth() === new Date().getMonth()}
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button 
                                  onClick={nextMonth}
                                  className="p-2 border border-soft-white/10 text-soft-white/60 hover:text-old-gold hover:border-old-gold transition-colors"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </button>
                              </div>
                            </div>

                            <div className="grid grid-cols-7 gap-1 text-center font-mono text-[11px] text-soft-white/40 uppercase font-bold mb-3">
                              {weekdays.map(day => (
                                <div key={day} className="py-1">{day}</div>
                              ))}
                            </div>

                            <div className="grid grid-cols-7 gap-1">
                              {calendarDays.map((day, idx) => {
                                if (day === null) {
                                  return <div key={`empty-${idx}`} className="aspect-square" />;
                                }

                                const isPast = isPastDate(day);
                                const isSun = isSunday(day);
                                const isDisabled = isPast || isSun;
                                const selected = isSelected(day);

                                return (
                                  <button
                                    key={`day-${day}`}
                                    disabled={isDisabled}
                                    onClick={() => handleDateSelect(day)}
                                    className={`aspect-square text-caption font-mono border transition-all duration-200 flex flex-col items-center justify-center relative ${
                                      selected 
                                        ? 'bg-old-gold border-old-gold text-ink-black font-bold scale-[1.03]'
                                        : isDisabled
                                          ? 'border-transparent text-soft-white/15 cursor-not-allowed bg-transparent'
                                          : 'bg-surface-dark/40 border-soft-white/5 text-soft-white/80 hover:border-old-gold/50 hover:text-old-gold'
                                    }`}
                                  >
                                    <span>{day}</span>
                                    {day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear() && (
                                      <span className={`w-1.5 h-1.5 rounded-full absolute bottom-1.5 ${selected ? 'bg-ink-black' : 'bg-tattoo-red'}`} />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                            
                            {fieldErrors.date && (
                              <p className="text-caption text-tattoo-red font-mono mt-4 flex items-center gap-1.5">
                                <span>* {fieldErrors.date}</span>
                              </p>
                            )}
                          </div>

                          <div className="flex flex-col justify-between space-y-6">
                            
                            <div className="space-y-3">
                              <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">
                                Bevorzugte Uhrzeit *
                              </label>
                              
                              {!formData.date ? (
                                <div className="border border-dashed border-soft-white/10 p-6 text-center text-caption text-soft-white/40 font-mono">
                                  Wähle zuerst ein Datum links im Kalender aus.
                                </div>
                              ) : (
                                <div className="space-y-3">
                                  <p className="text-caption font-mono text-soft-white/60">
                                    Termine am <span className="text-old-gold">{formatDateGerman(formData.date)}</span>:
                                  </p>
                                  <div className="grid grid-cols-1 gap-2">
                                    {timeSlots.map((slot) => (
                                      <button
                                        key={slot.value}
                                        onClick={() => {
                                          setFormData(prev => ({ ...prev, timeSlot: slot.value }));
                                          if (fieldErrors.timeSlot) {
                                            setFieldErrors(prev => ({ ...prev, timeSlot: '' }));
                                          }
                                        }}
                                        className={`p-3.5 border text-left text-caption transition-colors flex justify-between items-center ${
                                          formData.timeSlot === slot.value
                                            ? 'bg-ink-black border-old-gold text-old-gold font-bold'
                                            : 'bg-ink-black/40 border-soft-white/5 text-soft-white/80 hover:border-soft-white/20'
                                        }`}
                                      >
                                        <span>{slot.label}</span>
                                        {formData.timeSlot === slot.value && <Check className="h-4 w-4 text-tattoo-red" />}
                                      </button>
                                    ))}
                                  </div>
                                  {fieldErrors.timeSlot && <p className="text-caption text-tattoo-red font-mono mt-1">* {fieldErrors.timeSlot}</p>}
                                </div>
                              )}
                            </div>

                            <div className="space-y-2">
                              <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">
                                Dein Artist
                              </label>
                              <div className="relative">
                                <select
                                  value={formData.artist}
                                  onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                                  className="w-full bg-ink-black border border-soft-white/10 px-4 py-3.5 text-base text-soft-white focus:outline-none focus:border-old-gold appearance-none"
                                >
                                  {artistOptions.map(opt => (
                                    <option key={opt.value} value={opt.value} className="bg-surface-dark">{opt.label}</option>
                                  ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-soft-white/50 pointer-events-none" />
                              </div>
                            </div>

                          </div>
                        </div>
                      )}

                      <div className="pt-6 border-t border-soft-white/10 flex justify-end">
                        <button
                          onClick={nextStep}
                          className="px-8 py-3.5 bg-old-gold text-ink-black hover:bg-soft-white hover:text-ink-black text-xs font-mono uppercase tracking-[0.2em] font-bold flex items-center space-x-2.5 transition-colors duration-300"
                        >
                          <span>{bookingType === 'flexible' ? 'Weiter zu Motivdetails' : 'Wunschtermin übernehmen & weiter'}</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-8"
                      id="step-motiv"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-old-gold bg-old-gold/10 border border-old-gold/20 px-2.5 py-0.5 font-bold">2.</span>
                          <h3 className="font-sans text-xl font-semibold text-soft-white">Motiv- &amp; Projekt-Details</h3>
                        </div>
                        <p className="text-body text-soft-white/75">Erzähle Sergey mehr über deine Wunschvorstellung.</p>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-ink-black/40 border border-old-gold/20 px-4 py-3 flex items-center justify-between text-caption font-mono">
                          <span className="text-soft-white/60">Gewählter Termin:</span>
                          <span className="text-old-gold font-bold">
                            {bookingType === 'fixed' && formData.date ? `${formatDateGerman(formData.date)}${formData.timeSlot ? ` @ ${formData.timeSlot}` : ''}` : 'Flexibel / Nach Vereinbarung'}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">Tattoo-Stil</label>
                          <div className="relative">
                            <select
                              value={formData.style}
                              onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                              className="w-full bg-ink-black border border-soft-white/10 px-4 py-3.5 text-base text-soft-white focus:outline-none focus:border-old-gold appearance-none"
                            >
                              {tattooStyles.map(opt => (
                                <option key={opt.value} value={opt.value} className="bg-surface-dark">{opt.label}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-soft-white/50 pointer-events-none" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">Körperstelle *</label>
                          <input
                            type="text"
                            placeholder="z.B. Rechter Unterarm, Nacken, Wirbelsäule, Knöchel..."
                            value={formData.placement}
                            onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                            className="w-full bg-ink-black border border-soft-white/10 px-4 py-3.5 text-base text-soft-white focus:outline-none focus:border-old-gold"
                          />
                          {fieldErrors.placement && <p className="text-caption text-tattoo-red font-mono">{fieldErrors.placement}</p>}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">Gewünschte Größe *</label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {sizeOptions.map((opt) => (
                              <div
                                key={opt.value}
                                onClick={() => setFormData({ ...formData, size: opt.value })}
                                className={`p-4 border cursor-pointer transition-colors text-caption flex justify-between items-center ${
                                  formData.size === opt.value
                                    ? 'bg-ink-black border-old-gold text-old-gold font-medium'
                                    : 'bg-ink-black/40 border-soft-white/5 text-soft-white/70 hover:border-soft-white/20'
                                  }`}
                              >
                                <span>{opt.label}</span>
                                {formData.size === opt.value && <Check className="h-4 w-4 text-tattoo-red" />}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">Motivbeschreibung &amp; Ideen *</label>
                          <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows={4}
                            placeholder="Beschreibe kurz das Motiv: Symbole, Bedeutung, Schriftzüge oder sonstige Wünsche (z. B. feine florale Ornamente, geometrische Linien)..."
                            className="w-full bg-ink-black border border-soft-white/10 p-4 text-base focus:outline-none focus:border-old-gold resize-none"
                          />
                          {fieldErrors.description && <p className="text-caption text-tattoo-red font-mono">{fieldErrors.description}</p>}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-soft-white/10 flex justify-between">
                        <button
                          onClick={prevStep}
                          className="px-6 py-3.5 border border-soft-white/20 text-soft-white/70 hover:text-soft-white hover:border-soft-white text-xs font-mono uppercase tracking-[0.2em] font-bold flex items-center space-x-2 transition-colors duration-300"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span>Zurück</span>
                        </button>
                        <button
                          onClick={nextStep}
                          className="px-8 py-3.5 bg-old-gold text-ink-black hover:bg-soft-white hover:text-ink-black text-xs font-mono uppercase tracking-[0.2em] font-bold flex items-center space-x-2.5 transition-colors duration-300"
                        >
                          <span>Weiter zu Kontaktdaten</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-8"
                      id="step-contact"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-old-gold bg-old-gold/10 border border-old-gold/20 px-2.5 py-0.5 font-bold">3.</span>
                          <h3 className="font-sans text-xl font-semibold text-soft-white">Deine Kontaktdaten</h3>
                        </div>
                        <p className="text-body text-soft-white/75">Teile uns mit, wie wir dich für die Terminbestätigung erreichen können.</p>
                      </div>

                      <form onSubmit={handleSubmitForm} className="space-y-6">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-caption font-mono">
                          <div className="bg-ink-black/40 border border-soft-white/10 px-4 py-3 flex justify-between">
                            <span className="text-soft-white/50">Termin:</span>
                            <span className="text-old-gold font-bold">{formatDateGerman(formData.date)}</span>
                          </div>
                          <div className="bg-ink-black/40 border border-soft-white/10 px-4 py-3 flex justify-between">
                            <span className="text-soft-white/50">Zeitraum:</span>
                            <span className="text-old-gold font-bold">{formData.timeSlot}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">Vollständiger Name *</label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="z.B. Sarah Kaiser"
                              className="w-full bg-ink-black border border-soft-white/10 px-4 py-3 text-base focus:outline-none focus:border-old-gold"
                            />
                            {fieldErrors.name && <p className="text-caption text-tattoo-red font-mono">{fieldErrors.name}</p>}
                          </div>
                          
                          <div className="space-y-2">
                            <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">E-Mail-Adresse *</label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="sarah.kaiser@email.de"
                              className="w-full bg-ink-black border border-soft-white/10 px-4 py-3 text-base focus:outline-none focus:border-old-gold"
                            />
                            {fieldErrors.email && <p className="text-caption text-tattoo-red font-mono">{fieldErrors.email}</p>}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-eyebrow font-mono text-old-gold uppercase tracking-wider">Telefonnummer *</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="z.B. +49 174 4312856"
                            className="w-full bg-ink-black border border-soft-white/10 px-4 py-3 text-base focus:outline-none focus:border-old-gold"
                          />
                          {fieldErrors.phone && <p className="text-caption text-tattoo-red font-mono">{fieldErrors.phone}</p>}
                        </div>

                        <div className="flex items-start space-x-3 pt-2 text-body text-soft-white/75">
                          <input
                            type="checkbox"
                            id="newsletter"
                            checked={formData.newsletter}
                            onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                            className="mt-1 accent-tattoo-red shrink-0"
                          />
                          <label htmlFor="newsletter" className="leading-relaxed cursor-pointer select-none">
                            Ich stimme zu, dass AmorsNadel meine Formulardaten speichert, um meine Anfrage zu bearbeiten.
                          </label>
                        </div>

                        <div className="pt-6 border-t border-soft-white/10 flex justify-between">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-3.5 border border-soft-white/20 text-soft-white/70 hover:text-soft-white hover:border-soft-white text-xs font-mono uppercase tracking-[0.2em] font-bold flex items-center space-x-2 transition-colors duration-300"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Zurück</span>
                          </button>
                          
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-10 py-4 bg-old-gold text-ink-black hover:bg-soft-white hover:text-ink-black disabled:bg-old-gold/40 text-xs font-mono uppercase tracking-[0.2em] font-bold flex items-center space-x-3 transition-colors duration-300"
                          >
                            {isSubmitting ? (
                              <>
                                <RefreshCw className="h-4 w-4 animate-spin" />
                                <span>Wird gesendet...</span>
                              </>
                            ) : (
                              <>
                                <span>Anfrage absenden</span>
                                <Check className="h-4 w-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}

                </div>
              ) : (
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8 text-center py-8"
                  id="booking-success"
                >
                  <div className="flex justify-center">
                    <CheckCircle2 className="h-16 w-16 text-old-gold animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-hand text-2xl sm:text-3xl text-soft-white">Vielen Dank für deine Anfrage!</h3>
                    <p className="text-body text-soft-white/80 max-w-md mx-auto">
                      Deine Wunschzeit wurde reserviert. Unser Team meldet sich in Kürze persönlich bei dir mit weiteren Skizzenentwürfen und dem finalen Termin.
                    </p>
                  </div>

                  <div className="border border-old-gold/20 bg-ink-black/80 max-w-md mx-auto p-6 font-mono text-caption text-left text-soft-white/80 space-y-3">
                    <div className="border-b border-soft-white/10 pb-2.5 flex justify-between text-caption">
                      <span className="text-old-gold uppercase">Referenz-Code:</span>
                      <strong className="text-soft-white">{submissionCode}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Wunschdatum:</span>
                      <span className="text-soft-white font-bold">{bookingType === 'fixed' && formData.date ? formatDateGerman(formData.date) : 'Flexibel / Nach Vereinbarung'}</span>
                    </div>
                    {bookingType === 'fixed' && formData.timeSlot && (
                      <div className="flex justify-between">
                        <span>Wunschzeit:</span>
                        <span className="text-soft-white font-bold">{formData.timeSlot}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span className="text-soft-white">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wunschstil:</span>
                      <span className="text-soft-white">{formData.style}</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 max-w-md mx-auto text-body text-soft-white/75 font-light leading-relaxed">
                    <p>
                      Wir senden dir eine vorläufige Bestätigung an <strong>{formData.email}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setFormData({
                          style: 'Fineline',
                          placement: '',
                          size: 'Mittel (ca. 10-15 cm)',
                          artist: 'Sergey',
                          name: '',
                          email: '',
                          phone: '',
                          description: '',
                          date: '',
                          timeSlot: '',
                          newsletter: false,
                        });
                        setFormSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="px-6 py-3 bg-transparent border border-soft-white/20 text-soft-white/70 hover:text-soft-white hover:border-soft-white uppercase text-eyebrow font-mono tracking-widest"
                    >
                      Eine weitere Anfrage stellen
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4 space-y-8" id="booking-info-rail">
            
            <div className="border border-soft-white/10 p-6 bg-surface-dark space-y-4">
              <h3 className="font-sans text-lg font-semibold text-soft-white border-b border-soft-white/10 pb-2">Unsere Erreichbarkeit</h3>
              
              <ul className="space-y-4 text-caption text-soft-white/80">
                <li className="flex items-start space-x-3">
                  <Mail className="h-4.5 w-4.5 text-tattoo-red mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-old-gold uppercase text-eyebrow">E-Mail</span>
                    <a href="mailto:atelier@amorsnadel.de" className="text-soft-white/90 hover:text-old-gold transition-colors font-sans text-body">
                      atelier@amorsnadel.de
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <Phone className="h-4.5 w-4.5 text-tattoo-red mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-old-gold uppercase text-eyebrow">Telefon</span>
                    <a href="tel:+491744312856" className="text-soft-white/90 hover:text-old-gold transition-colors font-sans text-body">
                      0174 4312856
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <Clock className="h-4.5 w-4.5 text-tattoo-red mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-old-gold uppercase text-eyebrow">Kapazitäten</span>
                    <span className="block text-soft-white/90 font-sans text-body mt-0.5">
                      Wartezeit ca. 1-3 Wochen bei Vorbesprechung. Spontantermin („Walk-Ins“) nur auf Anfrage.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border border-old-gold/20 p-6 bg-ink-black space-y-3 relative">
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-old-gold/50" />
              <h4 className="font-sans text-base font-semibold tracking-widest uppercase text-old-gold">Hinweis zu Preisen</h4>
              <p className="text-body text-soft-white/80 font-light">
                Unsere Mindestpreise für Tätowierungen starten bei <strong>80,- EUR</strong> zur Abdeckung steriler Einwegmaterialien und Rüstzeiten. Der finale Preis basiert auf Motiv-Komplexität, Einspitz-Präzision und der tatsächlichen Stechzeit.
              </p>
            </div>

          </div>

        </div>

        <section className="mt-20 border-t border-soft-white/10 pt-16" id="faq-section">
          <div className="text-center space-y-3 mb-12">
            <span className="font-mono text-eyebrow uppercase tracking-[0.3em] text-tattoo-red">Häufige Fragen</span>
            <h2 className="font-display text-3xl font-light text-soft-white">Fragen &amp; Antworten</h2>
            <div className="w-12 h-[1px] bg-old-gold mx-auto mt-2" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4" id="faq-accordion-group">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-soft-white/10 bg-surface-dark transition-all duration-300 overflow-hidden"
                  id={`faq-${faq.id}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left font-display text-base sm:text-lg text-soft-white hover:text-old-gold transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-old-gold shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-soft-white/5 bg-ink-black/40"
                      >
                        <div className="px-6 py-5 text-body text-soft-white/80 font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};
