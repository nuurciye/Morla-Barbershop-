import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Calendar from '../components/Calendar';

export default function Reserve() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showModal, setShowModal] = useState(false);

  const services = [
    'The Signature Fade - $65',
    'Executive Scissor Cut - $75',
    'Beard Architecture - $45',
    'The Full Ritual - $100',
    'Hot Towel Shave - $55',
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

    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: selectedService.split(' - ')[0],
          date: selectedDate,
          time: selectedTime,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to confirm reservation');
      }

      setShowModal(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
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
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/80 backdrop-blur-sm p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-canvas p-10 max-w-md w-full text-center border border-obsidian/10"
            >
              <CheckCircle2 className="w-16 h-16 text-cognac mx-auto mb-6" />
              <h3 className="text-2xl font-bold tracking-tighter uppercase mb-4">Reservation Confirmed</h3>
              <p className="text-obsidian/70 font-light mb-8">
                Your appointment for {selectedService.split(' - ')[0]} on {selectedDate} at {selectedTime} has been secured. We look forward to seeing you.
              </p>
              <button
                onClick={() => {
                  setShowModal(false);
                  setStep(1);
                  setSelectedService('');
                  setSelectedDate('');
                  setSelectedTime('');
                }}
                className="px-8 py-4 bg-obsidian text-canvas text-sm uppercase tracking-widest font-semibold hover:bg-cognac transition-all duration-300"
              >
                Return
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Booking Widget */}
        <div className="bg-white p-10 shadow-sm border border-obsidian/5 rounded-sm">
          <h1 className="text-4xl font-bold tracking-tighter uppercase mb-2">Reserve Your Time.</h1>
          <p className="text-obsidian/60 font-light mb-10">Select a service, date, and time to secure your appointment.</p>

          <div className="space-y-8">
            {/* Step 1: Service */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac">1. Select Service</h2>
                {step > 1 && (
                  <button onClick={() => setStep(1)} className="text-xs text-obsidian/50 hover:text-obsidian underline">Edit</button>
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
                <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac">2. Select Date & Time</h2>
                {step > 2 && (
                  <button onClick={() => setStep(2)} className="text-xs text-obsidian/50 hover:text-obsidian underline">Edit</button>
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
                  {selectedDate} at {selectedTime}
                </div>
              ) : null}
            </div>

            {/* Step 3: Details */}
            <div className={step < 3 ? 'opacity-40 pointer-events-none' : ''}>
              <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac mb-4">3. Your Details</h2>
              {step === 3 && (
                <div className="space-y-6">
                  <div className="p-6 border border-obsidian/10 bg-stone/30 text-obsidian/80 space-y-3">
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-obsidian mb-2">Reservation Summary</h3>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Service</span>
                      <span>{selectedService.split(' - ')[0]}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Price</span>
                      <span>{selectedService.split(' - ')[1]}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Date</span>
                      <span>{selectedDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Time</span>
                      <span>{selectedTime}</span>
                    </div>
                  </div>
                  <form className="space-y-4" onSubmit={handleConfirm}>
                    <input type="text" name="name" placeholder="Full Name" required className="w-full px-6 py-4 border border-obsidian/20 focus:border-obsidian outline-none bg-transparent" />
                    <input type="email" name="email" placeholder="Email Address" required className="w-full px-6 py-4 border border-obsidian/20 focus:border-obsidian outline-none bg-transparent" />
                    <input type="tel" name="phone" placeholder="Phone Number" required className="w-full px-6 py-4 border border-obsidian/20 focus:border-obsidian outline-none bg-transparent" />
                    
                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-8 px-8 py-5 bg-obsidian text-canvas text-sm uppercase tracking-widest font-semibold hover:bg-cognac transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
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
            <h2 className="text-3xl font-bold tracking-tighter uppercase mb-8">The Location</h2>
            <div className="space-y-6 text-obsidian/80 font-light">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brass shrink-0" />
                <div>
                  <p className="font-medium text-obsidian">Morla Barbershop</p>
                  <p>Digfeer street</p>
                  <p>Mogadishu, Somalia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brass shrink-0" />
                <p>+252610488807</p>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brass shrink-0" />
                <p>morlacompanyy@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tighter uppercase mb-8">Hours of Operation</h2>
            <div className="space-y-4 text-obsidian/80 font-light">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-brass shrink-0" />
                <div className="w-full max-w-xs">
                  <div className="flex justify-between border-b border-obsidian/10 pb-2 mb-2">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-obsidian/10 pb-2 mb-2">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-obsidian/50">
                    <span>Sunday</span>
                    <span>Closed</span>
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
