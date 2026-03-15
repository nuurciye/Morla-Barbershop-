import React from 'react';

const Sanctuary = () => {
  return (
    <section id="sanctuary" className="bg-[#0B0B0B] text-white py-24 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <h2 className="text-[#8B4513] text-xs uppercase tracking-[0.4em]">The Sanctuary</h2>
          <h3 className="text-4xl md:text-5xl font-light leading-tight">
            A Restorative Escape From City Noise.
          </h3>
          <p className="text-white/60 font-serif italic text-lg leading-relaxed">
            Morla is defined by the sensory signature of Sandalwood, Bergamot, and Black Pepper. 
            It is a space designed for the discerning patron to pause, refine, and proceed.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <span className="block text-[#8B4513] text-xl mb-1">Aged Cognac</span>
              <span className="text-[10px] uppercase tracking-widest text-white/30">Leather Seating</span>
            </div>
            <div>
              <span className="block text-[#8B4513] text-xl mb-1">Obsidian</span>
              <span className="text-[10px] uppercase tracking-widest text-white/30">Minimalist Canvas</span>
            </div>
          </div>
        </div>

        {/* Branding Visual */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="absolute inset-0 bg-[#8B4513]/5 blur-3xl rounded-full"></div>
          <img 
            src="/favicon.svg" 
            alt="Morla Monogram" 
            className="w-64 h-64 relative z-10 opacity-80" 
          />
        </div>
      </div>
    </section>
  );
};

export default Sanctuary;
