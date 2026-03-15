import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#0B0B0B] text-white flex flex-col items-center justify-center min-h-[85vh] px-6 text-center overflow-hidden">
      
      {/* 1. THE LOGO: Controlled size and Dark-Mode Blend */}
      <div className="relative mb-12 flex justify-center w-full">
        <img 
          src="/shield-logo.svg" 
          alt="Morla Shield" 
          className="w-40 md:w-56 h-auto opacity-90 mix-blend-screen brightness-110 contrast-125"
          style={{ 
            /* This is the magic for white backgrounds */
            mixBlendMode: 'screen', 
            filter: 'brightness(1.1) contrast(1.1)' 
          }} 
        />
      </div>

      {/* 2. THE HEADLINE: High-end spacing */}
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-6xl font-light tracking-[0.25em] uppercase leading-tight">
          Precision <br className="md:hidden" /> Crafted.
        </h1>
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-8 space-x-4">
          <div className="h-[1px] w-12 bg-[#8B4513]/40"></div>
          <p className="text-[#8B4513] text-lg md:text-2xl font-serif italic tracking-wide">
            The Ritual of Self-Respect
          </p>
          <div className="h-[1px] w-12 bg-[#8B4513]/40"></div>
        </div>
      </div>

      {/* 3. THE BUTTON: Refined CTA */}
      <button className="mt-6 px-12 py-4 border border-[#8B4513]/60 text-[#8B4513] uppercase tracking-[0.3em] text-[10px] md:text-xs hover:bg-[#8B4513] hover:text-white transition-all duration-500">
        Reserve Your Time
      </button>

      {/* 4. SCROLL LINE: Visual anchor */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
