# 📧 EmailJS Setup Guide for DO Jobs Website

## Quick Setup Steps

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for free account
- Verify your email

### 2. Add Email Service
- Go to "Email Services" in dashboard
- Click "Add New Service"
- Choose "Gmail" 
- Connect your Gmail account: `connect@dojobs.sg`
- Copy the **Service ID** (e.g., `service_xxxxxxx`)

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

```
Subject: {{subject}}

From: {{from_name}} ({{reply_to}})
To: {{to_email}}

Message:
{{message}}

---
Sent from DO Jobs website contact form
```

- Save and copy the **Template ID** (e.g., `template_xxxxxxx`)

### 4. Get Public Key
- Go to "Account" → "General"
- Copy your **Public Key** (e.g., `xxxxxxxxxxxxxxxxxxxxxxxx`)

### 5. Create Environment File
Create `.env.local` in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Test Email Functionality
- Restart your dev server: `npm run dev`
- Scroll to bottom of page
- Click "Send Test Email" button
- Check `connect@dojobs.sg` inbox

## What Happens When Forms Are Submitted

### Business Mode - "Get Free Demo"
- Sends email to `connect@dojobs.sg`
- Subject: "DO CONNECT - Free Demo Request"
- Includes: Name, Contact, Email, Company

### Staff Mode - "Get in Touch"  
- Sends email to `connect@dojobs.sg`
- Subject: "General Enquiry"
- Includes: Name, Contact, Email

## Troubleshooting

### If emails don't send:
1. Check `.env.local` file exists and has correct values
2. Verify EmailJS service is active
3. Check browser console for errors
4. Ensure Gmail account is properly connected

### Test the setup:
- Use the "Send Test Email" button on the website
- Check `connect@dojobs.sg` inbox
- If test works, forms will work too!

## Remove Test Component
Once everything works, remove the EmailTest component from `src/pages/Index.tsx`
