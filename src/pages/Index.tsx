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
import DirectEmailJSTest from '@/components/DirectEmailJSTest';

const Index = () => {
  return (
    <ModeProvider>
      <div className="min-h-screen bg-background">
        {/* Force deployment indicator */}
        <div className="fixed top-0 right-0 bg-purple-500 text-white px-2 py-1 text-xs z-50">
          v10.0 - FORCE DEPLOY
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
        <DirectEmailJSTest />
        <Footer />
        <ChatBot />
      </div>
    </ModeProvider>
  );
};

export default Index;
