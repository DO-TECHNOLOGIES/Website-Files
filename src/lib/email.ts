import emailjs from '@emailjs/browser';

export type EmailPayload = {
  toEmail: string;
  subject: string;
  message: string;
  fromName?: string;
  replyTo?: string;
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export async function sendEmail(payload: EmailPayload): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS is not configured.');
  }

  const templateParams = {
    to_email: payload.toEmail,
    subject: payload.subject,
    message: payload.message,
    from_name: payload.fromName ?? 'Website',
    reply_to: payload.replyTo ?? undefined,
  } as Record<string, unknown>;

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  });
}



