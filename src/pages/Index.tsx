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
import EmailTest from '@/components/EmailTest';

const Index = () => {
  return (
    <ModeProvider>
      <div className="min-h-screen bg-background">
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
        <EmailTest />
        <Footer />
        <ChatBot />
      </div>
    </ModeProvider>
  );
};

export default Index;
