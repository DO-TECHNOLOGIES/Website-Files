import { useMode } from '@/contexts/ModeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'sonner';
import { sendEmail } from '@/lib/email';

const demoFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  contact: z.string().trim().min(1, { message: "Contact number is required" }).max(20, { message: "Contact must be less than 20 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  companyName: z.string().trim().max(100, { message: "Company name must be less than 100 characters" }).optional(),
});

const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  contact: z.string().trim().min(1, { message: "Contact number is required" }).max(20, { message: "Contact must be less than 20 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
});

type DemoFormData = z.infer<typeof demoFormSchema>;
type ContactFormData = z.infer<typeof contactFormSchema>;

const DemoSection = () => {
  const { mode } = useMode();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const demoForm = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
  });

  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onDemoSubmit = async (data: DemoFormData) => {
    try {
      const subject = 'DO CONNECT - Free Demo Request';
      const body = `Name: ${data.name}\nContact: ${data.contact}\nEmail: ${data.email}\nCompany: ${data.companyName ?? ''}`;
      await sendEmail({
        toEmail: 'hr@dojobs.sg',
        subject,
        message: body,
        fromName: data.name,
        replyTo: data.email,
        contact: data.contact,
      });

      setIsSubmitted(true);
      toast.success('Thanks! Your demo request was sent.');
      demoForm.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error(error);
      toast.error('Could not send right now. Please email hr@dojobs.sg.');
    }
  };

  const onContactSubmit = async (data: ContactFormData) => {
    try {
      const subject = 'General Enquiry';
      const body = `Name: ${data.name}\nContact: ${data.contact}\nEmail: ${data.email}`;
      await sendEmail({
        toEmail: 'hr@dojobs.sg',
        subject,
        message: body,
        fromName: data.name,
        replyTo: data.email,
        contact: data.contact,
      });

      setIsSubmitted(true);
      toast.success('Thanks! Your message was sent.');
      contactForm.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error(error);
      toast.error('Could not send right now. Please email hr@dojobs.sg.');
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
              <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="bg-card rounded-2xl p-6 sm:p-8 shadow-large animate-fade-in">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="staff-name" className="text-base font-medium">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="staff-name"
                      type="text"
                      placeholder="Your name"
                      className="mt-2 h-12"
                      {...contactForm.register('name')}
                      aria-invalid={contactForm.formState.errors.name ? 'true' : 'false'}
                    />
                    {contactForm.formState.errors.name && (
                      <p className="text-sm text-destructive mt-1">{contactForm.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="staff-contact" className="text-base font-medium">
                      Contact Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="staff-contact"
                      type="tel"
                      placeholder="+65 9123 4567"
                      className="mt-2 h-12"
                      {...contactForm.register('contact')}
                      aria-invalid={contactForm.formState.errors.contact ? 'true' : 'false'}
                    />
                    {contactForm.formState.errors.contact && (
                      <p className="text-sm text-destructive mt-1">{contactForm.formState.errors.contact.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="staff-email" className="text-base font-medium">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="staff-email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-2 h-12"
                      {...contactForm.register('email')}
                      aria-invalid={contactForm.formState.errors.email ? 'true' : 'false'}
                    />
                    {contactForm.formState.errors.email && (
                      <p className="text-sm text-destructive mt-1">{contactForm.formState.errors.email.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={contactForm.formState.isSubmitting}
                    className="w-full bg-staff hover:bg-staff-dark text-white rounded-xl px-8 py-6 text-lg shadow-medium"
                  >
                    {contactForm.formState.isSubmitting ? 'Sending...' : 'Get in Touch'}
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
            <form onSubmit={demoForm.handleSubmit(onDemoSubmit)} className="bg-card rounded-2xl p-6 sm:p-8 shadow-large animate-fade-in">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="business-name" className="text-base font-medium">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="business-name"
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 h-12"
                    {...demoForm.register('name')}
                    aria-invalid={demoForm.formState.errors.name ? 'true' : 'false'}
                  />
                  {demoForm.formState.errors.name && (
                    <p className="text-sm text-destructive mt-1">{demoForm.formState.errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="business-contact" className="text-base font-medium">
                    Contact Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="business-contact"
                    type="tel"
                    placeholder="+65 9123 4567"
                    className="mt-2 h-12"
                    {...demoForm.register('contact')}
                    aria-invalid={demoForm.formState.errors.contact ? 'true' : 'false'}
                  />
                  {demoForm.formState.errors.contact && (
                    <p className="text-sm text-destructive mt-1">{demoForm.formState.errors.contact.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="business-email" className="text-base font-medium">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="business-email"
                    type="email"
                    placeholder="john@company.com"
                    className="mt-2 h-12"
                    {...demoForm.register('email')}
                    aria-invalid={demoForm.formState.errors.email ? 'true' : 'false'}
                  />
                  {demoForm.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">{demoForm.formState.errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="business-companyName" className="text-base font-medium">
                    Company Name <span className="text-muted-foreground text-sm">(Optional)</span>
                  </Label>
                  <Input
                    id="business-companyName"
                    type="text"
                    placeholder="Your Company"
                    className="mt-2 h-12"
                    {...demoForm.register('companyName')}
                    aria-invalid={demoForm.formState.errors.companyName ? 'true' : 'false'}
                  />
                  {demoForm.formState.errors.companyName && (
                    <p className="text-sm text-destructive mt-1">{demoForm.formState.errors.companyName.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={demoForm.formState.isSubmitting}
                  className="w-full bg-business hover:bg-business-dark text-white rounded-xl px-8 py-6 text-lg shadow-medium"
                >
                  {demoForm.formState.isSubmitting ? 'Submitting...' : 'Get Free Demo'}
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
