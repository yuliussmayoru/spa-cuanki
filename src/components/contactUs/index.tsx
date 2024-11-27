export default function ContactUs() {
    return (
      <section className="py-16 bg-[#398790] text-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-kaushan font-extrabold mb-4">Kontak Kami</h2>
            <p className="text-sm lg:text-lg">
              Hubungi kami untuk informasi lebih lanjut, pemesanan, atau sekadar berbagi pengalaman Anda.
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-kaushan font-bold mb-4">Informasi Kontak</h3>
              <p className="text-sm lg:text-lg mb-4">
                <span className="font-semibold">Alamat:</span> Jl. Cuanki Raya No. 123, Bandung, Jawa Barat
              </p>
              <p className="text-sm lg:text-lg mb-4">
                <span className="font-semibold">Telepon:</span>{" "}
                <a href="tel:+6281234567890" className="underline hover:text-[#fbf1d5]">
                  +62 812-3456-7890
                </a>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:info@cuanki.com" className="underline hover:text-[#fbf1d5]">
                  info@cuanki.com
                </a>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                <span className="font-semibold">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#fbf1d5]"
                >
                  Chat via WhatsApp
                </a>
              </p>
              <p className="text-sm lg:text-lg">
                <span className="font-semibold">Jam Operasional:</span> Setiap Hari, 10:00 - 22:00
              </p>
            </div>
  
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-kaushan font-bold mb-4">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full mt-2 p-3 rounded-lg bg-[#fbf1d5] text-gray-800"
                    placeholder="Nama Anda"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full mt-2 p-3 rounded-lg bg-[#fbf1d5] text-gray-800"
                    placeholder="Email Anda"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    className="w-full mt-2 p-3 rounded-lg bg-[#fbf1d5] text-gray-800"
                    rows={4}
                    placeholder="Pesan Anda"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#EF3F23] hover:bg-[#D83E23] text-white py-3 px-6 rounded-full font-semibold transition duration-300"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  