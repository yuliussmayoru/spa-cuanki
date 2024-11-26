export default function Produk() {
    const menuItems = [
      { id: 1, name: "Cuanki Baso", price: "Rp15.000", image: "https://wiratech.co.id/wp-content/uploads/2024/01/Bakso-Cuanki-Top.jpg" },
      { id: 2, name: "Cuanki Batagor", price: "Rp18.000", image: "https://wiratech.co.id/wp-content/uploads/2024/01/Bakso-Cuanki-Top.jpg" },
      { id: 3, name: "Cuanki Komplit", price: "Rp20.000", image: "https://wiratech.co.id/wp-content/uploads/2024/01/Bakso-Cuanki-Top.jpg" },
      { id: 4, name: "Cuanki Goreng", price: "Rp10.000", image: "https://wiratech.co.id/wp-content/uploads/2024/01/Bakso-Cuanki-Top.jpg" },
      { id: 5, name: "Cuanki Kuah", price: "Rp12.000", image: "https://wiratech.co.id/wp-content/uploads/2024/01/Bakso-Cuanki-Top.jpg" },
      { id: 6, name: "Batagor Kuah", price: "Rp12.000", image: "https://cdn.idntimes.com/content-images/community/2022/09/fromandroid-142641715d0e81d1aaf754c179f119f7_600x400.jpg" },
      { id: 7, name: "Batagor Goreng", price: "Rp12.000", image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/703x0/webp/photo/2023/09/11/3322607591.png" },
      { id: 8, name: "Siomay", price: "Rp12.000", image: "https://png.pngtree.com/thumb_back/fh260/background/20240630/pngtree-siomay-baso-tahu-bandung-steamed-dumpling-image_15830559.jpg" },
    ];

    const handleOrderClick = (productName: string) => {
        const phoneNumber = "+6285222803077"; // Replace with your business WhatsApp number
        const message = `Halo, saya mau beli ${productName}`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`;
    
        // Redirect to WhatsApp
        window.open(whatsappURL, "_blank");
      };
  
    return (
      <section className="py-12 bg-[#fbf1d5]">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-[#EF3F23] text-center mb-8">Menu Kami</h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            Pilih menu favorit Anda dan nikmati cuanki terbaik!
          </p>
  
          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {menuItems.map((item) => (
                <div
                key={item.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-[#EF3F23] font-semibold text-lg">{item.price}</p>
                    <button
                    type="button"
                    onClick={() => handleOrderClick(item.name)}
                    className="mt-4 w-full bg-[#398790] text-white py-2 px-4 rounded-full hover:bg-[#316e6d] transition-colors duration-300"
                    >
                    Pesan Sekarang
                    </button>
                </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  