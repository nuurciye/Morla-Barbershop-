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
      {/* Updated Logo Path */}
      <div className="w-40 h-40 bg-canvas rounded-full flex items-center justify-center mb-12 mx-auto p-4 shadow-2xl overflow-hidden">
        <img 
          src="/icon-512.png" 
          alt="Morla Barber & Sanctuary" 
          className="w-full h-full object-contain scale-110"
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
