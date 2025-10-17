import emailjs from '@emailjs/browser';

export type EmailPayload = {
  toEmail: string;
  subject: string;
  message: string;
  fromName?: string;
  replyTo?: string;
  contact?: string;
};

// Temporary hardcoded values for testing
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_6kt3tkb';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_wq78wkf';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '3uKgx6C4kpHB3haPC';

// Debug logging for production
console.log('EmailJS Environment Variables:', {
  SERVICE_ID: SERVICE_ID ? 'SET' : 'MISSING',
  TEMPLATE_ID: TEMPLATE_ID ? 'SET' : 'MISSING', 
  PUBLIC_KEY: PUBLIC_KEY ? 'SET' : 'MISSING',
  NODE_ENV: import.meta.env.MODE
});

export async function sendEmail(payload: EmailPayload): Promise<void> {
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



