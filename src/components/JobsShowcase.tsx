import { Utensils, Package, ShoppingBag, Users, Briefcase, Coffee, Truck, HeadphonesIcon } from 'lucide-react';

const JobsShowcase = () => {
  const jobs = [
    { icon: Utensils, label: 'Banquet Staff', color: 'bg-orange-500' },
    { icon: Package, label: 'Delivery Riders', color: 'bg-blue-500' },
    { icon: ShoppingBag, label: 'Retail Staff', color: 'bg-purple-500' },
    { icon: Users, label: 'Event Helpers', color: 'bg-green-500' },
    { icon: Briefcase, label: 'Admin Support', color: 'bg-indigo-500' },
    { icon: Coffee, label: 'F&B Service', color: 'bg-amber-500' },
    { icon: Truck, label: 'Logistics', color: 'bg-red-500' },
    { icon: HeadphonesIcon, label: 'Customer Service', color: 'bg-teal-500' },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedJobs = [...jobs, ...jobs];

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      {/* Subtle gradient background for consistency */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted to-background" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Part-Time Jobs Across Singapore
          </h3>
          <p className="text-muted-foreground">
            From students to professionals, find flexible work that fits your lifestyle
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted to-transparent z-10" />
          
          <div className="flex gap-6 animate-scroll-left">
            {duplicatedJobs.map((job, index) => {
              const Icon = job.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-xl ${job.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{job.label}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsShowcase;
