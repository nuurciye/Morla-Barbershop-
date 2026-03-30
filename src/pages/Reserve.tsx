import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Phone, Mail, CheckCircle2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Calendar from '../components/Calendar';
import { useLanguage } from '../context/LanguageContext';

export default function Reserve() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (location.state?.service) {
      setSelectedService(location.state.service);
      setStep(2);
    }
  }, [location.state]);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showModal, setShowModal] = useState(false);

  const services = [
    `${t.reserve.services.signatureFade} - $65`,
    `${t.reserve.services.executiveScissor} - $75`,
    `${t.reserve.services.beardArchitecture} - $45`,
    `${t.reserve.services.fullRitual} - $100`,
    `${t.reserve.services.hotTowelShave} - $55`,
  ];

  const times = ['10:00 AM', '11:00 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const serviceName = selectedService.split(' - ')[0];

    try {
      // Call the backend API
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: serviceName,
          date: selectedDate,
          time: selectedTime,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process reservation');
      }

      // Format the WhatsApp message
      const message = `*New Reservation Request*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Service:* ${serviceName}%0A*Date:* ${selectedDate}%0A*Time:* ${selectedTime}`;

      // Open WhatsApp in a new tab using the shop's phone number
      const whatsappUrl = `https://wa.me/252612301508?text=${message}`;
      window.open(whatsappUrl, '_blank');

      setIsSubmitting(false);

      // Navigate to success page
      navigate('/success', {
        state: {
          service: serviceName,
          date: selectedDate,
          time: selectedTime,
        }
      });
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-canvas text-obsidian min-h-screen pt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Booking Widget */}
        <div className="bg-white p-10 shadow-sm border border-obsidian/5 rounded-sm">
          <h1 className="text-4xl font-bold tracking-tighter uppercase mb-2">{t.reserve.title}</h1>
          <p className="text-obsidian/60 font-light mb-10">{t.reserve.subtitle}</p>

          <div className="space-y-8">
            {/* Step 1: Service */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac">{t.reserve.step1}</h2>
                {step > 1 && (
                  <button onClick={() => setStep(1)} className="text-xs text-obsidian/50 hover:text-obsidian underline">{t.reserve.edit}</button>
                )}
              </div>
              {step === 1 ? (
                <div className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => {
                        setSelectedService(service);
                        setStep(2);
                      }}
                      className={`w-full text-left px-6 py-4 border transition-colors ${
                        selectedService === service 
                          ? 'border-obsidian bg-obsidian text-canvas' 
                          : 'border-obsidian/20 hover:border-obsidian'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-6 py-4 border border-obsidian/10 bg-stone/30 text-obsidian/80">
                  {selectedService}
                </div>
              )}
            </div>

            {/* Step 2: Date & Time */}
            <div className={step < 2 ? 'opacity-40 pointer-events-none' : ''}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac">{t.reserve.step2}</h2>
                {step > 2 && (
                  <button onClick={() => setStep(2)} className="text-xs text-obsidian/50 hover:text-obsidian underline">{t.reserve.edit}</button>
                )}
              </div>
              {step === 2 ? (
                <div className="space-y-6">
                  <Calendar 
                    selectedDate={selectedDate} 
                    onSelectDate={(date) => setSelectedDate(date)} 
                  />
                  {selectedDate && (
                    <div className="grid grid-cols-3 gap-3">
                      {times.map((time) => (
                        <button
                          key={time}
                          onClick={() => {
                            setSelectedTime(time);
                            setStep(3);
                          }}
                          className={`py-3 border text-sm transition-colors ${
                            selectedTime === time
                              ? 'border-obsidian bg-obsidian text-canvas'
                              : 'border-obsidian/20 hover:border-obsidian'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : step > 2 ? (
                <div className="px-6 py-4 border border-obsidian/10 bg-stone/30 text-obsidian/80">
                  {selectedDate} {t.reserve.at} {selectedTime}
                </div>
              ) : null}
            </div>

            {/* Step 3: Details */}
            <div className={step < 3 ? 'opacity-40 pointer-events-none' : ''}>
              <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac mb-4">{t.reserve.step3}</h2>
              {step === 3 && (
                <div className="space-y-6">
                  <div className="p-6 border border-obsidian/10 bg-stone/30 text-obsidian/80 space-y-3">
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-obsidian mb-2">{t.reserve.summary}</h3>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{t.reserve.service}</span>
                      <span>{selectedService.split(' - ')[0]}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{t.reserve.price}</span>
                      <span>{selectedService.split(' - ')[1]}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{t.reserve.date}</span>
                      <span>{selectedDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{t.reserve.time}</span>
                      <span>{selectedTime}</span>
                    </div>
                  </div>
                  <form className="space-y-4" onSubmit={handleConfirm}>
                    <input type="text" name="name" placeholder={t.reserve.fullName} required className="w-full px-6 py-4 border border-obsidian/20 focus:border-obsidian outline-none bg-transparent" />
                    <input type="email" name="email" placeholder={t.reserve.email} required className="w-full px-6 py-4 border border-obsidian/20 focus:border-obsidian outline-none bg-transparent" />
                    <input type="tel" name="phone" placeholder={t.reserve.phone} required className="w-full px-6 py-4 border border-obsidian/20 focus:border-obsidian outline-none bg-transparent" />
                    
                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-8 px-8 py-5 bg-obsidian text-canvas text-sm uppercase tracking-widest font-semibold hover:bg-cognac transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t.reserve.openingWhatsApp : t.reserve.confirmBtn}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="lg:pl-10 flex flex-col justify-center">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tighter uppercase mb-8">{t.reserve.location}</h2>
            <div className="space-y-6 text-obsidian/80 font-light">
              <a 
                href="https://maps.google.com/?q=Morla+Barbershop,+Digfeer+street,+Mogadishu,+Somalia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:text-cognac transition-colors group"
              >
                <MapPin className="w-6 h-6 text-brass shrink-0 group-hover:text-cognac transition-colors" />
                <div>
                  <p className="font-medium text-obsidian group-hover:text-cognac transition-colors">Morla Barbershop</p>
                  <p>Digfeer street</p>
                  <p>Mogadishu, Somalia</p>
                </div>
              </a>
              <a 
                href="tel:+252612301508"
                className="flex items-center gap-4 hover:text-cognac transition-colors group"
              >
                <Phone className="w-6 h-6 text-brass shrink-0 group-hover:text-cognac transition-colors" />
                <p>+252612301508</p>
              </a>
              <a 
                href="mailto:morlacompanyy@gmail.com"
                className="flex items-center gap-4 hover:text-cognac transition-colors group"
              >
                <Mail className="w-6 h-6 text-brass shrink-0 group-hover:text-cognac transition-colors" />
                <p>morlacompanyy@gmail.com</p>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tighter uppercase mb-8">{t.reserve.hours}</h2>
            <div className="space-y-4 text-obsidian/80 font-light">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-brass shrink-0" />
                <div className="w-full max-w-xs">
                  <div className="flex justify-between border-b border-obsidian/10 pb-2 mb-2">
                    <span>{t.reserve.monFri}</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-obsidian/10 pb-2 mb-2">
                    <span>{t.reserve.sat}</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-obsidian/50">
                    <span>{t.reserve.sun}</span>
                    <span>{t.reserve.closed}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
