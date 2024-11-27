import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+6285222803077"; // Replace with the recipient's phone number
    const message = "Halo, saya mau beli cuankinya nih!."; // Replace with your message
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-gradient-to-r from-[#EF3F23] via-[#E8684A] to-[#398790] py-16 font-[sans-serif] lg:h-[60svh]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/premium-photo/baso-cuanki-bandung-meatball-batagor-stock-soup_511235-11105.jpg?w=1380"
          alt="Background Image"
          className={`w-full h-full object-cover opacity-70 transition-all duration-1000 ${
            isVisible ? "scale-100 opacity-70" : "scale-110 opacity-0"
          }`}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div
        className={`relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white lg:pt-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Logo */}
        <img
          src="/assets/putih.webp"
          alt="Logo Cuanki Djiwa"
          className={`w-52 mx-auto mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        />

        {/* Tagline */}
        <p
          className={`text-lg md:text-xl mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Nikmati Cita Rasa Otentik Rempah Khas Indonesia.
        </p>

        {/* Button */}
        <button
          onClick={handleWhatsAppClick}
          type="button"
          className={`bg-[#FF6B3E] font-kaushan text-white text-base tracking-wide px-6 py-3 rounded-full transition-all duration-1000 shadow-lg hover:bg-[#D83E23] hover:shadow-xl ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
}
