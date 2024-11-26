import AboutUs from "@/components/aboutUs";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LocationSection from "@/components/location";
import NavigationWrapper from "@/components/navigationBar/navigationWrapper";
import Produk from "@/components/produk";

export default function HomePage() {
  return (
    <div>
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
    
    
  )
}