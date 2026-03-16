import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from "resend";
import { Webhook } from "svix";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes FIRST
  
  // Webhook endpoint to receive emails from Resend
  app.post("/api/webhook", express.raw({ type: 'application/json' }), async (req, res) => {
    try {
      const payload = req.body.toString();
      const headers = req.headers as Record<string, string>;
      
      const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
      if (!webhookSecret) {
        console.error("RESEND_WEBHOOK_SECRET is not set");
        return res.status(400).json({ error: "Webhook secret not configured" });
      }

      const wh = new Webhook(webhookSecret);
      let event;
      
      try {
        event = wh.verify(payload, headers) as any;
      } catch (err) {
        console.error("Webhook verification failed:", err);
        return res.status(400).json({ error: "Invalid signature" });
      }
      
      if (event.type === 'email.received') {
        console.log("Received email webhook event from Resend");
        
        // The webhook payload contains the email ID in event.data.id
        const emailId = event.data.id;
        
        if (emailId) {
          const resendApiKey = process.env.RESEND_API_KEY;
          if (resendApiKey) {
            const resend = new Resend(resendApiKey);
            console.log(`Fetching full email details for ID: ${emailId}`);
            
            const { data: fullEmail, error } = await resend.emails.receiving.get(emailId);
            
            if (error) {
              console.error("Error retrieving full email:", error);
            } else if (fullEmail) {
              console.log("Full email retrieved successfully!");
              console.log("Subject:", fullEmail.subject);
              console.log("From:", fullEmail.from);
              console.log("Attachments count:", fullEmail.attachments?.length || 0);
              
              // You can process the full email here (e.g., save to database, parse attachments)
            }
          } else {
            console.warn("RESEND_API_KEY is not set. Cannot fetch full email details.");
          }
        } else {
          console.log("From:", event.data.from);
          console.log("To:", event.data.to);
          console.log("Subject:", event.data.subject);
        }
        
        return res.json({ success: true, message: "Email received successfully" });
      }
      
      res.json({ success: true, message: "Event ignored" });
    } catch (error) {
      console.error("Error processing webhook:", error);
      res.status(500).json({ error: "Failed to process webhook" });
    }
  });

  // Parse JSON bodies for all other routes
  app.use(express.json());

  app.post("/api/reserve", async (req, res) => {
    const { name, email, phone, service, date, time } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: "A valid email address is required" });
    }

    try {
      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        throw new Error("RESEND_API_KEY environment variable is required to send emails");
      }

      const resend = new Resend(resendApiKey);
      
      // Use the verified domain for the from address to avoid validation errors
      // Resend's default testing from address is onboarding@resend.dev
      const emailFrom = process.env.EMAIL_FROM || "onboarding@resend.dev";
      
      let adminEmailEnv = process.env.ADMIN_EMAIL || "nuurciye@gmail.com";
      // Sanitize the email in case it was entered literally as "<anything>@..."
      adminEmailEnv = adminEmailEnv.replace(/<anything>/g, 'admin');
      
      const adminEmails = adminEmailEnv
        .split(',')
        .map(e => e.trim().replace(/[<>]/g, ''))
        .filter(e => e.includes('@')); // Basic validation to ensure it's an email

      if (adminEmails.length === 0) {
        console.warn("ADMIN_EMAIL is invalid. Falling back to default.");
        adminEmails.push("nuurciye@gmail.com");
      }

      // Send email to customer
      const customerEmailPromise = resend.emails.send({
        from: `Morla Barbershop <${emailFrom}>`,
        to: email,
        subject: "Reservation Confirmed - Morla Barbershop",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #141414; text-transform: uppercase; letter-spacing: 1px;">Reservation Confirmed</h2>
            <p>Hello ${name},</p>
            <p>Your reservation has been successfully booked. Here are your appointment details:</p>
            <div style="background-color: #f5f5f4; padding: 20px; margin: 20px 0; border: 1px solid #e5e5e5;">
              <p style="margin: 0 0 10px 0;"><strong>Service:</strong> ${service}</p>
              <p style="margin: 0 0 10px 0;"><strong>Date:</strong> ${date}</p>
              <p style="margin: 0 0 0 0;"><strong>Time:</strong> ${time}</p>
            </div>
            <p>We look forward to seeing you!</p>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;" />
            <p style="font-size: 12px; color: #666;">
              <strong>Morla Barbershop</strong><br>
              Digfeer street<br>
              Mogadishu, Somalia<br>
              +252612301508
            </p>
          </div>
        `,
      });

      // Send email to admin (Morla)
      const adminEmailPromise = resend.emails.send({
        from: `Morla Barbershop <${emailFrom}>`,
        to: adminEmails,
        subject: "New Booking Received - Morla Barbershop",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #141414; text-transform: uppercase; letter-spacing: 1px;">New Booking Received</h2>
            <p>A new reservation has been booked. Here are the details:</p>
            <div style="background-color: #f5f5f4; padding: 20px; margin: 20px 0; border: 1px solid #e5e5e5;">
              <p style="margin: 0 0 10px 0;"><strong>Customer Name:</strong> ${name}</p>
              <p style="margin: 0 0 10px 0;"><strong>Customer Email:</strong> ${email}</p>
              <p style="margin: 0 0 10px 0;"><strong>Customer Phone:</strong> ${phone}</p>
              <p style="margin: 0 0 10px 0;"><strong>Service:</strong> ${service}</p>
              <p style="margin: 0 0 10px 0;"><strong>Date:</strong> ${date}</p>
              <p style="margin: 0 0 0 0;"><strong>Time:</strong> ${time}</p>
            </div>
          </div>
        `,
      });

      const [customerResult, adminResult] = await Promise.all([customerEmailPromise, adminEmailPromise]);

      if (customerResult.error) {
        console.error("Failed to send customer notification:", customerResult.error);
        // We don't throw here because in testing mode, Resend only allows sending to the verified email.
        // The reservation is still successful.
      }
      
      if (adminResult.error) {
        console.error("Failed to send admin notification:", adminResult.error);
        // We don't throw here so the customer still sees a success message
      }

      // Return success even if emails failed, so the UI can show the confirmation screen
      res.json({ success: true, data: customerResult.data || adminResult.data });
    } catch (error: any) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: error.message || "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
