import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-2">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 21, 2026</p>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using this website of Unicare Medical Solutions (GST: 09BSAPS7499N1ZL, UDYAM: UDYAM-UP-29-0189404), you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">2. Products & Services</h2>
            <p>Unicare Medical Solutions specializes in manufacturing and installing Modular Operation Theaters, Modular ICU setups, Medical Gas Pipeline Systems (MGPS), Surgical Scrub Sink Stations, Bed Head Panels, and related hospital infrastructure. All product specifications, images, and pricing on this website are indicative and subject to change based on project requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">3. Quotations & Pricing</h2>
            <p>All prices displayed on this website are approximate and may vary based on specifications, customization, location, and project scope. Final pricing will be provided in a detailed quotation after discussion of your specific requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Warranty & After-Sales</h2>
            <p>All products come with manufacturer warranty as specified in the project agreement. Warranty terms, duration, and coverage will be detailed in the purchase agreement. After-sales support is provided for all installed products.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and designs, is the property of Unicare Medical Solutions and is protected by intellectual property laws. Unauthorized use or reproduction is prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
            <p>Unicare Medical Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website. We make no guarantees about the completeness or accuracy of the information presented on this site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">7. Governing Law</h2>
            <p>These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ghaziabad, Uttar Pradesh.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">8. Contact</h2>
            <p><strong>Unicare Medical Solutions</strong></p>
            <p>357, Malkhan Singh Complex, Opp Ambedkar Bhawan, Dasna Road, Ghaziabad-201001 (U.P) India</p>
            <p>Email: unicaremedical2023@gmail.com | Phone: +91 7678443838</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
