import { useMode } from '@/contexts/ModeContext';
import { Clock, DollarSign, Shield, Zap, TrendingUp, Users } from 'lucide-react';

const Benefits = () => {
  const { mode } = useMode();

  const content = {
    business: {
      title: 'Why Employers Choose DO Jobs',
      benefits: [
        {
          icon: Clock,
          title: 'Instant Hiring',
          description: 'Find qualified staff in hours across Singapore',
        },
        {
          icon: DollarSign,
          title: 'PayNow Payouts',
          description: 'Fast and secure payments via PayNow',
        },
        {
          icon: Shield,
          title: 'Verified Workers',
          description: 'All candidates are ID-verified and rated',
        },
        {
          icon: Zap,
          title: 'Student-Friendly',
          description: 'Tap into Singapore\'s student workforce easily',
        },
        {
          icon: TrendingUp,
          title: 'Flexible Shifts',
          description: 'Schedule staff based on your needs',
        },
        {
          icon: Users,
          title: 'Wide Talent Pool',
          description: 'Access thousands of skilled workers in SG',
        },
      ],
    },
    staff: {
      title: 'Why Staffs Love DO Jobs',
      benefits: [
        {
          icon: Clock,
          title: 'Flexible Hours',
          description: 'Work around your schedule in Singapore',
        },
        {
          icon: DollarSign,
          title: 'PayNow Instant Pay',
          description: 'Get paid instantly via PayNow after shifts',
        },
        {
          icon: Shield,
          title: 'Free Meals & Transport',
          description: 'Many jobs include meals and transport allowance',
        },
        {
          icon: Zap,
          title: 'Fast Applications',
          description: 'Apply to jobs with one tap',
        },
        {
          icon: TrendingUp,
          title: 'Student-Friendly',
          description: 'Perfect for students looking for part-time work',
        },
        {
          icon: Users,
          title: 'Top Companies',
          description: 'Work with leading businesses in Singapore',
        },
      ],
    },
  };

  const current = content[mode];

  return (
    <section id="benefits" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        mode === 'business' 
          ? 'bg-gradient-to-br from-orange-50/30 via-background to-background' 
          : 'bg-gradient-to-br from-purple-50/30 via-background to-background'
      }`} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {current.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {current.benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
                  mode === 'business' ? 'bg-business text-white' : 'bg-staff text-white'
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
