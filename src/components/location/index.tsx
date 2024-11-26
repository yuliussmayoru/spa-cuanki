export default function LocationSection() {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-[#EF3F23] text-center mb-8">Lokasi Kami</h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            Temukan kami di lokasi terbaik untuk menikmati cuanki langsung di tempat!
          </p>
  
          {/* Location Info & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Information */}
            <div>
              <h3 className="text-2xl font-bold text-[#398790] mb-4">Alamat</h3>
              <p className="text-gray-600 text-lg mb-4">
                Jl. Cuanki Raya No. 123, Bandung, Jawa Barat, Indonesia
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Buka setiap hari: <span className="font-semibold">10:00 - 22:00</span>
              </p>
              <p className="text-gray-600 text-lg">
                Hubungi kami di: <a href="tel:+6281234567890" className="text-[#EF3F23] font-semibold hover:underline">+62 812-3456-7890</a>
              </p>
            </div>
  
            {/* Google Map Embed */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1234567890123!2d107.603123456789!3d-6.908123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e123456789ab%3A0x123456789abcdef0!2sJl.%20Cuanki%20Raya%20No.%20123%2C%20Bandung%2C%20Jawa%20Barat%2C%20Indonesia!5e0!3m2!1sid!2sid!4v1631234567890!5m2!1sid!2sid"
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
  