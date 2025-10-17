import { ModeProvider } from '@/contexts/ModeContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientShowcase from '@/components/ClientShowcase';
import JobsShowcase from '@/components/JobsShowcase';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import DownloadApp from '@/components/DownloadApp';
import Testimonials from '@/components/Testimonials';
import DemoSection from '@/components/DemoSection';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import EmailDebug from '@/components/EmailDebug';
import QuickTest from '@/components/QuickTest';

const Index = () => {
  return (
    <ModeProvider>
      <div className="min-h-screen bg-background">
        {/* Version indicator */}
        <div className="fixed top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs z-50">
          v3.0 - Latest Deploy
        </div>
        <Header />
        <Hero />
        <ClientShowcase />
        <JobsShowcase />
        <HowItWorks />
        <Benefits />
        <FAQ />
        <Testimonials />
        <DownloadApp />
        <DemoSection />
        <EmailDebug />
        <QuickTest />
        <Footer />
        <ChatBot />
      </div>
    </ModeProvider>
  );
};

export default Index;
