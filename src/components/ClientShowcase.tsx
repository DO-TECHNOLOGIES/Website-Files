import React from 'react';
import { useMode } from '@/contexts/ModeContext';
import ritzCarltonLogo from '@/assets/ritz-carlton-logo.jpg';
import mandarinOrientalLogo from '@/assets/mandarin-oriental-logo.jpg';
import parkRoyalLogo from '@/assets/park-royal-logo.webp';
import marriottLogo from '@/assets/marriot logo.jpeg';

interface Client {
  name: string;
  logo: string;
  description?: string;
}

interface ClientShowcaseProps {
  className?: string;
}

const ClientShowcase: React.FC<ClientShowcaseProps> = ({ className = '' }) => {
  const { mode } = useMode();

  // Premium client logos with actual imported images
  const clients: Client[] = [
    {
      name: 'Ritz Carlton',
      logo: ritzCarltonLogo,
      description: 'Luxury Hospitality'
    },
    {
      name: 'Mandarin Oriental',
      logo: mandarinOrientalLogo,
      description: 'Premium Hotels'
    },
    {
      name: 'Park Royal',
      logo: parkRoyalLogo,
      description: 'Urban Resorts'
    },
    {
      name: 'Marriott',
      logo: marriottLogo,
      description: 'Global Hospitality'
    }
  ];

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${
            mode === 'business' ? 'bg-business/10' : 'bg-staff/10'
          }`}>
            <span className={`text-sm font-medium ${mode === 'business' ? 'text-business' : 'text-staff'}`}>
              Trusted by Leading Brands
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {mode === 'business' 
              ? 'Trusted by Premium Businesses' 
              : 'Work with Top Companies'
            }
          </h2>
          
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            {mode === 'business'
              ? 'Join Singapore\'s most prestigious hospitality brands.'
              : 'Discover opportunities with top-tier companies.'
            }
          </p>
        </div>

        {/* Client Logos Slider */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Sliding container */}
          <div className="flex animate-scroll-right">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-6 flex items-center justify-center group"
              >
                {/* Client Logo - Clean, no background */}
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className={`text-3xl sm:text-4xl font-bold mb-2 ${
              mode === 'business' ? 'text-business' : 'text-staff'
            }`}>
              500+
            </div>
            <p className="text-sm text-muted-foreground">
              {mode === 'business' ? 'Businesses Served' : 'Job Opportunities'}
            </p>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className={`text-3xl sm:text-4xl font-bold mb-2 ${
              mode === 'business' ? 'text-business' : 'text-staff'
            }`}>
              10K+
            </div>
            <p className="text-sm text-muted-foreground">
              {mode === 'business' ? 'Staff Placed' : 'Successful Placements'}
            </p>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className={`text-3xl sm:text-4xl font-bold mb-2 ${
              mode === 'business' ? 'text-business' : 'text-staff'
            }`}>
              98%
            </div>
            <p className="text-sm text-muted-foreground">
              {mode === 'business' ? 'Client Satisfaction' : 'Success Rate'}
            </p>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className={`text-3xl sm:text-4xl font-bold mb-2 ${
              mode === 'business' ? 'text-business' : 'text-staff'
            }`}>
              24/7
            </div>
            <p className="text-sm text-muted-foreground">
              {mode === 'business' ? 'Support Available' : 'Job Matching'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
