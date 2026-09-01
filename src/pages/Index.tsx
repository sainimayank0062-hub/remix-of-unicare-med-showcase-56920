import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TrustBar from "@/components/TrustBar";
import Products from "@/components/Products";
import Owner from "@/components/Owner";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTABar from "@/components/MobileCTABar";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Header />
      <Banner />
      <TrustBar />
      <About />
      <Products />
      <Owner />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <MobileCTABar />
    </div>
  );
};

export default Index;
