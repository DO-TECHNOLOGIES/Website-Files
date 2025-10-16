import { useMode } from '@/contexts/ModeContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { mode } = useMode();

  const content = {
    business: {
      title: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'How long does it take to find staff?',
          answer: 'You can expect qualified applications within 24-48 hours of posting a job.',
        },
        {
          question: 'What are the costs involved?',
          answer: 'No upfront Costs or subscription required',
        },
        {
          question: 'How do you verify candidates?',
          answer: 'All staff members go through identity verification and can build ratings through completed jobs.',
        },
        {
          question: 'Can I hire for multiple positions?',
          answer: 'Yes! You can post unlimited jobs and hire as many staff members as you need.',
        },
        {
          question: "What if I'm not satisfied with a hire?",
          answer: "We offer dispute resolution support and you can leave honest feedback to help the community.",
        },
      ],
    },
    staff: {
      title: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'Is DO Jobs really free to use?',
          answer: 'Yes! Creating a profile and applying to jobs is completely free',
        },
        {
          question: 'How do I get paid?',
          answer: 'Payments are processed securely through the platform. You can withdraw earnings to your bank account or preferred payment method.',
        },
        {
          question: 'What types of jobs are available?',
          answer: 'We have opportunities in retail, hospitality, customer service, delivery, admin support, creative work, and more.',
        },
        {
          question: 'How do ratings work?',
          answer: 'After each job, businesses can rate your performance. Higher ratings help you stand out and get hired faster.',
        },
        {
          question: 'Can I work multiple jobs at once?',
          answer: 'Absolutely! You have complete flexibility to work for multiple businesses as long as you meet your commitments.',
        },
      ],
    },
  };

  const current = content[mode];

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {current.title}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {current.faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl shadow-soft px-6 border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
