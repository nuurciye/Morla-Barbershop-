import React from 'react';

const Reserve = () => {
  return (
    <footer id="reserve" className="bg-[#0B0B0B] text-white pt-24 pb-12 px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
          Your time is a luxury. <br />
          <span className="text-[#8B4513] italic font-serif">Spend it where details matter.</span>
        </h2>
        
        <p className="text-white/40 mb-12 max-w-lg mx-auto text-sm leading-relaxed">
          Experience the specialized mastery of men's fading and beard architecture in our Mogadishu sanctuary.
        </p>

        <button className="bg-[#8B4513] text-white px-12 py-4 uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-[#0B0B0B] transition-all duration-500 mb-20">
          Confirm Reservation
        </button>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10 text-left">
          <div>
            <span className="text-[#8B4513] text-[10px] uppercase tracking-widest block mb-4">Location</span>
            <p className="text-sm font-light leading-relaxed">
              Mogadishu, Somalia <br />
              Central District
            </p>
          </div>
          <div>
            <span className="text-[#8B4513] text-[10px] uppercase tracking-widest block mb-4">Hours</span>
            <p className="text-sm font-light">
              Sat — Thu: 9am - 9pm <br />
              Fri: Closed
            </p>
          </div>
          <div>
            <span className="text-[#8B4513] text-[10px] uppercase tracking-widest block mb-4">Inquiries</span>
            <p className="text-sm font-light">
              +252 61 5030234 <br />
              Haqabtire.sl@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-20 opacity-20 flex justify-center">
          <img src="/favicon.svg" alt="Morla" className="w-12 h-12 grayscale" />
        </div>
      </div>
    </footer>
  );
};

export default Reserve;
