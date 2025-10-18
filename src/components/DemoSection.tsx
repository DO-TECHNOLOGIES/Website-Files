import { useMode } from '@/contexts/ModeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { sendEmail, EmailData } from '@/lib/emailjs';

const DemoSection = () => {
  const { mode } = useMode();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const emailData: EmailData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      contact: formData.get('contact') as string,
      company: formData.get('company') as string,
      formType: 'demo',
      toEmail: 'hr@dojobs.sg',
    };

    try {
      await sendEmail(emailData);
      setIsSubmitted(true);
      toast.success('Thanks! Your demo request was sent successfully.');
      if (e.currentTarget) {
        e.currentTarget.reset();
      }
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Demo request failed:', error);
      toast.error('Could not send your request right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const emailData: EmailData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      contact: formData.get('contact') as string,
      formType: 'contact',
      toEmail: 'hr@dojobs.sg',
    };

    try {
      await sendEmail(emailData);
      setIsSubmitted(true);
      toast.success('Thanks! Your message was sent successfully.');
      if (e.currentTarget) {
        e.currentTarget.reset();
      }
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Contact form failed:', error);
      toast.error('Could not send your message right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (mode === 'staff') {
    return (
      <section id="get-in-touch" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Have questions? We'd love to hear from you
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-card rounded-2xl p-8 shadow-large text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-staff/10 mb-4">
                  <CheckCircle className="w-8 h-8 text-staff" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={handleContactSubmit}
                className="bg-card rounded-2xl p-6 sm:p-8 shadow-large animate-fade-in"
              >
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="staff-name" className="text-base font-medium">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="staff-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="mt-2 h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="staff-contact" className="text-base font-medium">
                      Contact Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="staff-contact"
                      name="contact"
                      type="tel"
                      placeholder="+65 9123 4567"
                      className="mt-2 h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="staff-email" className="text-base font-medium">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="staff-email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-2 h-12"
                      required
                    />
                  </div>


                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-staff hover:bg-staff-dark text-white rounded-xl px-8 py-6 text-lg shadow-medium"
                  >
                    {isSubmitting ? 'Sending...' : 'Get in Touch'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="get-in-touch" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get a Free Demo
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              See how DO Jobs can transform your hiring process
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-card rounded-2xl p-8 shadow-large text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-business/10 mb-4">
                <CheckCircle className="w-8 h-8 text-business" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                We've received your demo request and will contact you shortly.
              </p>
            </div>
          ) : (
            <form 
              onSubmit={handleDemoSubmit}
              className="bg-card rounded-2xl p-6 sm:p-8 shadow-large animate-fade-in"
            >
              <div className="space-y-6">
                <div>
                  <Label htmlFor="business-name" className="text-base font-medium">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="business-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="business-contact" className="text-base font-medium">
                    Contact Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="business-contact"
                    name="contact"
                    type="tel"
                    placeholder="+65 9123 4567"
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="business-email" className="text-base font-medium">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="business-email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="business-companyName" className="text-base font-medium">
                    Company Name <span className="text-muted-foreground text-sm">(Optional)</span>
                  </Label>
                  <Input
                    id="business-companyName"
                    name="company"
                    type="text"
                    placeholder="Your Company"
                    className="mt-2 h-12"
                  />
                </div>


                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-business hover:bg-business-dark text-white rounded-xl px-8 py-6 text-lg shadow-medium"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Demo'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
