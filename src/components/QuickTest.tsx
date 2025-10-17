import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const QuickTest: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const testDirect = async () => {
    setIsLoading(true);
    try {
      // Direct EmailJS test without our wrapper
      const emailjs = await import('@emailjs/browser');
      
      const result = await emailjs.default.send(
        'service_6kt3tkb',
        'template_wq78wkf',
        {
          to_email: 'connect@dojobs.sg',
          subject: 'Direct Test Email',
          message: 'This is a direct EmailJS test from the live site.',
          from_name: 'DO Jobs Direct Test',
          reply_to: 'test@dojobs.sg',
          contact: '+65 9123 4567',
        },
        '3uKgx6C4kpHB3haPC'
      );

      console.log('EmailJS Result:', result);
      toast.success('Direct test email sent successfully!');
    } catch (error) {
      console.error('Direct EmailJS test failed:', error);
      toast.error('Direct test failed. Check console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center bg-green-100 border-2 border-green-300 rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-green-800">Direct EmailJS Test</h3>
      <p className="mb-4 text-green-700">This bypasses our wrapper and tests EmailJS directly.</p>
      <Button onClick={testDirect} disabled={isLoading} className="bg-green-600 hover:bg-green-700">
        {isLoading ? 'Sending...' : 'Send Direct Test Email'}
      </Button>
      <p className="mt-2 text-sm text-green-600">Check console (F12) for detailed results.</p>
    </div>
  );
};

export default QuickTest;
