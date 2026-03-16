import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Scissors, Clock, Shield, Coffee } from 'lucide-react';

export default function Home() {
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
            <div className="w-40 h-40 bg-canvas rounded-full flex items-center justify-center mb-12 mx-auto p-4 shadow-2xl">
              <img 
                src="https://i.postimg.cc/VkTtR5yn/icon-512.png" 
                alt="Morla Barber & Sanctuary" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-tight">
              Precision Crafted.<br />
              <span className="text-brass">Timeless Style.</span>
            </h1>
            <p className="text-lg md:text-xl text-canvas/70 font-light tracking-wide mb-12 uppercase">
              The Ritual of Self-Respect.
            </p>
            <Link
              to="/reserve"
              className="inline-flex items-center gap-2 px-8 py-4 bg-canvas text-obsidian text-sm uppercase tracking-widest font-semibold hover:bg-brass hover:text-obsidian transition-all duration-300"
            >
              Reserve Your Time
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-32 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac mb-8">The Philosophy</h2>
          <p className="text-2xl md:text-4xl font-light leading-relaxed text-obsidian/90 mb-12">
            Morla bridges the golden age of barbering with modern minimalism, offering a space to pause, refine, and proceed with quiet confidence.
          </p>
          <Link
            to="/sanctuary"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-obsidian border-b border-obsidian pb-1 hover:text-cognac hover:border-cognac transition-colors"
          >
            Explore The Sanctuary
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
                title: 'Precision',
                desc: 'Uncompromising attention to detail in every cut, fade, and line.',
              },
              {
                icon: <Shield className="w-8 h-8 text-cognac mb-6" />,
                title: 'Heritage',
                desc: 'Rooted in classic techniques, elevated for the modern gentleman.',
              },
              {
                icon: <Clock className="w-8 h-8 text-cognac mb-6" />,
                title: 'Authenticity',
                desc: 'Honest craftsmanship without the unnecessary noise.',
              },
              {
                icon: <Coffee className="w-8 h-8 text-cognac mb-6" />,
                title: 'Hospitality',
                desc: 'A restorative experience from the moment you cross the threshold.',
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

      {/* Closing CTA */}
      <section className="py-40 px-6 bg-obsidian text-canvas text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12 leading-tight">
            Your time is a luxury.<br />
            <span className="text-brass font-light italic">Spend it where the details matter.</span>
          </h2>
          <Link
            to="/reserve"
            className="inline-flex items-center gap-2 px-10 py-5 border border-canvas text-canvas text-sm uppercase tracking-widest font-semibold hover:bg-canvas hover:text-obsidian transition-all duration-300"
          >
            Reserve Your Time
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
