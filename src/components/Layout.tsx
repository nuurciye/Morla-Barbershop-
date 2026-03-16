import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Ritual', path: '/ritual' },
    { name: 'The Sanctuary', path: '/sanctuary' },
    { name: 'Reserve', path: '/reserve' },
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
            {navLinks.map((link) => (
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
              Reserve
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-obsidian"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
              Precision Crafted. Timeless Style. The Ritual of Self-Respect.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-brass mb-6">Explore</h4>
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
            <h4 className="text-xs uppercase tracking-widest font-semibold text-brass mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-canvas/80">
              <li>Digfeer street</li>
              <li>Mogadishu, Somalia</li>
              <li>morlacompanyy@gmail.com</li>
              <li>+252610488807</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-canvas/10 text-xs text-canvas/40 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Morla Barbershop. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/morla.so?igsh=MTVocW94dmp0MnhlbA==" target="_blank" rel="noopener noreferrer" className="hover:text-canvas transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@morla.so?_r=1&_t=ZN-94j81v22938" target="_blank" rel="noopener noreferrer" className="hover:text-canvas transition-colors">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
