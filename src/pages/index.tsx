import AboutUs from "@/components/aboutUs";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LocationSection from "@/components/location";
import NavigationWrapper from "@/components/navigationBar/navigationWrapper";
import Produk from "@/components/produk";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Loading Overlay */}
      {isLoading && (
        <div
          className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-all duration-700 ${
            isLoading ? "backdrop-blur-md opacity-100" : "backdrop-blur-none opacity-0"
          }`}
        >
          {/* Loading Animation */}
          {/* <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div> */}
          <img src="/assets/merah.webp" alt="Loading" className="w-56" />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="top-0 sticky z-50">
          <NavigationWrapper />
        </div>
        <div id="hero">
          <Hero />
        </div>
        <div id="produk">
          <Produk />
        </div>
        <div id="location">
          <LocationSection />
        </div>
        <div id="aboutUs">
          <AboutUs />
        </div>
        <div id="contact">
          <ContactUs />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
