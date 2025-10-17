import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { sendEmail } from '@/lib/email';

const EmailDebug: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const testEmail = async () => {
    setIsLoading(true);
    try {
      await sendEmail({
        toEmail: 'connect@dojobs.sg',
        subject: 'Test Email from Live Site',
        message: 'This is a test email from the live website to verify EmailJS is working.',
        fromName: 'DO Jobs Live Test',
        replyTo: 'test@dojobs.sg',
        contact: '+65 9123 4567',
      });

      toast.success('Test email sent successfully!');
    } catch (error) {
      console.error('Email test failed:', error);
      toast.error('Email test failed. Check console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center bg-red-100 border-2 border-red-300 rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-red-800">EmailJS Debug Test</h3>
      <p className="mb-4 text-red-700">This is a temporary debug component to test EmailJS on the live site.</p>
      <Button onClick={testEmail} disabled={isLoading} className="bg-red-600 hover:bg-red-700">
        {isLoading ? 'Sending...' : 'Send Test Email'}
      </Button>
      <p className="mt-2 text-sm text-red-600">Check browser console (F12) for debug information.</p>
    </div>
  );
};

export default EmailDebug;
