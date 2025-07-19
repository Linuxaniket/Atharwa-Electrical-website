This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



// Initialize EmailJS with debugging
  useEffect(() => {
    console.log("🔍 Environment Variables Check:");
    console.log("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    // Initialize with your actual public key
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "BlnOTTfmvrUlwgMqh";

    try {
      emailjs.init(publicKey);
      console.log("✅ EmailJS initialized successfully with key:", publicKey);
    } catch (error) {
      console.error("❌ EmailJS initialization failed:", error);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Test function with your exact credentials
  const testDirectEmailJS = async () => {
    try {
      console.log("🧪 Testing EmailJS with your credentials...");

      const result = await emailjs.send(
        "service_e1fk8d7", // Your service ID
        "template_j0ws7jj", // Your template ID
        {
          from_name: "Website Test User",
          from_email: "test@atharwaelectricals.com",
          phone: "9876543210",
          message:
            "This is a test message from your Atharwa Electricals website contact form. Testing if EmailJS integration is working correctly.",
          submission_date: new Date().toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
        "BlnOTTfmvrUlwgMqh" // Your public key
      );

      console.log("🎉 TEST SUCCESS!", result);
      alert(
        "✅ Test email sent successfully! Check anildahirea20@gmail.com for the test email."
      );
    } catch (error) {
      console.error("❌ TEST FAILED:", error);
      alert(`❌ Test failed: ${error.message || "Unknown error"}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validation check
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, and Message)");
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        message: formData.message,
        submission_date: new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      console.log("📧 Sending email with parameters:", templateParams);

      // Send email using your exact credentials
      const result = await emailjs.send(
        "service_e1fk8d7", // Your service ID
        "template_j0ws7jj", // Your template ID
        templateParams,
        "BlnOTTfmvrUlwgMqh" // Your public key
      );

      console.log("🎉 EMAIL SENT SUCCESSFULLY!", result.status, result.text);
      setSubmitStatus("success");

      // Send auto-reply to customer if they provided email
      if (formData.email) {
        try {
          await emailjs.send(
            "service_e1fk8d7",
            "template_hhe6p8p", // Your reply template ID
            {
              from_name: formData.name,
              from_email: formData.email,
              service_type: "General Inquiry",
            },
            "BlnOTTfmvrUlwgMqh"
          );
          console.log("📧 Auto-reply sent to customer");
        } catch (replyError) {
          console.log(
            "⚠️ Auto-reply failed (main email still sent):",
            replyError
          );
        }
      }

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("💥 EMAIL SENDING FAILED:", error);
      console.error("Error details:", {
        name: error.name,
        message: error.message,
        status: error.status,
        text: error.text,
      });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };