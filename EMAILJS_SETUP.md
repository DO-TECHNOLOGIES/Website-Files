# 📧 EmailJS Setup Guide

## Quick Setup Steps

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for free account
- Verify your email

### 2. Add Email Service
- Go to "Email Services" in dashboard
- Click "Add New Service"
- Choose "Gmail" 
- Connect your Gmail account: `hr@dojobs.sg`
- Copy the **Service ID** (e.g., `service_xxxxxxx`)

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

```
Subject: {{subject}}

To: {{to_email}}
From: {{from_name}} ({{from_email}})
Contact: {{contact}}
Company: {{company}}

Message:
{{message}}

---
Form Type: {{form_type}}
Sent from DO Jobs website
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
- Fill out the contact forms on the website
- Check `hr@dojobs.sg` inbox

## What Happens When Forms Are Submitted

### Business Mode - "Get Free Demo"
- Sends email to `hr@dojobs.sg`
- Subject: "DO CONNECT - Free Demo Request"
- Includes: Name, Contact, Email, Company
- Form type: "Demo Request"

### Staff Mode - "Get in Touch"  
- Sends email to `hr@dojobs.sg`
- Subject: "General Enquiry"
- Includes: Name, Contact, Email
- Form type: "General Enquiry"

## Email Template Variables

The following variables are available in your EmailJS template:

- `{{to_email}}` - Recipient email (hr@dojobs.sg)
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{contact}}` - Phone number
- `{{company}}` - Company name (demo form only)
- `{{form_type}}` - "Demo Request" or "General Enquiry"
- `{{subject}}` - Email subject
- `{{message}}` - Formatted message content

## Troubleshooting

### If emails don't send:
1. Check `.env.local` file exists and has correct values
2. Verify EmailJS service is active
3. Check browser console for errors
4. Ensure Gmail account is properly connected
5. Restart development server after adding environment variables

### Test the setup:
- Use the contact forms on the website
- Check `hr@dojobs.sg` inbox
- If forms work, EmailJS is configured correctly!

## Free Tier Limits

- **200 emails per month**
- **2 email services**
- **2 email templates**
- Perfect for small to medium websites

## Security Notes

- Environment variables are safe for client-side use
- EmailJS handles the email sending securely
- No sensitive data is stored in the code
- Public key is safe to expose in frontend code
