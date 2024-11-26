import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function NavigationWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+6285222803077"; // Replace with the recipient's phone number
    const message = "Halo, saya mau beli cuankinya nih!."; // Replace with your message
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  // Define menu items with labels and hrefs
  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "Produk", href: "#produk" },
    { label: "Lokasi", href: "#location" },
    { label: "Tentang Kami", href: "#aboutUs" },
    { label: "Kontak", href: "#contact" },
  ];

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-[#EF3F23] font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="flex items-center justify-between gap-5 w-full">
        {/* Logo */}
        <a href="#">
          <span className="text-white font-bold text-lg">Logo</span>
        </a>

        {/* Navigation Menu */}
        <div
          id="collapseMenu"
          className={`lg:static lg:block fixed top-0 left-0 h-full lg:h-auto lg:w-auto w-full max-w-sm bg-[#EF3F23] p-6 lg:p-0 shadow-md lg:shadow-none transform transition-transform duration-500 ease-in-out z-50 ${
            menuOpen ? "-translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          {/* Close Button (Hidden on Desktop) */}
          <button
            id="toggleClose"
            onClick={handleToggle}
            className="absolute top-4 right-4 z-[100] bg-[#EF3F23] p-3 lg:hidden"
          >
            <XMarkIcon className="w-8 text-white" />
          </button>

          <ul className="lg:flex lg:gap-x-8 space-y-4 lg:space-y-0 mt-10 lg:mt-0">
            {/* Mobile Menu Logo */}
            <li className="mb-6 top-0 absolute px-3 py-8 lg:hidden">
              <a href="#" className="text-white font-bold text-lg">
                Logo Disini
              </a>
            </li>
            {/* Dynamic Menu Items */}
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-300 py-3 px-3 lg:px-0 lg:border-b-0"
              >
                <a
                  href={item.href}
                  className={`block font-semibold text-[15px] whitespace-nowrap ${
                    item.label === item.label
                      ? "text-[white]"
                      : "text-[#fbf1d5] hover:text-[white]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex max-lg:ml-auto space-x-3">
          <button
            onClick={handleWhatsAppClick}
            className="px-4 py-2 text-sm rounded-full font-bold text-[#EF3F23] border-2 border-[#FFFFFF] bg-[#FFFFFF] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#FFFFFF]">
            Whatsapp
          </button>

          {/* Open Menu Button (Hidden on Desktop) */}
          <button
            id="toggleOpen"
            onClick={handleToggle}
            className="lg:hidden"
          >
            <Bars3Icon className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
