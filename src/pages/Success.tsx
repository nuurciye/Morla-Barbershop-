import { motion } from 'motion/react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Success() {
  const location = useLocation();
  const state = location.state as { service?: string; date?: string; time?: string } | null;
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-canvas text-obsidian min-h-screen pt-32 pb-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
        >
          <CheckCircle2 className="w-24 h-24 text-cognac mx-auto mb-8" />
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-6">
          {t.success.title1}<br />{t.success.title2}
        </h1>
        
        <p className="text-xl text-obsidian/70 font-light mb-12 max-w-lg mx-auto">
          {t.success.subtitle}
        </p>

        {state?.service && state?.date && state?.time && (
          <div className="bg-white p-8 mb-12 border border-obsidian/10 shadow-sm max-w-md mx-auto text-left">
            <h3 className="text-sm uppercase tracking-widest font-semibold text-cognac mb-6 text-center">{t.success.detailsTitle}</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-obsidian/5 pb-4">
                <span className="text-obsidian/60">{t.success.service}</span>
                <span className="font-medium">{state.service}</span>
              </div>
              <div className="flex justify-between items-center border-b border-obsidian/5 pb-4">
                <span className="text-obsidian/60">{t.success.date}</span>
                <span className="font-medium">{state.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-obsidian/60">{t.success.time}</span>
                <span className="font-medium">{state.time}</span>
              </div>
            </div>
          </div>
        )}

        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-obsidian text-canvas text-sm uppercase tracking-widest font-semibold hover:bg-cognac transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.success.returnBtn}
        </Link>
      </div>
    </motion.div>
  );
}
