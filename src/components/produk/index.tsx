import { useState, useEffect, useRef } from "react";

export default function Produk() {
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

  const mainMenu = [
    {
      id: 1,
      name: "Cuanki",
      description:
        "Siomay 2 pcs, Tahu Goreng 2 pcs, Bakso Sedang 1 pcs, Bakso Kecil 2 pcs, Cilok 2 pcs.",
      price: "Rp15.000",
      image: "https://wiratech.co.id/wp-content/uploads/2024/01/Bakso-Cuanki-Top.jpg",
      highlight: true,
    },
    {
      id: 2,
      name: "Indomie Goreng",
      description: "Indomie goreng dengan bumbu khas Indonesia.",
      price: "Rp5.000",
      image: "https://img.freepik.com/free-photo/top-view-tasty-composition-noodles-table_23-2148803862.jpg?t=st=1732695856~exp=1732699456~hmac=97d67771d3e4527ea86036c27ddaff2d09ddaac3329b8e6a6d600b4c4907d402&w=826",
    },
    {
      id: 3,
      name: "Indomie Kuah",
      description: "Indomie kuah dengan cita rasa gurih dan segar.",
      price: "Rp5.000",
      image: "https://cdn0-production-images-kly.akamaized.net/26BnHYilY3L2NRFyoKTn-pBFe5c=/0x373:667x749/500x281/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4408744/original/012982500_1682652511-shutterstock_2185518103.jpg",
    },
  ];

  const toppings = [
    {
      id: 1,
      name: "Pilus",
      price: "Rp2.500",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Kacang_pilus.JPG",
    },
    {
      id: 2,
      name: "Kerupuk Kulit",
      price: "Rp2.500",
      image: "https://asset-2.tstatic.net/jabar/foto/bank/images/kerupuk-kulit-desa-sukadana.jpg",
    },
    {
      id: 3,
      name: "Babat",
      price: "Rp2.500",
      image: "https://www.fadagi.com/wp-content/uploads/2022/09/253.Babat-Adalah-Bagian.jpg",
    },
    {
      id: 4,
      name: "Kikil",
      price: "Rp2.500",
      image: "https://akcdn.detik.net.id/community/media/visual/2023/11/08/resep-oseng-kikil-cabe-ijo_43.jpeg?w=700&q=90",
    },
    {
      id: 5,
      name: "Jando",
      price: "Rp2.500",
      image: "https://img-global.cpcdn.com/recipes/de35dd187924a616/680x964cq70/gulai-jando-sapi-foto-resep-utama.webp",
    },
    {
      id: 6,
      name: "Kerupuk Aci",
      price: "Rp2.500",
      image: "https://asset-2.tstatic.net/tribunnews/foto/bank/images/kerupuk.jpg",
    },
  ];

  return (
    <section
      className="py-12 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/assets/logo-Utama.webp')`,
      }}
    >
      {/* Overlay with Blur */}
      <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl font-kaushan font-extrabold text-[#EF3F23] text-center mb-8">
          Menu Kami
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12">
          Pilih menu favorit Anda dan tambahkan topping sesuai selera!
        </p>

        {/* Main Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainMenu.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`relative bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden animate-on-view transform transition-all duration-1000 ${
                visibleElements.includes(item.id) ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
              }`}
            >
              {item.highlight && (
                <div className="absolute top-0 left-0 bg-[#EF3F23] text-white text-xs font-bold px-3 py-1 rounded-br-lg">
                  Best Seller
                </div>
              )}
              <div className="relative overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-kaushan font-bold text-gray-800 mb-3">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <p className="text-[#EF3F23] font-kaushan font-semibold text-lg">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Toppings Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-kaushan font-extrabold text-[#398790] mb-6 text-center">
            Topping Pilihan
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {toppings.map((topping, index) => (
            <div
                key={topping.id}
                data-id={topping.id} // Menggunakan id angka saja untuk konsistensi
                className={`relative text-center rounded-lg shadow-sm hover:shadow-md transform animate-on-view transition-all duration-1000 group ${
                visibleElements.includes(topping.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
            >
                <div
                className="absolute inset-0 bg-cover bg-center rounded-lg transform group-hover:scale-110 transition-transform duration-500"
                style={{
                    backgroundImage: `url(${topping.image})`,
                }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg transform group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10 p-4">
                <p className="text-sm font-kaushan font-bold mb-1 text-white">
                    {topping.name}
                </p>
                <p className="text-sm text-[#fbf1d5] font-semibold">
                    {topping.price}
                </p>
                </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
