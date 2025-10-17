import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { sendEmail } from '@/lib/email';

const EmailDebug: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const testEmail = async () => {
    setIsLoading(true);
    try {
      console.log('Testing EmailJS on production...');
      
      await sendEmail({
        toEmail: 'keerthanadev808@gmail.com', // Changed to your email
        subject: 'Test Email from Production Site',
        message: 'This is a test email from the live production site to verify EmailJS is working.',
        fromName: 'DO Jobs Production Test',
        replyTo: 'test@dojobs.sg',
        contact: '+65 9123 4567',
      });

      console.log('EmailJS test successful!');
      toast.success('Test email sent successfully!');
    } catch (error) {
      console.error('EmailJS test failed:', error);
      toast.error('Email test failed. Check console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center bg-yellow-100 border-2 border-yellow-300 rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-yellow-800">EmailJS Production Debug</h3>
      <p className="mb-4 text-yellow-700">Testing EmailJS on the live production site.</p>
      <Button onClick={testEmail} disabled={isLoading} className="bg-yellow-600 hover:bg-yellow-700">
        {isLoading ? 'Sending...' : 'Send Test Email'}
      </Button>
      <p className="mt-2 text-sm text-yellow-600">Check browser console (F12) for debug information.</p>
    </div>
  );
};

export default EmailDebug;
