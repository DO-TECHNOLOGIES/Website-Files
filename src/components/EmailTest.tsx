import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { sendEmail } from '@/lib/email';
import { toast } from 'sonner';

const EmailTest = () => {
  const [isLoading, setIsLoading] = useState(false);

  const testEmail = async () => {
    setIsLoading(true);
    try {
      await sendEmail({
        toEmail: 'connect@dojobs.sg',
        subject: 'Test Email from DO Jobs Website',
        message: 'This is a test email to verify EmailJS is working correctly.',
        fromName: 'DO Jobs Test',
        replyTo: 'test@dojobs.sg',
      });
      
      toast.success('Test email sent successfully!');
    } catch (error) {
      console.error('Email test failed:', error);
      toast.error('Email test failed. Please check your EmailJS configuration.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">EmailJS Test</h3>
      <p className="text-sm text-gray-600 mb-4">
        Click the button below to test if EmailJS is configured correctly.
      </p>
      <Button 
        onClick={testEmail} 
        disabled={isLoading}
        className="bg-blue-600 hover:bg-blue-700"
      >
        {isLoading ? 'Sending...' : 'Send Test Email'}
      </Button>
    </div>
  );
};

export default EmailTest;
