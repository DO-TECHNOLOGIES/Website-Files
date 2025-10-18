import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface EmailData {
  name: string;
  email: string;
  contact: string;
  company?: string;
  formType: 'demo' | 'contact';
  toEmail: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  // Debug logging for production
  console.log('EmailJS Debug Info:', {
    SERVICE_ID: SERVICE_ID,
    TEMPLATE_ID: TEMPLATE_ID,
    PUBLIC_KEY: PUBLIC_KEY,
    hasServiceId: !!SERVICE_ID,
    hasTemplateId: !!TEMPLATE_ID,
    hasPublicKey: !!PUBLIC_KEY,
    SERVICE_ID_LENGTH: SERVICE_ID?.length,
    TEMPLATE_ID_LENGTH: TEMPLATE_ID?.length,
    PUBLIC_KEY_LENGTH: PUBLIC_KEY?.length,
    NODE_ENV: import.meta.env.MODE,
    isProduction: import.meta.env.MODE === 'production'
  });

  // Validate configuration
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error('EmailJS Configuration Missing:', {
      SERVICE_ID: SERVICE_ID || 'MISSING',
      TEMPLATE_ID: TEMPLATE_ID || 'MISSING',
      PUBLIC_KEY: PUBLIC_KEY || 'MISSING'
    });
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
