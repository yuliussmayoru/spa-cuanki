export default function AboutUs() {
    return (
      <section className="py-16 bg-[#fbf1d5]">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="relative">
              <img
                src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/09/19/2373331317.jpg" // Replace with your image URL
                alt="Tentang Kami"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute top-0 left-0 bg-[#EF3F23] text-white px-4 py-2 rounded-br-lg">
                <p className="font-bold">Sejak 2020</p>
              </div>
            </div>
  
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#EF3F23] mb-6">Tentang Kami</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Kami adalah penyedia cuanki autentik yang mengutamakan cita rasa dan kualitas.
                Berdiri sejak tahun <span className="font-semibold">2020</span>, kami telah melayani ribuan pelanggan
                yang puas dengan menu kami yang khas dan menggugah selera.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Semua bahan yang kami gunakan dipilih dengan cermat untuk memastikan setiap mangkuk
                cuanki memberikan pengalaman kuliner yang terbaik. Dari kuah gurih hingga bahan pelengkap,
                semuanya dibuat dengan penuh cinta dan dedikasi.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Misi kami adalah menghadirkan kelezatan cuanki tradisional dengan sentuhan modern untuk
                semua generasi.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  