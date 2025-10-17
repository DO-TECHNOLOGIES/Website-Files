import emailjs from '@emailjs/browser';

export type EmailPayload = {
  toEmail: string;
  subject: string;
  message: string;
  fromName?: string;
  replyTo?: string;
  contact?: string;
};

// Use environment variables (set in Vercel dashboard)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Enhanced debug logging for production
console.log('EmailJS Configuration:', {
  SERVICE_ID,
  TEMPLATE_ID,
  PUBLIC_KEY,
  hasServiceId: !!SERVICE_ID,
  hasTemplateId: !!TEMPLATE_ID,
  hasPublicKey: !!PUBLIC_KEY,
  NODE_ENV: import.meta.env.MODE,
  isProduction: import.meta.env.MODE === 'production',
  PUBLIC_KEY_LENGTH: PUBLIC_KEY?.length,
  PUBLIC_KEY_START: PUBLIC_KEY?.substring(0, 5)
});

export async function sendEmail(payload: EmailPayload): Promise<void> {
  console.log('sendEmail called with payload:', payload);
  
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error('EmailJS Configuration Missing:', {
      SERVICE_ID: SERVICE_ID || 'MISSING',
      TEMPLATE_ID: TEMPLATE_ID || 'MISSING',
      PUBLIC_KEY: PUBLIC_KEY || 'MISSING'
    });
    throw new Error('EmailJS is not configured.');
  }

  const templateParams = {
    to_email: payload.toEmail,
    subject: payload.subject,
    message: payload.message,
    from_name: payload.fromName ?? 'Website',
    reply_to: payload.replyTo ?? payload.toEmail,
    contact: payload.contact ?? '',
  } as Record<string, unknown>;

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  });
}



