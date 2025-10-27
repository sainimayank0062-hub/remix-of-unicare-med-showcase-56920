import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img 
              src={logo} 
              alt="Unicare Medical Solutions Logo" 
              className="h-16 mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">
              Unicare Medical Solutions
            </h3>
            <p className="text-background/80">
              Premium Modular Operation Theater & Hospital Infrastructure
              Manufacturer
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-background/80">
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

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() =>
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-background/80 hover:text-background transition-colors"
              >
                Home
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-background/80 hover:text-background transition-colors"
              >
                Products
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-background/80 hover:text-background transition-colors"
              >
                About
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-background/80 hover:text-background transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p>
            Copyright © 2025 Unicare Medical Solutions | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
