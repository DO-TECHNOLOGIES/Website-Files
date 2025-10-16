import { useMode } from '@/contexts/ModeContext';
import { Briefcase, Users, Search, FileCheck, Handshake, Star } from 'lucide-react';

const HowItWorks = () => {
  const { mode } = useMode();

  const content = {
    business: {
      title: 'How It Works for Businesses',
      steps: [
        {
          icon: Search,
          title: 'Post Your Job',
          description: 'Create a job listing with your requirements and budget in minutes',
        },
        {
          icon: FileCheck,
          title: 'Review Applicants',
          description: 'Browse qualified candidates and review their profiles and ratings',
        },
        {
          icon: Handshake,
          title: 'Hire & Manage',
          description: 'Connect with your chosen staff and manage projects seamlessly',
        },
        {
          icon: Star,
          title: 'Rate & Repeat',
          description: 'Leave feedback and build lasting relationships with top talent',
        },
      ],
    },
    staff: {
      title: 'How It Works for Staffs',
      steps: [
        {
          icon: Search,
          title: 'Browse Opportunities',
          description: 'Explore thousands of part-time jobs that match your skills',
        },
        {
          icon: FileCheck,
          title: 'Apply Instantly',
          description: 'Submit your profile and stand out with your experience',
        },
        {
          icon: Handshake,
          title: 'Get Hired',
          description: 'Connect with businesses and start working on exciting projects',
        },
        {
          icon: Star,
          title: 'Build Your Reputation',
          description: 'Earn ratings and grow your career with every successful job',
        },
      ],
    },
  };

  const current = content[mode];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 relative overflow-hidden bg-muted">
      {/* Decorative gradient accent */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 transition-all duration-700 ${
        mode === 'business' ? 'bg-business' : 'bg-staff'
      }`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-5 transition-all duration-700 ${
        mode === 'business' ? 'bg-business-accent' : 'bg-staff-accent'
      }`} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {current.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in just a few simple steps
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {current.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-all duration-300 ${
                  mode === 'business'
                    ? 'bg-business/10 text-business group-hover:bg-business group-hover:text-white'
                    : 'bg-staff/10 text-staff group-hover:bg-staff group-hover:text-white'
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                <div className={`absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  mode === 'business' ? 'bg-business/10 text-business' : 'bg-staff/10 text-staff'
                }`}>
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
