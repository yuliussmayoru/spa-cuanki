export default function Hero() {

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
        <div className="relative bg-gradient-to-r from-[#EF3F23] via-[#E8684A] to-[#398790] py-16 font-[sans-serif]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="https://img.freepik.com/premium-photo/baso-cuanki-bandung-meatball-batagor-stock-soup_511235-11105.jpg?w=1380" 
                    alt="Background Image" 
                    className="w-full h-full object-cover opacity-70" 
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Cuanki & Chill</h1>
                <p className="text-lg md:text-xl mb-12">Waktunya nyantai sambil menikmati semangkuk kebahagiaan.</p>

                {/* Button */}
                <button
                    onClick={handleWhatsAppClick}
                    type="button"
                    className="bg-[#FF6B3E] text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:bg-[#D83E23] hover:shadow-xl"
                >
                    Pesan Sekarang
                </button>
            </div>
        </div>
    );
}
