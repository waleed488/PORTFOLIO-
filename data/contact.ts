export const contactInfo = {
  heading: "Get In Touch",
  subheading: "Have a project in mind or want to collaborate? Feel free to reach out!",
  formLabels: {
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    submit: "Send Message",
    sending: "Sending...",
  },
  placeholders: {
    name: "John Doe",
    email: "john@example.com",
    message: "Hi Waleed, I'd like to discuss a project...",
  },
  messages: {
    success: "Message sent successfully! I'll get back to you soon.",
    error: "Something went wrong. Please try again or email me directly.",
  },
}

// EmailJS Configuration
// To set up EmailJS:
// 1. Create an account at https://www.emailjs.com/
// 2. Create an Email Service (e.g., Gmail)
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Copy your Service ID, Template ID, and Public Key
// 5. Set environment variables:
//    - NEXT_PUBLIC_EMAILJS_SERVICE_ID
//    - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
//    - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
}
