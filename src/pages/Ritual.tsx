import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Droplet, UserCheck, X, ChevronRight, Scissors, Coffee, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Ritual() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const { t } = useLanguage();

  const services = [
    {
      title: t.ritual.services.fade.title,
      price: '$65',
      desc: t.ritual.services.fade.desc,
      time: '45 Min',
      image: 'https://picsum.photos/seed/fade/800/600',
      longDesc: t.ritual.services.fade.longDesc
    },
    {
      title: t.ritual.services.scissor.title,
      price: '$75',
      desc: t.ritual.services.scissor.desc,
      time: '60 Min',
      image: 'https://picsum.photos/seed/scissor/800/600',
      longDesc: t.ritual.services.scissor.longDesc
    },
    {
      title: t.ritual.services.beard.title,
      price: '$45',
      desc: t.ritual.services.beard.desc,
      time: '30 Min',
      image: 'https://picsum.photos/seed/beard/800/600',
      longDesc: t.ritual.services.beard.longDesc
    },
    {
      title: t.ritual.services.full.title,
      price: '$100',
      desc: t.ritual.services.full.desc,
      time: '75 Min',
      image: 'https://picsum.photos/seed/ritual/800/600',
      longDesc: t.ritual.services.full.longDesc
    },
    {
      title: t.ritual.services.shave.title,
      price: '$55',
      desc: t.ritual.services.shave.desc,
      time: '45 Min',
      image: 'https://picsum.photos/seed/shave/800/600',
      longDesc: t.ritual.services.shave.longDesc
    },
    {
      title: t.ritual.services.lineup.title,
      price: '$30',
      desc: t.ritual.services.lineup.desc,
      time: '20 Min',
      image: 'https://picsum.photos/seed/lineup/800/600',
      longDesc: t.ritual.services.lineup.longDesc
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-canvas text-obsidian"
    >
      {/* Services Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-obsidian text-canvas">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2944"
            alt="Barber tools"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-[10vw] sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-tight">
              {t.ritual.heroTitle1}<br />
              <span className="text-brass">{t.ritual.heroTitle2}</span>
            </h1>
            <p className="text-lg md:text-xl text-canvas/70 font-light tracking-wide mb-12">
              {t.ritual.heroSubtitle}
            </p>
            <Link
              to="/reserve"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brass text-obsidian text-sm uppercase tracking-widest font-semibold hover:bg-canvas transition-all duration-300"
            >
              {t.ritual.bookBtn}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 px-6 bg-stone/30 border-y border-obsidian/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              {
                icon: <Coffee className="w-6 h-6 text-cognac" />,
                title: t.ritual.process.consultation.title,
                desc: t.ritual.process.consultation.desc
              },
              {
                icon: <Scissors className="w-6 h-6 text-cognac" />,
                title: t.ritual.process.execution.title,
                desc: t.ritual.process.execution.desc
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-cognac" />,
                title: t.ritual.process.refinement.title,
                desc: t.ritual.process.refinement.desc
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="flex flex-col"
              >
                <div className="mb-6 bg-canvas w-14 h-14 flex items-center justify-center rounded-full shadow-sm border border-obsidian/5">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold uppercase tracking-wide mb-4">{step.title}</h3>
                <p className="text-obsidian/70 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Menu */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac mb-4">{t.ritual.menuTag}</h2>
            <p className="text-3xl font-light text-obsidian/80">{t.ritual.menuSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              {services.slice(0, 3).map((service, idx) => (
                <div 
                  key={idx} 
                  className="border-b border-obsidian/10 pb-8 cursor-pointer group relative"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex justify-between items-baseline mb-4 group-hover:text-cognac transition-colors pr-8">
                    <h3 className="text-xl font-semibold uppercase tracking-wide">{service.title}</h3>
                    <span className="text-lg font-medium text-cognac">{service.price}</span>
                  </div>
                  <p className="text-obsidian/70 font-light leading-relaxed mb-4 pr-8">{service.desc}</p>
                  <span className="text-xs uppercase tracking-widest font-semibold text-obsidian/50">{service.time}</span>
                  
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                    <ChevronRight className="w-6 h-6 text-cognac" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {services.slice(3, 6).map((service, idx) => (
                <div 
                  key={idx} 
                  className="border-b border-obsidian/10 pb-8 cursor-pointer group relative"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex justify-between items-baseline mb-4 group-hover:text-cognac transition-colors pr-8">
                    <h3 className="text-xl font-semibold uppercase tracking-wide">{service.title}</h3>
                    <span className="text-lg font-medium text-cognac">{service.price}</span>
                  </div>
                  <p className="text-obsidian/70 font-light leading-relaxed mb-4 pr-8">{service.desc}</p>
                  <span className="text-xs uppercase tracking-widest font-semibold text-obsidian/50">{service.time}</span>
                  
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                    <ChevronRight className="w-6 h-6 text-cognac" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Tier */}
      <section className="py-32 px-6 bg-stone">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 bg-obsidian rounded-full flex items-center justify-center mb-8">
              <UserCheck className="w-8 h-8 text-brass" />
            </div>
            <h2 className="text-4xl font-bold tracking-tighter uppercase mb-6">
              {t.ritual.patronTitle}
            </h2>
            <p className="text-xl text-obsidian/80 font-light leading-relaxed mb-8">
              {t.ritual.patronSubtitle}
            </p>
            <ul className="space-y-6 mb-12">
              {t.ritual.patronItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <Sparkles className="w-5 h-5 text-cognac shrink-0 mt-1" />
                  <span className="text-obsidian/80 font-light">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/reserve"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-obsidian border-b border-obsidian pb-1 hover:text-cognac hover:border-cognac transition-colors"
            >
              {t.ritual.inquireBtn}
            </Link>
          </div>
          <div className="relative h-[600px] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=2940"
              alt="Premium barbershop experience"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-obsidian/20 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/80 backdrop-blur-sm p-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-canvas w-full max-w-4xl overflow-hidden flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-canvas/50 hover:bg-canvas rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-obsidian" />
              </button>
              
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                <div className="flex justify-between items-baseline mb-6">
                  <h3 className="text-3xl font-bold tracking-tighter uppercase">{selectedService.title}</h3>
                  <span className="text-xl font-medium text-cognac">{selectedService.price}</span>
                </div>
                
                <p className="text-obsidian/80 font-light leading-relaxed mb-8">
                  {selectedService.longDesc}
                </p>
                
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-xs uppercase tracking-widest font-semibold text-obsidian/50 border border-obsidian/20 px-3 py-1">
                    {selectedService.time}
                  </span>
                </div>
                
                <Link
                  to="/reserve"
                  state={{ service: `${selectedService.title} - ${selectedService.price}` }}
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-obsidian text-canvas text-sm uppercase tracking-widest font-semibold hover:bg-cognac transition-all duration-300"
                >
                  {t.ritual.bookThisService}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
