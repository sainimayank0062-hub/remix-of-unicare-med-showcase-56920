import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 21, 2026</p>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>When you contact us via our website forms or WhatsApp, we may collect your name, phone number, email address, hospital/organization name, city, and project requirements. This information is collected solely to respond to your inquiries and provide quotations for our products and services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>We use the information collected to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to your product and service inquiries</li>
              <li>Provide quotations and project proposals</li>
              <li>Communicate about ongoing projects</li>
              <li>Send relevant product updates (only with your consent)</li>
              <li>Improve our products and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">3. Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal information. Your data is not sold, rented, or shared with third parties for marketing purposes. We retain your information only as long as necessary to fulfill the purposes outlined in this policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Third-Party Services</h2>
            <p>Our website may use third-party services such as WhatsApp for communication. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at unicaremedical2023@gmail.com or call +91 7736077740.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Contact Us</h2>
            <p><strong>Unicare Medical Solutions</strong></p>
            <p>Plot No. B/260, Adarsh Nagar, Ballabhgarh, Faridabad-121004, Haryana, India</p>
            <p>Email: unicaremedical2023@gmail.com | Phone: +91 7736077740</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
