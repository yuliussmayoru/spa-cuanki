export default function Footer() {
    return (
      <footer className="bg-[#398790] text-white py-10 border-t border-gray-300">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Tentang Kami</h3>
              <p className="text-sm text-gray-200">
                Kami menyediakan cuanki lezat dengan cita rasa autentik. Nikmati
                kehangatan dan kenikmatan semangkuk cuanki yang dibuat dengan cinta.
              </p>
            </div>
  
            {/* Navigation Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Navigasi Cepat</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#menu" className="text-sm hover:underline">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#lokasi" className="text-sm hover:underline">
                    Lokasi
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="text-sm hover:underline">
                    Kontak
                  </a>
                </li>
                <li>
                  <a href="#tentang" className="text-sm hover:underline">
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-sm">Email: </span>
                  <a
                    href="mailto:info@cuanki.com"
                    className="text-sm hover:underline"
                  >
                    info@cuanki.com
                  </a>
                </li>
                <li>
                  <span className="text-sm">Telepon: </span>
                  <a href="tel:+6281234567890" className="text-sm hover:underline">
                    +62 812-3456-7890
                  </a>
                </li>
                <li>
                  <span className="text-sm">WhatsApp: </span>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    Chat via WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Social Media Links */}
          <div className="mt-8 border-t border-white border-opacity-30 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-200">
              &copy; {new Date().getFullYear()} Cuanki & Chill. All rights
              reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-[#fbf1d5] rounded-full hover:bg-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#398790]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.675 0h-21.35C.583 0 0 .583 0 1.3v21.4c0 .717.583 1.3 1.325 1.3h11.5v-9.3h-3.1v-3.6h3.1v-2.7c0-3.066 1.867-4.7 4.55-4.7 1.3 0 2.416.1 2.744.141v3.2h-1.9c-1.494 0-1.788.708-1.788 1.75v2.309h3.575l-.466 3.6h-3.109V24h6.086c.717 0 1.3-.583 1.3-1.3V1.3c0-.717-.583-1.3-1.325-1.3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-[#fbf1d5] rounded-full hover:bg-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#398790]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.402.597.206 1.027.455 1.48.909.454.454.703.884.909 1.48.163.457.348 1.257.402 2.428.058 1.266.07 1.646.07 4.849 0 3.204-.012 3.584-.07 4.85-.054 1.17-.24 1.97-.402 2.428-.206.597-.455 1.027-.909 1.48-.454.454-.884.703-1.48.909-.457.163-1.257.348-2.428.402-1.266.058-1.646.07-4.85.07-3.203 0-3.584-.012-4.85-.07-1.17-.054-1.97-.24-2.428-.402-.597-.206-1.027-.455-1.48-.909-.454-.454-.703-.884-.909-1.48-.163-.457-.348-1.257-.402-2.428-.058-1.266-.07-1.646-.07-4.85 0-3.203.012-3.584.07-4.85.054-1.17.24-1.97.402-2.428.206-.597.455-1.027.909-1.48.454-.454.884-.703 1.48-.909.457-.163 1.257-.348 2.428-.402 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.755 0 8.333.013 7.052.072 5.773.132 4.843.363 4.092.61 3.3.872 2.653 1.228 2.001 1.879.849 3.031.488 4.676.297 6.475.094 8.335 0 8.743 0 12c0 3.257.013 3.666.072 5.545.132 1.799.363 3.444.61 4.295.172.605.361 1.151.586 1.696.63 1.352 1.985 2.706 3.337 3.337.545.225 1.091.414 1.696.586.85.247 2.496.478 4.295.61C8.333 23.987 8.755 24 12 24c3.257 0 3.666-.013 5.545-.072 1.799-.132 3.444-.363 4.295-.61.605-.172 1.151-.361 1.696-.586 1.352-.63 2.706-1.985 3.337-3.337.225-.545.414-1.091.586-1.696.247-.85.478-2.496.61-4.295.059-1.879.072-2.288.072-5.545 0-3.257-.013-3.666-.072-5.545-.132-1.799-.363-3.444-.61-4.295-.172-.605-.361-1.151-.586-1.696C22.707 1.985 21.353.63 20.001 0c-.545-.225-1.091-.414-1.696-.586-.85-.247-2.496-.478-4.295-.61C15.666.013 15.244 0 12 0z" />
                  <circle cx="12" cy="12" r="3.75" />
                  <path d="M18.406 5.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-[#fbf1d5] rounded-full hover:bg-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#398790]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557a9.99 9.99 0 0 1-2.827.775 4.94 4.94 0 0 0 2.163-2.723 9.96 9.96 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.733 0-4.943 2.219-4.943 4.944 0 .387.042.765.126 1.129-4.108-.205-7.76-2.175-10.2-5.166a4.906 4.906 0 0 0-.669 2.485c0 1.71.87 3.217 2.188 4.101A4.935 4.935 0 0 1 .975 8.87v.063c0 2.384 1.693 4.374 3.946 4.83-.413.112-.846.171-1.293.171-.316 0-.623-.03-.924-.086.623 1.946 2.433 3.366 4.578 3.404a9.895 9.895 0 0 1-6.124 2.109c-.398 0-.79-.023-1.174-.068a13.944 13.944 0 0 0 7.548 2.213c9.057 0 14.004-7.514 14.004-14.036 0-.214-.004-.426-.013-.638A9.936 9.936 0 0 0 24 4.557z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  