import { useState, useEffect, useRef } from "react";

export default function LocationSection() {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = Number(entry.target.getAttribute("data-id"));
          if (entry.isIntersecting && !visibleElements.includes(elementId)) {
            setVisibleElements((prev) => [...prev, elementId]);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    const elements = document.querySelectorAll(".animate-on-view");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [visibleElements]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2
          data-id={1}
          className={`text-3xl font-kaushan font-bold text-[#EF3F23] text-center mb-8 animate-on-view transition-all duration-1000 ${
            visibleElements.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Lokasi Kami
        </h2>
        <p
          data-id={2}
          className={`text-lg text-center text-gray-700 mb-12 animate-on-view transition-all duration-1000 ${
            visibleElements.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Temukan kami di lokasi terbaik untuk menikmati cuanki langsung di tempat!
        </p>

        {/* Location Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Information */}
          <div
            data-id={3}
            className={`animate-on-view transition-all duration-1000 ${
              visibleElements.includes(3) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="text-center">
              <h3>
                "Mengapa{" "}
                <span className="font-kaushan text-red-500">Cuanki Djiwa</span> di kampus?"
              </h3>
              <p className="text-sm mb-4 mt-2">
                "Kami memahami kebutuhan mahasiswa akan makanan cepat, lezat, dan terjangkau. Cuanki
                Djiwa hadir sebagai pilihan tepat untuk menemani istirahat kuliah atau nongkrong
                bersama teman."
              </p>
            </div>
            <h3 className="text-2xl font-bold text-[#398790] mb-4 font-kaushan">Alamat</h3>
            <p className="text-gray-600 text-sm mb-4">
              Jl. Surya Sumantri No.65, Sukawarna, Kec. Sukajadi, Kota Bandung, Jawa Barat 40164
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Buka setiap hari: <span className="font-semibold">10:00 - 20:00</span>
            </p>
            <p className="text-gray-600 text-sm">
              Hubungi kami di:{" "}
              <a
                href="tel:+6282120608874"
                className="text-[#EF3F23] font-semibold hover:underline"
              >
                +6282120608874
              </a>
            </p>
          </div>

          {/* Google Map Embed */}
          <div
            data-id={4}
            className={`animate-on-view transition-all duration-1000 ${
              visibleElements.includes(4) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.039962996871!2d107.57847567587558!3d-6.885816767381244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6873a8cf5a7%3A0xf8f474dec4efb56!2sUniversitas%20Kristen%20Maranatha!5e0!3m2!1sen!2sid!4v1732697553171!5m2!1sen!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-lg shadow-md"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
