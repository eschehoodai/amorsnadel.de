import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  CheckCircle2, 
  RefreshCw,
  Home,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FormState {
  service: string;
  name: string;
  email: string;
  phone: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // Selected slot
}

export const SocialBooking: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  
  // Form Fields State
  const [formData, setFormData] = useState<FormState>({
    service: 'Tattoo',
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
  });

  const services = [
    { value: 'Tattoo', label: 'Tattoo (Custom Design)' },
    { value: 'Piercing', label: 'Piercing & Schmuckwechsel' },
    { value: 'Permanent Makeup', label: 'Permanent Make-up' },
    { value: 'Beratung', label: 'Kostenlose Beratung' },
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
    return day === 0 ? 6 : day - 1; // Start on Monday
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
    if (dayOfWeek === 6) { // Saturday
      return ['11:00', '13:00', '15:00', '17:00'];
    } else { // Mon-Fri
      return ['12:00', '14:00', '16:00', '18:00'];
    }
  };

  const formatDateGerman = (dateString: string) => {
    if (!dateString) return '';
    const parts = dateString.split('-');
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
  };

  const validateStep1 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.date) errors.date = 'Bitte wähle ein Datum.';
    if (!formData.timeSlot) errors.timeSlot = 'Bitte wähle eine Uhrzeit.';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Dein Name fehlt.';
    if (!formData.phone.trim()) errors.phone = 'Bitte gib eine Nummer an.';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    const code = `AMOR-SOC-${formData.date ? formData.date.replace(/-/g, '') : 'FLEX'}-${Math.floor(100 + Math.random() * 900)}`;
    let finalCode = code;

    try {
      const response = await fetch('/send_mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submissionCode: code,
          formType: 'Schnellbuchung (Social Media)'
        }),
      });
      const result = await response.json();
      if (result && result.code) {
        finalCode = result.code;
      }
    } catch (error) {
      console.error('Fehler beim Senden des Formulars:', error);
    } finally {
      setIsSubmitting(false);
      navigate('/danke', {
        state: {
          submissionCode: finalCode,
          name: formData.name,
          date: formData.date,
          timeSlot: formData.timeSlot,
          email: formData.email,
          service: formData.service,
          formType: 'Schnellbuchung (Social Media)'
        }
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
    <div className="bg-ink-black min-h-screen text-soft-white font-sans flex flex-col relative" id="social-booking-page">
      <SEO 
        title="Termin buchen | AmorsNadel" 
        description="Buche deinen Termin für Tattoo, Piercing oder Permanent Make-up bei AmorsNadel direkt online." 
      />
      
      {/* Simplified Header for Instagram-Like funnel */}
      <header className="p-6 flex items-center justify-between border-b border-soft-white/10 sticky top-0 z-50 bg-ink-black/90 backdrop-blur-md">
        <Link to="/" className="font-hand text-3xl text-soft-white flex items-center gap-2">
          Amors<span className="text-tattoo-red">Nadel</span>
        </Link>
        <Link to="/" className="text-soft-white/60 hover:text-old-gold transition-colors p-2">
          <Home className="h-5 w-5" />
        </Link>
      </header>

      <main className="flex-grow max-w-md mx-auto w-full px-4 py-8">
        
        <div className="text-center mb-8 space-y-2">
          <h1 className="font-display text-3xl text-soft-white tracking-wide">Buchung</h1>
          <p className="text-soft-white/60 text-sm font-light">Wähle einfach deinen Service und deinen Wunschtermin aus.</p>
        </div>

        <AnimatePresence mode="wait">
            <motion.div 
              key={`step-${currentStep}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              
              {/* Progress Indicator */}
              <div className="flex gap-2 mb-6">
                <div className={`h-1 flex-1 ${currentStep >= 1 ? 'bg-old-gold' : 'bg-soft-white/10'}`} />
                <div className={`h-1 flex-1 ${currentStep >= 2 ? 'bg-old-gold' : 'bg-soft-white/10'}`} />
              </div>

              {currentStep === 1 && (
                <div className="space-y-8">
                  
                  {/* Service Selection */}
                  <div className="space-y-3">
                    <label className="block text-xs font-mono text-old-gold uppercase tracking-wider">
                      Service
                    </label>
                    <div className="grid gap-2">
                      {services.map(s => (
                        <button
                          key={s.value}
                          onClick={() => setFormData({ ...formData, service: s.value })}
                          className={`p-4 text-left border transition-all text-sm flex justify-between items-center ${
                            formData.service === s.value 
                              ? 'border-old-gold bg-old-gold/10 text-old-gold font-medium' 
                              : 'border-soft-white/10 bg-surface-dark/40 text-soft-white/80'
                          }`}
                        >
                          {s.label}
                          {formData.service === s.value && <Check className="h-4 w-4" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="space-y-3">
                    <label className="block text-xs font-mono text-old-gold uppercase tracking-wider">
                      Datum wählen
                    </label>
                    <div className="border border-soft-white/10 bg-surface-dark/20 p-4">
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display text-old-gold font-medium">
                          {monthNames[month]} {year}
                        </span>
                        <div className="flex gap-2">
                          <button 
                            onClick={prevMonth}
                            disabled={currentMonth.getFullYear() === new Date().getFullYear() && currentMonth.getMonth() === new Date().getMonth()}
                            className="p-1.5 text-soft-white/60 hover:text-old-gold disabled:opacity-30"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button 
                            onClick={nextMonth}
                            className="p-1.5 text-soft-white/60 hover:text-old-gold"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] text-soft-white/40 mb-2">
                        {weekdays.map(d => <div key={d}>{d}</div>)}
                      </div>

                      <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((day, idx) => {
                          if (day === null) return <div key={`empty-${idx}`} className="aspect-square" />;
                          
                          const isPast = isPastDate(day);
                          const isSun = isSunday(day);
                          const isDisabled = isPast || isSun;
                          const selected = isSelected(day);

                          return (
                            <button
                              key={`day-${day}`}
                              disabled={isDisabled}
                              onClick={() => handleDateSelect(day)}
                              className={`aspect-square text-sm border transition-all flex items-center justify-center relative ${
                                selected 
                                  ? 'bg-old-gold border-old-gold text-ink-black font-bold'
                                  : isDisabled
                                    ? 'border-transparent text-soft-white/10 cursor-not-allowed'
                                    : 'border-soft-white/5 bg-ink-black/40 text-soft-white/80 hover:border-old-gold/50'
                              }`}
                            >
                              {day}
                              {day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear() && (
                                <span className={`w-1 h-1 rounded-full absolute bottom-1 ${selected ? 'bg-ink-black' : 'bg-tattoo-red'}`} />
                              )}
                            </button>
                          );
                        })}
                      </div>
                      {fieldErrors.date && <p className="text-xs text-tattoo-red mt-2">* {fieldErrors.date}</p>}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {formData.date && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-3"
                    >
                      <label className="block text-xs font-mono text-old-gold uppercase tracking-wider">
                        Uhrzeit
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map(slot => (
                          <button
                            key={slot}
                            onClick={() => {
                              setFormData({ ...formData, timeSlot: slot });
                              setFieldErrors(prev => ({ ...prev, timeSlot: '' }));
                            }}
                            className={`py-3 text-center text-sm border transition-all ${
                              formData.timeSlot === slot
                                ? 'border-old-gold bg-old-gold/10 text-old-gold font-medium'
                                : 'border-soft-white/10 bg-surface-dark/40 text-soft-white/80'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                      {fieldErrors.timeSlot && <p className="text-xs text-tattoo-red">* {fieldErrors.timeSlot}</p>}
                    </motion.div>
                  )}

                  <button
                    onClick={nextStep}
                    className="w-full py-4 bg-old-gold text-ink-black font-mono text-xs uppercase tracking-widest font-bold mt-4"
                  >
                    Weiter
                  </button>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  
                  {/* Summary Box */}
                  <div className="bg-surface-dark/40 border border-old-gold/30 p-4 text-sm font-mono space-y-2">
                    <div className="flex justify-between">
                      <span className="text-soft-white/50">Service:</span>
                      <span className="text-old-gold">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-soft-white/50">Termin:</span>
                      <span className="text-old-gold">{formatDateGerman(formData.date)} um {formData.timeSlot}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-old-gold uppercase tracking-wider">Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-surface-dark/40 border border-soft-white/10 px-4 py-3 focus:border-old-gold outline-none text-soft-white"
                        placeholder="Dein Vor- und Nachname"
                      />
                      {fieldErrors.name && <p className="text-xs text-tattoo-red">{fieldErrors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-old-gold uppercase tracking-wider">Handynummer *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-surface-dark/40 border border-soft-white/10 px-4 py-3 focus:border-old-gold outline-none text-soft-white"
                        placeholder="z.B. +49 123 456789"
                      />
                      {fieldErrors.phone && <p className="text-xs text-tattoo-red">{fieldErrors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-old-gold uppercase tracking-wider">E-Mail (optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-surface-dark/40 border border-soft-white/10 px-4 py-3 focus:border-old-gold outline-none text-soft-white"
                        placeholder="deine@email.de"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={prevStep}
                      className="px-6 py-4 border border-soft-white/20 text-soft-white/60 hover:text-soft-white font-mono text-xs uppercase font-bold"
                    >
                      Zurück
                    </button>
                    <button
                      onClick={handleSubmitForm}
                      disabled={isSubmitting}
                      className="flex-1 py-4 bg-old-gold text-ink-black font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? <RefreshCw className="h-4 w-4 animate-spin" /> : 'Jetzt Anfragen'}
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
        </AnimatePresence>

      </main>
    </div>
  );
};
