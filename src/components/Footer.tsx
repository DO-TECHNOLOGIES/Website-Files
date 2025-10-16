import { useMode } from '@/contexts/ModeContext';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logoBusiness from '@/assets/doconnect-logo-new.png';
import logoStaff from '@/assets/dojobs-logo-staff.jpg';

const Footer = () => {
  const { mode } = useMode();

  // Minimal footer – just brand and contact info

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/dojobs_singapore?igsh=MTUwMmR2NDZ0dnJiMg==', label: 'Instagram' },
    { icon: Linkedin, href: 'https://sg.linkedin.com/company/do-connect', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-foreground text-white py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-3">
              <img 
                src={mode === 'business' ? logoBusiness : logoStaff} 
                alt={mode === 'business' ? 'DO Connect Logo' : 'DO Jobs Logo'}
                className={`h-8 w-auto`}
                style={{ 
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.06))',
                  mixBlendMode: 'multiply' as any
                }}
              />
              {/* Optional wordmark image placed in public/dojobs-wordmark.png */}
              <img
                src={mode === 'business' ? '/doconnect-wordmark.png' : '/dojobs-wordmark.png'}
                alt={mode === 'business' ? 'DO Connect Wordmark' : 'DO Jobs Wordmark'}
                className="h-5 sm:h-6 w-auto max-w-[140px] ml-3 opacity-90"
                style={{ mixBlendMode: 'multiply' as any }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <p className="text-white/70 text-sm mb-4 max-w-sm">
              Connecting businesses and talent for flexible, part‑time work in Singapore.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-white/60" />
                <a href="mailto:connect@dojobs.sg" className="text-white/80 hover:text-white transition-colors">
                  connect@dojobs.sg
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 text-white/60" />
                <span>Centrium Square, 320 Serangoon Road, Singapore 218108</span>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Phone className="w-4 h-4 mt-0.5 text-white/60" />
                <a href="tel:+6589256167" className="hover:text-white transition-colors">+65 8925 6167</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs">
            © 2025 DO Jobs Pte. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  mode === 'business'
                    ? 'bg-white/10 hover:bg-business text-white'
                    : 'bg-white/10 hover:bg-staff text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            {/* Right-side wordmark */}
            <img
              src={mode === 'business' ? '/doconnect-wordmark.png' : '/dojobs-wordmark.png'}
              alt={mode === 'business' ? 'DO Connect Wordmark' : 'DO Jobs Wordmark'}
              className="h-5 sm:h-6 w-auto max-w-[140px] opacity-90"
              style={{ mixBlendMode: 'multiply' as any }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
