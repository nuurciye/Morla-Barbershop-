import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    { id: 1, src: 'https://picsum.photos/seed/barber1/800/1000', alt: t.gallery.images.fade, className: 'aspect-[4/5]' },
    { id: 2, src: 'https://picsum.photos/seed/barber2/800/600', alt: t.gallery.images.shave, className: 'aspect-[4/3]' },
    { id: 3, src: 'https://picsum.photos/seed/barber3/800/1200', alt: t.gallery.images.beard, className: 'aspect-[2/3]' },
    { id: 4, src: 'https://picsum.photos/seed/barber4/1200/800', alt: t.gallery.images.interior, className: 'aspect-[3/2]' },
    { id: 5, src: 'https://picsum.photos/seed/barber5/800/1000', alt: t.gallery.images.scissor, className: 'aspect-[4/5]' },
    { id: 6, src: 'https://picsum.photos/seed/barber6/800/800', alt: t.gallery.images.styling, className: 'aspect-square' },
    { id: 7, src: 'https://picsum.photos/seed/barber7/800/1200', alt: t.gallery.images.tools, className: 'aspect-[2/3]' },
    { id: 8, src: 'https://picsum.photos/seed/barber8/1200/800', alt: t.gallery.images.ritual, className: 'aspect-[3/2]' },
    { id: 9, src: 'https://picsum.photos/seed/barber9/800/800', alt: t.gallery.images.details, className: 'aspect-square' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-canvas text-obsidian min-h-screen pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-6">
            {t.gallery.title}
          </h1>
          <p className="text-xl text-obsidian/70 font-light max-w-2xl">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className={`relative group overflow-hidden bg-stone/20 break-inside-avoid mb-4 ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-canvas font-medium tracking-widest uppercase text-sm">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
