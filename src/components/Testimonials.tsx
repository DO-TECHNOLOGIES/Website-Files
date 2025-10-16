import { useMode } from '@/contexts/ModeContext';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating?: number;
};

const businessTestimonials: Testimonial[] = [
  {
    name: 'Amelia Tan',
    role: 'Operations Manager, KOPI+ Co.',
    quote: 'DO CONNECT helped us staff events in hours, not days. Seamless and reliable.',
    rating: 5
  },
  {
    name: 'Jonathan Lee',
    role: 'Store Lead, Orchard Retail',
    quote: 'The quality of part-timers has been excellent. Scheduling is a breeze.',
    rating: 5
  },
  {
    name: 'Priya Nair',
    role: 'F&B Supervisor, SpiceHub',
    quote: 'We cut hiring time by 60% and built a trusted pool of on‑call staff.',
    rating: 5
  },
  {
    name: 'Samuel Ong',
    role: 'Event Director, CityLive',
    quote: 'Coverage for last‑minute shifts has been outstanding. Huge peace of mind.',
    rating: 5
  },
  {
    name: 'Rachel Goh',
    role: 'Cafe Owner, Morning Brew',
    quote: 'Reliable talent, simple workflow, and excellent support from the team.',
    rating: 5
  }
];

const staffTestimonials: Testimonial[] = [
  {
    name: 'Marcus Lim',
    role: 'Barista & Events',
    quote: 'Found flexible gigs that fit my school schedule. Fast payouts too!',
    rating: 5
  },
  {
    name: 'Nur Aisha',
    role: 'Retail Associate',
    quote: 'Great app. Clear shifts and responsive employers. Highly recommended.',
    rating: 5
  },
  {
    name: 'Wei Jie',
    role: 'Kitchen Crew',
    quote: 'Easy to apply, easy to track. I choose when and where to work.',
    rating: 5
  },
  {
    name: 'Siti Rahmah',
    role: 'Front-of-House',
    quote: 'Onboarding was quick and I started earning the same week.',
    rating: 5
  },
  {
    name: 'Dylan Koh',
    role: 'Warehouse Support',
    quote: 'Shift reminders and maps make it super convenient to show up on time.',
    rating: 5
  }
];

const Testimonials = () => {
  const { mode } = useMode();
  const [index, setIndex] = useState(0);

  const items = mode === 'business' ? businessTestimonials : staffTestimonials;

  useEffect(() => {
    setIndex(0);
  }, [mode]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 4500);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section className="py-16 sm:py-24 bg-background" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${mode === 'business' ? 'bg-business/10 text-business' : 'bg-staff/10 text-staff'}`}>
            {mode === 'business' ? 'Trusted by Employers' : 'Loved by Staffs'}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">What People Say</h2>
          <p className="text-muted-foreground mt-2">Real stories from our community</p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="whitespace-nowrap transition-transform duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((t, i) => (
              <div key={i} className="inline-block align-top w-full">
                <div className={`mx-auto max-w-3xl rounded-2xl p-[1px] ${mode === 'business' ? 'bg-gradient-to-br from-orange-300/60 via-transparent to-orange-200/40' : 'bg-gradient-to-br from-purple-300/60 via-transparent to-purple-200/40'}`}>
                  <div className="bg-card rounded-2xl shadow-large p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full font-semibold text-white ${mode === 'business' ? 'bg-business' : 'bg-staff'}`}>
                        {t.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                      </div>
                      <div className="flex-1">
                        <p className="text-lg sm:text-xl text-foreground leading-relaxed">“{t.quote}”</p>
                        <div className="mt-3 flex items-center gap-1 text-amber-500">
                          {Array.from({ length: t.rating ?? 5 }).map((_, s) => (
                            <Star key={s} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <div className="mt-4">
                          <div className="font-semibold text-foreground">{t.name}</div>
                          <div className="text-sm text-muted-foreground">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${i === index ? (mode === 'business' ? 'bg-business w-6' : 'bg-staff w-6') : 'bg-foreground/20 w-2.5'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


