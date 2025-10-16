import { useMode } from '@/contexts/ModeContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Users } from 'lucide-react';
import heroBusinessImg from '@/assets/hero-business.jpg';
import heroStaffImg from '@/assets/hero-staff.jpg';
import ImageCarousel from './ImageCarousel';
import doConnect1 from '@/assets/do connect 1.png';
import doConnect2 from '@/assets/do connect 2.png';
import doConnect3 from '@/assets/do connect 3.png';
import doConnect4 from '@/assets/do connect 4.png';
import doConnect5 from '@/assets/do connect 5.png';
import doJobsScrolling1 from '@/assets/do jobs scrolling 1.png';
import doJobsScrolling2 from '@/assets/do jobs scrolling 2.png';
import doJobsScrolling3 from '@/assets/do jobs scrolling 3.png';
import doJobsScrolling4 from '@/assets/do jobs scrolling 4.png';
import dojobsLogoStaff from '@/assets/dojobs-logo-staff.jpg';

const Hero = () => {
  const { mode } = useMode();

  // Your 5 custom DoConnect images for business carousel
  const businessCarouselImages = [
    {
      src: doConnect1,
      alt: 'DoConnect Professional Image 1',
      title: 'Professional Excellence',
      description: 'Experience the highest standards of professional service'
    },
    {
      src: doConnect2,
      alt: 'DoConnect Professional Image 2',
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology for modern business needs'
    },
    {
      src: doConnect3,
      alt: 'DoConnect Professional Image 3',
      title: 'Team Collaboration',
      description: 'Work together seamlessly with our collaborative platform'
    },
    {
      src: doConnect4,
      alt: 'DoConnect Professional Image 4',
      title: 'Strategic Growth',
      description: 'Scale your business with our comprehensive solutions'
    },
    {
      src: doConnect5,
      alt: 'DoConnect Professional Image 5',
      title: 'Future Ready',
      description: 'Stay ahead with our forward-thinking approach'
    }
  ];

  // Your 5 custom DoJobs images for staff carousel
  const staffCarouselImages = [
    {
      src: doJobsScrolling1,
      alt: 'DoJobs Staff Image 1',
      title: 'Find Your Perfect Job',
      description: 'Discover amazing part-time opportunities across Singapore'
    },
    {
      src: doJobsScrolling2,
      alt: 'DoJobs Staff Image 2',
      title: 'Flexible Work Options',
      description: 'Choose from a variety of flexible work arrangements'
    },
    {
      src: doJobsScrolling3,
      alt: 'DoJobs Staff Image 3',
      title: 'Easy Job Applications',
      description: 'Apply to jobs quickly and easily with our platform'
    },
    {
      src: doJobsScrolling4,
      alt: 'DoJobs Staff Image 4',
      title: 'Career Growth',
      description: 'Build your career with top companies in Singapore'
    },
    {
      src: dojobsLogoStaff,
      alt: 'DoJobs Staff Platform - Complete job solution',
      title: 'Complete Job Solution',
      description: 'Everything you need to find and secure your next job'
    }
  ];

  const content = {
    business: {
      title: 'Find the Perfect Part-Time Staff in Singapore',
      subtitle: 'Connect with skilled freelancers and flexible workers ready to drive your business forward',
      cta: 'Get Started Free',
      secondaryCta: 'Download Our App',
      icon: Briefcase,
      image: heroBusinessImg,
      carouselImages: businessCarouselImages,
    },
    staff: {
      title: 'Discover Your Next Job Opportunity in Singapore',
      subtitle: 'Find flexible part-time work with top businesses across Singapore',
      cta: 'Find Jobs Now',
      secondaryCta: 'Download Our App',
      icon: Users,
      image: heroStaffImg,
      carouselImages: staffCarouselImages,
    },
  };

  const current = content[mode];
  const Icon = current.icon;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Solid background base */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        mode === 'business' 
          ? 'bg-gradient-to-br from-orange-50 via-background to-orange-50/30' 
          : 'bg-gradient-to-br from-purple-50 via-background to-purple-50/30'
      }`} />
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        mode === 'business' ? 'bg-business-gradient' : 'bg-staff-gradient'
      } opacity-5`} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              mode === 'business' ? 'bg-business/10' : 'bg-staff/10'
            }`}>
              <Icon className={`w-5 h-5 ${mode === 'business' ? 'text-business' : 'text-staff'}`} />
              <span className={`text-sm font-medium ${mode === 'business' ? 'text-business' : 'text-staff'}`}>
                {mode === 'business' ? 'For Businesses' : 'For Staffs'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {current.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              {current.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection(mode === 'business' ? 'get-in-touch' : 'get-in-touch')}
                className={`text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-large hover:shadow-medium transition-all duration-300 hover-scale ${
                  mode === 'business' 
                    ? 'bg-business hover:bg-business-dark text-white' 
                    : 'bg-staff hover:bg-staff-dark text-white'
                }`}
              >
                {current.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('download-app')}
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl border-2 hover:bg-muted transition-all duration-300 hover-scale"
              >
                {current.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            {/* Enhanced glow effect */}
            <div className={`absolute -inset-4 rounded-3xl blur-3xl opacity-30 transition-all duration-700 ${
              mode === 'business' ? 'bg-business' : 'bg-staff'
            }`} />
            
            {/* Hero image with premium overlay or carousel for both modes */}
            {current.carouselImages ? (
              <div className="relative rounded-3xl shadow-large overflow-hidden h-[500px] lg:h-[600px]">
                <ImageCarousel
                  images={current.carouselImages}
                  autoPlay={true}
                  autoPlayInterval={5000}
                  showControls={true}
                  showIndicators={true}
                  className="h-full"
                />
                {/* Subtle gradient overlay for brand consistency */}
                <div className={`absolute inset-0 pointer-events-none ${
                  mode === 'business' 
                    ? 'bg-gradient-to-t from-orange-500/10 via-transparent to-transparent' 
                    : 'bg-gradient-to-t from-purple-500/10 via-transparent to-transparent'
                }`} />
              </div>
            ) : (
              <div className="relative rounded-3xl shadow-large overflow-hidden">
                <img
                  src={current.image}
                  alt={`${mode} hero`}
                  className="w-full h-auto object-cover"
                  style={{
                    // Feather the right and left edges slightly to remove any harsh black or artifact lines in source images
                    maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)'
                  }}
                />
                {/* Subtle gradient overlay for brand consistency */}
                <div className={`absolute inset-0 transition-all duration-700 ${
                  mode === 'business' 
                    ? 'bg-gradient-to-t from-orange-500/10 via-transparent to-transparent' 
                    : 'bg-gradient-to-t from-purple-500/10 via-transparent to-transparent'
                }`} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
