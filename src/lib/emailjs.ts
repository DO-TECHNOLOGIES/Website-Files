import emailjs from '@emailjs/browser';

// EmailJS configuration - Temporary hardcoded for testing
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_uzfuk6r';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_8s2af3i';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '8dgskOsRtAKgk8HD0';

export interface EmailData {
  name: string;
  email: string;
  contact: string;
  company?: string;
  formType: 'demo' | 'contact';
  toEmail: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  // Validate configuration
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS is not configured. Please check your environment variables.');
  }

  // Prepare template parameters
  const templateParams = {
    to_email: data.toEmail,
    from_name: data.name,
    from_email: data.email,
    contact: data.contact,
    company: data.company || 'Not provided',
    form_type: data.formType === 'demo' ? 'Demo Request' : 'General Enquiry',
    subject: data.formType === 'demo' ? 'DO CONNECT - Free Demo Request' : 'General Enquiry',
    message: data.formType === 'demo' 
      ? `Demo Request from ${data.name}\n\nContact: ${data.contact}\nEmail: ${data.email}\nCompany: ${data.company || 'Not provided'}`
      : `General Enquiry from ${data.name}\n\nContact: ${data.contact}\nEmail: ${data.email}`,
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
      publicKey: PUBLIC_KEY,
    });
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};
