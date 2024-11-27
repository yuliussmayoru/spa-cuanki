import { useEffect, useRef, useState } from "react";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-[#fbf1d5] overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/09/19/2373331317.jpg" // Replace with your image URL
              alt="Tentang Kami"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute top-0 left-0 bg-[#EF3F23] text-white px-4 py-2 rounded-br-lg">
              <p className="font-bold font-kaushan">Sejak 2024</p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2
              className={`text-3xl font-kaushan font-bold text-[#EF3F23] mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
              }`}
            >
              Tentang Kami
            </h2>
            <p
              className={`text-lg text-gray-700 mb-4 leading-relaxed transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Kami adalah penyedia cuanki autentik yang mengutamakan cita rasa dan kualitas. Berdiri sejak
              tahun <span className="font-semibold">2024</span>, kami telah melayani pelanggan yang
              puas dengan menu khas kami yang menggugah selera.
            </p>
            <p
              className={`text-lg text-gray-700 mb-4 leading-relaxed transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Semua bahan yang kami gunakan dipilih dengan cermat untuk memastikan setiap mangkuk
              cuanki memberikan pengalaman kuliner terbaik. Dari kuah gurih hingga bahan pelengkap,
              semuanya dibuat dengan penuh cinta dan dedikasi.
            </p>
            <p
              className={`text-lg text-gray-700 leading-relaxed transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Misi kami adalah menghadirkan kelezatan cuanki tradisional dengan sentuhan modern untuk
              semua generasi, memberikan kebahagiaan di setiap suapan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
