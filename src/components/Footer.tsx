import { Mail, MapPin, Phone, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <img src={logo} alt="Unicare Medical Solutions" className="h-14 mb-5 brightness-0 invert" />
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Leading Modular Operation Theater Manufacturer in Delhi, Ghaziabad & across India. ISO 9001:2015 certified company delivering precision healthcare infrastructure.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 text-xs text-white/80">
                <Shield className="w-3 h-3" /> ISO 9001:2015 Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {[
                { label: "Home", id: "home" },
                { label: "Products", id: "products" },
                { label: "About Us", id: "about" },
                { label: "Reviews", id: "reviews" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollTo(item.id)} className="hover:text-white transition-colors duration-200">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Our Products</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>Modular Operation Theater</li>
              <li>Jointless Modular OT</li>
              <li>Medical Gas Pipeline System</li>
              <li>Surgical Scrub Sink Station</li>
              <li>Modular ICU Setup</li>
              <li>Bed Head Panel</li>
              <li>Cubical Curtain Track</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Contact Us</h4>
            <div className="space-y-4 text-sm text-white/60">
              <a href="tel:+917736077740" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 7736077740
              </a>
              <a href="mailto:unicaremedical2023@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                unicaremedical2023@gmail.com
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Plot No. B/260, Adarsh Nagar, Ballabhgarh, Faridabad-121004, Haryana</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>© 2026 All Rights Reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
