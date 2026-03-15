import React from 'react';

const Sanctuary = () => {
  return (
    <section id="sanctuary" className="bg-[#0B0B0B] text-white py-24 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        <div className="flex-1 space-y-8">
          <h2 className="text-[#8B4513] text-xs uppercase tracking-[0.4em]">The Sanctuary</h2>
          <h3 className="text-4xl font-light leading-tight tracking-tight">
            A Restorative Escape From City Noise.
          </h3>
          <p className="text-white/50 font-serif italic text-lg leading-relaxed">
            Defined by the sensory signature of Sandalwood and Bergamot. A space designed to pause, refine, and proceed.
          </p>
        </div>

        {/* The Monogram Visual - Blended Fix */}
        <div className="flex-1 flex justify-center items-center">
          <img 
            src="/favicon.svg" 
            alt="Morla Monogram" 
            className="w-48 h-auto opacity-40 mix-blend-screen grayscale brightness-150" 
          />
        </div>
      </div>
    </section>
  );
};

export default Sanctuary;
