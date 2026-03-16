import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Scissors, Clock, Shield, Coffee } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-obsidian text-canvas overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2940"
            alt="Barbershop interior"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/40 to-obsidian"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-40 h-40 bg-canvas rounded-full flex items-center justify-center mb-12 mx-auto p-4 shadow-2xl"
            >
              <img 
                src="https://i.postimg.cc/VkTtR5yn/icon-512.png" 
                alt="Morla Barber & Sanctuary" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <h1 className="text-5xl md:text-7xl uppercase mb-6 leading-tight flex flex-col items-center">
              <span className="font-black tracking-tighter text-canvas">{t.home.heroTitle1}</span>
              <span className="font-light tracking-[0.15em] text-brass mt-2 text-4xl md:text-6xl">{t.home.heroTitle2}</span>
            </h1>
            <p className="text-lg md:text-xl text-canvas/70 font-light tracking-wide mb-12 uppercase">
              {t.home.heroSubtitle}
            </p>
            <Link
              to="/reserve"
              className="inline-flex items-center gap-2 px-8 py-4 bg-canvas text-obsidian text-sm uppercase tracking-widest font-semibold hover:bg-brass hover:text-obsidian transition-all duration-300"
            >
              {t.home.reserveBtn}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-32 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac mb-8">{t.home.philosophyTag}</h2>
          <p className="text-2xl md:text-4xl font-light leading-relaxed text-obsidian/90 mb-12">
            {t.home.philosophyText}
          </p>
          <Link
            to="/sanctuary"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-obsidian border-b border-obsidian pb-1 hover:text-cognac hover:border-cognac transition-colors"
          >
            {t.home.exploreSanctuary}
          </Link>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-32 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <Scissors className="w-8 h-8 text-cognac mb-6" />,
                title: t.home.pillars.precision.title,
                desc: t.home.pillars.precision.desc,
              },
              {
                icon: <Shield className="w-8 h-8 text-cognac mb-6" />,
                title: t.home.pillars.heritage.title,
                desc: t.home.pillars.heritage.desc,
              },
              {
                icon: <Clock className="w-8 h-8 text-cognac mb-6" />,
                title: t.home.pillars.authenticity.title,
                desc: t.home.pillars.authenticity.desc,
              },
              {
                icon: <Coffee className="w-8 h-8 text-cognac mb-6" />,
                title: t.home.pillars.hospitality.title,
                desc: t.home.pillars.hospitality.desc,
              },
            ].map((pillar, idx) => (
              <div key={idx} className="flex flex-col border-t border-obsidian/10 pt-8">
                {pillar.icon}
                <h3 className="text-lg font-semibold uppercase tracking-widest mb-4">{pillar.title}</h3>
                <p className="text-obsidian/70 font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section className="py-32 px-6 bg-canvas border-t border-obsidian/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac mb-4">{t.home.barbersTag}</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">{t.home.barbersTitle}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                ...t.home.barbers[0],
                image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800'
              },
              {
                ...t.home.barbers[1],
                image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=800'
              },
              {
                ...t.home.barbers[2],
                image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=800'
              }
            ].map((barber, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-stone/20">
                  <img 
                    src={barber.image} 
                    alt={barber.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-1">{barber.name}</h4>
                <p className="text-sm uppercase tracking-widest text-cognac font-semibold mb-4">{barber.role}</p>
                <p className="text-obsidian/70 font-light leading-relaxed mb-6">{barber.bio}</p>
                <div className="mt-auto border-t border-obsidian/10 pt-4">
                  <p className="text-xs uppercase tracking-widest text-obsidian/50 font-semibold mb-1">Specialties</p>
                  <p className="text-sm text-obsidian/80">{barber.specialties}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-32 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac mb-4">{t.home.lookbookTag}</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">{t.home.lookbookTitle}</h3>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-obsidian border-b border-obsidian pb-1 hover:text-cognac hover:border-cognac transition-colors"
            >
              {t.home.viewGallery}
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://picsum.photos/seed/barber1/800/1000',
              'https://picsum.photos/seed/barber4/800/800',
              'https://picsum.photos/seed/barber5/800/1000',
              'https://picsum.photos/seed/barber8/800/800'
            ].map((src, idx) => (
              <div key={idx} className={`relative group overflow-hidden bg-stone/20 ${idx === 0 || idx === 2 ? 'aspect-[4/5]' : 'aspect-square mt-auto'}`}>
                <img
                  src={src}
                  alt={`Gallery preview ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 px-6 bg-obsidian text-canvas text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12 leading-tight">
            {t.home.closingTitle1}<br />
            <span className="text-brass font-light italic">{t.home.closingTitle2}</span>
          </h2>
          <Link
            to="/reserve"
            className="inline-flex items-center gap-2 px-10 py-5 border border-canvas text-canvas text-sm uppercase tracking-widest font-semibold hover:bg-canvas hover:text-obsidian transition-all duration-300"
          >
            {t.home.reserveBtn}
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
