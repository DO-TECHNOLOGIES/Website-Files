import { useMode } from '@/contexts/ModeContext';
import { Briefcase, Users, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoStaff from '@/assets/dojobs-logo-staff.jpg';
import logoBusiness from '@/assets/doconnect-logo-new.png';

const Header = () => {
  const { mode, toggleMode } = useMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Get in Touch', href: '#get-in-touch' },
    { label: 'Download App', href: '#download-app' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll progress bar */}
      <div
        className={`absolute top-0 left-0 h-0.5 transition-colors ${
          mode === 'business' ? 'bg-business' : 'bg-staff'
        }`}
        style={{ width: `${progress}%` }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mt-2 mb-2 flex items-center justify-between h-16 sm:h-20 rounded-2xl px-3 sm:px-4 transition-all duration-300 backdrop-blur-md ring-1 ${
            scrolled
              ? 'bg-white/90 text-foreground ring-border shadow-md lg:bg-background/80'
              : 'bg-white/70 text-foreground ring-border/60 shadow-sm lg:bg-background/60'
          }`}
        >
          <div className="flex items-center">
            {/* Clickable logo: blends with header and scrolls to top */}
            <button
              onClick={() => {
                const el = document.getElementById('home');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              aria-label="Go to top"
              className={`group rounded-md px-3 py-2 transition-all duration-300 hover:shadow-sm backdrop-saturate-150 ${
                mode === 'business'
                  ? 'bg-white/90 ring-1 ring-orange-200/60 text-business lg:bg-business/10 lg:hover:bg-business/15 lg:ring-business/20'
                  : 'bg-white/90 ring-1 ring-purple-200/60 text-staff lg:bg-staff/10 lg:hover:bg-staff/15 lg:ring-staff/20'
              }`}
            >
              <img 
                src={mode === 'business' ? logoBusiness : logoStaff}
                alt={mode === 'business' ? 'DO Connect Logo' : 'DO Jobs Logo'}
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                style={{ 
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.06))',
                  mixBlendMode: 'multiply' as any
                }}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors pb-1 border-b-2 border-transparent hover:border-foreground/40"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={toggleMode}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] ${
                mode === 'business'
                  ? 'bg-business text-white shadow-medium hover:shadow-large'
                  : 'bg-staff text-white shadow-medium hover:shadow-large'
              }`}
            >
              {mode === 'business' ? (
                <>
                  <Briefcase className="w-4 h-4" />
                  <span className="hidden sm:inline">For Employers</span>
                </>
              ) : (
                <>
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">For Staffs</span>
                </>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in bg-background rounded-xl shadow-lg mt-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
