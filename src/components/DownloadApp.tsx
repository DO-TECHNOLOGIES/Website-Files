import { useMode } from '@/contexts/ModeContext';
import { useRef } from 'react';
import { Smartphone, Apple } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Use high-fidelity mockups with the app UI visible
import appMockupBusiness from '@/assets/app-mockup-business.jpeg';
import appMockupStaff from '@/assets/app-mockup-staff.jpeg';

const DownloadApp = () => {
  const { mode } = useMode();
  const phoneRef = useRef<HTMLDivElement>(null);

  const defaultTransform = 'perspective(1200px) rotateY(-16deg) rotateX(5deg) translateZ(0)';

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const el = phoneRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width; // 0..1
    const y = (event.clientY - rect.top) / rect.height; // 0..1
    const tiltY = (x - 0.5) * -8; // -4..4
    const tiltX = (y - 0.5) * 6;  // -3..3
    el.style.animation = 'none';
    el.style.transform = `perspective(1200px) rotateY(${ -16 + tiltY }deg) rotateX(${ 5 - tiltX }deg) translateZ(0)`;
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    const el = phoneRef.current;
    if (!el) return;
    el.style.animation = 'phoneFloat 9s ease-in-out infinite';
    el.style.transform = defaultTransform;
  };

  const content = {
    business: {
      title: 'Download DO CONNECT',
      subtitle: 'Manage your staffing needs on the go with DO CONNECT for employers. Available for iOS and Android.',
      appName: 'DO CONNECT',
    },
    staff: {
      title: 'Download DO JOBS',
      subtitle: 'Find and apply for part-time jobs instantly with DO JOBS. Available for iOS and Android.',
      appName: 'DO JOBS',
    },
  };

  const current = content[mode];

  return (
    <section id="download-app" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Full-width solid gradient background */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        mode === 'business' 
          ? 'bg-gradient-to-br from-orange-50 via-orange-100/80 to-orange-50/40' 
          : 'bg-gradient-to-br from-purple-50 via-purple-100/80 to-purple-50/40'
      }`} />
      
      {/* Enhanced brand gradient overlay */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        mode === 'business' ? 'bg-business-gradient' : 'bg-staff-gradient'
      } opacity-10`} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              mode === 'business' ? 'bg-business/10' : 'bg-staff/10'
            }`}>
              <Smartphone className={`w-5 h-5 ${mode === 'business' ? 'text-business' : 'text-staff'}`} />
              <span className={`text-sm font-medium ${mode === 'business' ? 'text-business' : 'text-staff'}`}>
                Mobile App
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              {current.title}
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground">
              {current.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-xl px-6 py-6 shadow-medium"
              >
                <a
                  href={mode === 'business' ? 'https://apps.apple.com/sg/app/do-connect-sg/id6749354356' : 'https://apps.apple.com/sg/app/do-jobs-sg/id6737137542'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${current.appName} on App Store`}
                >
                  <Apple className="w-6 h-6 mr-2" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-base font-semibold">App Store</div>
                  </div>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-xl px-6 py-6 shadow-medium"
              >
                <a
                  href={mode === 'business' ? 'https://play.google.com/store/apps/details?id=com.doconnect' : 'https://play.google.com/store/apps/details?id=com.dojobs.sg'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${current.appName} on Google Play`}
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-base font-semibold">Google Play</div>
                  </div>
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in flex justify-center lg:justify-end perspective-[1200px]">
            {/* Enhanced multi-layer glow effect */}
            <div className={`absolute inset-0 flex items-center justify-center lg:justify-end transition-all duration-700`}>
              <div className={`w-[350px] h-[650px] rounded-full blur-[140px] opacity-40 ${
                mode === 'business' ? 'bg-business/70' : 'bg-staff/70'
              }`} />
            </div>
            
            {/* Secondary glow layer for depth */}
            <div className={`absolute inset-0 flex items-center justify-center lg:justify-end transition-all duration-700`}>
              <div className={`w-[250px] h-[550px] rounded-full blur-[100px] opacity-30 ${
                mode === 'business' ? 'bg-business-accent/60' : 'bg-staff-accent/60'
              }`} />
            </div>
            
            {/* Phone mockup with premium shadows and natural blending */}
            <div
              ref={phoneRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group relative z-10 w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] transition-all duration-700 will-change-transform"
              style={{
                filter: mode === 'business'
                  ? 'drop-shadow(0 28px 56px rgba(251, 146, 60, 0.30)) drop-shadow(0 14px 28px rgba(251, 146, 60, 0.22))'
                  : 'drop-shadow(0 28px 56px rgba(139, 92, 246, 0.30)) drop-shadow(0 14px 28px rgba(139, 92, 246, 0.22))',
                transform: defaultTransform,
                animation: 'phoneFloat 9s ease-in-out infinite'
              }}
            >
              {/* Outer bezel */}
              <div className="relative aspect-[9/19.5] rounded-[44px] bg-neutral-900 p-2 sm:p-2.5 md:p-3 shadow-2xl ring-1 ring-black/30">
                {/* Screen container with image and overlays */}
                <div className="absolute inset-0 m-2 sm:m-2.5 md:m-3 rounded-[34px] overflow-hidden bg-black ring-1 ring-black/60">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${mode === 'business' ? appMockupBusiness : appMockupStaff})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    aria-label={`${current.appName} Mobile App`}
                    role="img"
                  />
                  {/* Safe-area wrapper ensures island doesn't overlap content */}
                  <div className="absolute inset-x-0 top-0 flex justify-center p-2 sm:p-2.5 pointer-events-none">
                    {/* Dynamic Island: hidden by default, reveals on hover for cleanliness */}
                    <div className="opacity-0 group-hover:opacity-100 h-5 sm:h-5.5 w-24 sm:w-28 bg-black rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.35)] ring-1 ring-black/60 flex items-center justify-center gap-1 px-2 transition-all duration-300 group-hover:w-32 group-hover:h-6 pointer-events-auto">
                      <span className="block w-1.5 h-1.5 rounded-full bg-sky-600/80" />
                      <span className="block w-6 h-1 rounded-full bg-neutral-700" />
                    </div>
                  </div>
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1.5 rounded-full bg-white/60" />
                </div>
                {/* Metallic side edge to enhance 3D look (further softened to avoid dark line) */}
                <div className="pointer-events-none absolute top-3 bottom-3 -right-[1.5px] w-[3px] rounded-r-[42px] bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-300 opacity-45" />
                {/* Tiny top sensors ridge for realism */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(100%+10px)] w-16 h-1 rounded-full bg-neutral-800/90" />
                {/* Side shine */}
                <div className="pointer-events-none absolute inset-0 rounded-[44px] bg-gradient-to-br from-white/10 via-transparent to-white/0 mix-blend-overlay" />
              </div>
              {/* Brand tint overlay to blend the whites with the section gradient */}
              <div className={`${mode === 'business' ? 'from-orange-300/25 via-transparent to-transparent' : 'from-purple-300/25 via-transparent to-transparent'} absolute inset-0 bg-gradient-to-br mix-blend-multiply pointer-events-none rounded-[44px]`} />
              
              {/* Reflection effect */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 blur-xl opacity-20 rounded-full ${
                mode === 'business' ? 'bg-business' : 'bg-staff'
              }`} />
            </div>
              {/* Local keyframes for light idle motion */}
              <style>{`
                @keyframes phoneFloat {
                  0% { transform: perspective(1200px) rotateY(-16deg) rotateX(5deg) translateY(0) }
                  50% { transform: perspective(1200px) rotateY(-14deg) rotateX(6deg) translateY(-4px) }
                  100% { transform: perspective(1200px) rotateY(-16deg) rotateX(5deg) translateY(0) }
                }
              `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
