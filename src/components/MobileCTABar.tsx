import { Phone, MessageCircle } from "lucide-react";

const MobileCTABar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border shadow-large">
      <div className="grid grid-cols-2">
        <a
          href="tel:+917736077740"
          className="flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-semibold"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href="https://wa.me/917736077740?text=Hello, I want to get the best quote for Modular OT setup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-semibold"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MobileCTABar;
