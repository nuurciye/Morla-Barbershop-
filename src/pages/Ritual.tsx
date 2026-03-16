import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, Droplet, UserCheck } from 'lucide-react';

export default function Ritual() {
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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-tight">
              Uncompromising<br />
              <span className="text-brass">Precision.</span>
            </h1>
            <p className="text-lg md:text-xl text-canvas/70 font-light tracking-wide mb-12">
              Specialized mastery in men's fading and beard architecture.
            </p>
            <Link
              to="/reserve"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brass text-obsidian text-sm uppercase tracking-widest font-semibold hover:bg-canvas transition-all duration-300"
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Menu */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac mb-4">The Menu</h2>
            <p className="text-3xl font-light text-obsidian/80">Tactile touchpoints of the physical service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              {[
                {
                  title: 'The Signature Fade',
                  price: '$65',
                  desc: 'A meticulous taper or skin fade, finished with a straight razor neck shave and hot towel.',
                  time: '45 Min',
                },
                {
                  title: 'Executive Scissor Cut',
                  price: '$75',
                  desc: 'Classic shear work tailored to your head shape and hair texture. Includes a wash and style.',
                  time: '60 Min',
                },
                {
                  title: 'Beard Architecture',
                  price: '$45',
                  desc: 'Sculpting, lining, and fading the beard. Finished with premium oils and a hot towel treatment.',
                  time: '30 Min',
                },
              ].map((service, idx) => (
                <div key={idx} className="border-b border-obsidian/10 pb-8">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-xl font-semibold uppercase tracking-wide">{service.title}</h3>
                    <span className="text-lg font-medium text-cognac">{service.price}</span>
                  </div>
                  <p className="text-obsidian/70 font-light leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-xs uppercase tracking-widest font-semibold text-obsidian/50">{service.time}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {[
                {
                  title: 'The Full Ritual',
                  price: '$100',
                  desc: 'The Signature Fade paired with Beard Architecture. The ultimate refinement experience.',
                  time: '75 Min',
                },
                {
                  title: 'Hot Towel Shave',
                  price: '$55',
                  desc: 'Traditional straight razor shave with pre-shave oil, hot lather, and a cold towel finish.',
                  time: '45 Min',
                },
                {
                  title: 'Line Up & Refine',
                  price: '$30',
                  desc: 'Crisp edges around the hairline and beard. Perfect for between full services.',
                  time: '20 Min',
                },
              ].map((service, idx) => (
                <div key={idx} className="border-b border-obsidian/10 pb-8">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-xl font-semibold uppercase tracking-wide">{service.title}</h3>
                    <span className="text-lg font-medium text-cognac">{service.price}</span>
                  </div>
                  <p className="text-obsidian/70 font-light leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-xs uppercase tracking-widest font-semibold text-obsidian/50">{service.time}</span>
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
              The Patron's Circle
            </h2>
            <p className="text-xl text-obsidian/80 font-light leading-relaxed mb-8">
              An exclusive, invite-only tier for our most dedicated clients.
            </p>
            <ul className="space-y-6 mb-12">
              {[
                'Priority booking access and automated refinement follow-ups.',
                'Complimentary beverage upgrades (aged spirits & espresso).',
                'Exclusive access to after-hours appointments.',
                'Annual complimentary Full Ritual service.'
              ].map((item, idx) => (
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
              Inquire About Membership
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
    </motion.div>
  );
}
