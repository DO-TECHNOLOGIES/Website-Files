import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const DirectEmailJSTest: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const testDirectEmailJS = async () => {
    setIsLoading(true);
    try {
      console.log('Testing direct EmailJS...');
      
      // Import EmailJS directly
      const emailjs = await import('@emailjs/browser');
      
      // Use the exact same values as dashboard test
      const result = await emailjs.default.send(
        'service_6kt3tkb',  // Service ID
        'template_wq78wkf', // Template ID
        {
          to_email: 'connect@dojobs.sg',
          subject: 'Direct Test from Website',
          message: 'This is a direct EmailJS test from the website, bypassing our wrapper.',
          from_name: 'Website Direct Test',
          reply_to: 'test@dojobs.sg',
          contact: '+65 9123 4567',
        },
        '3uKgx6C4kpHB3haPC'  // Public Key
      );

      console.log('Direct EmailJS Result:', result);
      toast.success('Direct test email sent successfully!');
    } catch (error) {
      console.error('Direct EmailJS test failed:', error);
      toast.error('Direct test failed. Check console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center bg-blue-100 border-2 border-blue-300 rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-blue-800">Direct EmailJS Test</h3>
      <p className="mb-4 text-blue-700">This bypasses our wrapper and uses EmailJS directly.</p>
      <Button onClick={testDirectEmailJS} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
        {isLoading ? 'Sending...' : 'Send Direct Test Email'}
      </Button>
      <p className="mt-2 text-sm text-blue-600">Check console (F12) for detailed results.</p>
    </div>
  );
};

export default DirectEmailJSTest;
