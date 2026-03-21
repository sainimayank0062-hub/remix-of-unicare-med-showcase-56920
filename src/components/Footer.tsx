import { Mail, MapPin, Phone, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              src={logo}
              alt="Unicare Medical Solutions Logo"
              className="h-16 mb-4"
            />
            <h3 className="text-2xl font-bold mb-3">
              Unicare Medical Solutions
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              Leading Modular Operation Theater Manufacturer in Delhi, Ghaziabad & across India
            </p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-primary" />
                <span><strong>GST:</strong> 09BSAPS7499N1ZL</span>
              </p>
              <p className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-primary" />
                <span><strong>UDYAM:</strong> UDYAM-UP-29-0189404</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-primary" />
                <span><strong>ISO 9001:2015</strong> Certified</span>
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>+91 7678443838</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>unicaremedical2023@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Office:</p>
                  <p className="text-sm">357, Malkhan Singh Complex, Opp Ambedkar Bhawan, Dasna Road, Ghaziabad-201001 (U.P) India</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Works:</p>
                  <p className="text-sm">Plot No. B/260, Adarsh Nagar, Subedaar Colony, Ballabhgarh District Faridabad 121004, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Specializations</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>• Modular Operation Theater</p>
              <p>• Jointless Modular OT</p>
              <p>• Stainless Steel Modular OT</p>
              <p>• Medical Gas Pipeline System</p>
              <p>• Surgical Scrub Sink Station</p>
              <p>• Modular ICU Setup</p>
              <p>• Bed Head Panel</p>
              <p>• Cubical Curtain Track</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <button
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                className="block hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="block hover:text-primary transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="block hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="block hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Link to="/privacy-policy" className="block hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="block hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p className="mb-1">
            Copyright © 2025 Unicare Medical Solutions | All Rights Reserved.
          </p>
          <p className="text-xs">
            GST: 09BSAPS7499N1ZL | UDYAM: UDYAM-UP-29-0189404 | ISO 9001:2015 Certified
          </p>
          <div className="flex justify-center gap-4 mt-3 text-xs">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
