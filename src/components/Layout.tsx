import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.ritual, path: '/ritual' },
    { name: t.nav.sanctuary, path: '/sanctuary' },
    { name: t.nav.gallery, path: '/gallery' },
    { name: t.nav.reserve, path: '/reserve' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-obsidian">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-obsidian/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tighter uppercase">
            Morla
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.filter(link => link.name !== t.nav.reserve).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-cognac ${
                  location.pathname === link.path ? 'text-cognac' : 'text-obsidian/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reserve"
              className="px-6 py-2.5 bg-obsidian text-canvas text-xs uppercase tracking-widest font-semibold hover:bg-cognac transition-colors"
            >
              {t.nav.reserve}
            </Link>
            <button
              onClick={() => setLanguage(language === 'en' ? 'so' : 'en')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity text-obsidian/70 hover:text-cognac"
              title={language === 'en' ? 'Switch to Somali' : 'Switch to English'}
            >
              <span className="text-sm font-medium tracking-widest">{language === 'en' ? 'SO' : 'EN'}</span>
              <span className="text-xl">{language === 'en' ? '🇸🇴' : '🇬🇧'}</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'so' : 'en')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity text-obsidian/70"
              title={language === 'en' ? 'Switch to Somali' : 'Switch to English'}
            >
              <span className="text-sm font-medium tracking-widest">{language === 'en' ? 'SO' : 'EN'}</span>
              <span className="text-xl">{language === 'en' ? '🇸🇴' : '🇬🇧'}</span>
            </button>
            <button
              className="p-2 text-obsidian"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-canvas pt-24 px-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-2xl uppercase tracking-widest font-medium ${
                location.pathname === link.path ? 'text-cognac' : 'text-obsidian'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-obsidian text-canvas py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tighter uppercase mb-6">Morla</h3>
            <p className="text-canvas/60 text-sm max-w-xs">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-brass mb-6">{t.footer.explore}</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-canvas/80 hover:text-canvas transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-brass mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm text-canvas/80">
              <li>
                <a href="https://maps.google.com/?q=Digfeer+street,+Mogadishu,+Somalia" target="_blank" rel="noopener noreferrer" className="hover:text-canvas transition-colors">
                  Digfeer street<br />Mogadishu, Somalia
                </a>
              </li>
              <li>
                <a href="mailto:morlacompanyy@gmail.com" className="hover:text-canvas transition-colors">
                  morlacompanyy@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+252612301508" className="hover:text-canvas transition-colors">
                  +252612301508
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-canvas/10 text-xs text-canvas/40 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/morla.so?igsh=MTVocW94dmp0MnhlbA==" target="_blank" rel="noopener noreferrer" className="hover:text-canvas transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@morla.so?_r=1&_t=ZN-94j81v22938" target="_blank" rel="noopener noreferrer" className="hover:text-canvas transition-colors">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
// Force UI refresh for GitHub sync
