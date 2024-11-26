import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function NavigationWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-[#EF3F23] font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* Logo */}
        <a href="#">
          
        </a>

        {/* Navigation Menu */}
        <div
          id="collapseMenu"
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:block max-lg:fixed max-lg:bg-[#EF3F23] max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
        >
          {/* Close Button */}
          <button
            id="toggleClose"
            onClick={handleToggle}
            className="lg:hidden fixed top-2 right-2 z-[100] bg-[#EF3F23] p-3"
          >
            <XMarkIcon className="w-8 text-white" />
          </button>

          <ul className="lg:flex gap-x-5 max-lg:space-y-3">
            {/* Mobile Menu Logo */}
            <li className="mb-6 hidden max-lg:block">
              <a href="#">
                Logo Disini
              </a>
            </li>
            {/* Menu Items */}
            {["Home", "Produk", "Lokasi", "Tentang Kami", "Kontak"].map(
              (item, index) => (
                <li
                  key={index}
                  className="max-lg:border-b border-gray-300 max-lg:py-3 px-3"
                >
                  <a
                    href="#"
                    className={`block font-semibold text-[15px] ${
                      item === "Home"
                        ? "text-[white]"
                        : "text-[#fbf1d5] hover:text-[white]"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex max-lg:ml-auto space-x-3">
          <button className="px-4 py-2 text-sm rounded-full font-bold text-[#EF3F23] border-2 border-[#FFFFFF] bg-[#FFFFFF] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#FFFFFF]">
            Whatsapp
          </button>

          {/* Open Menu Button */}
          <button id="toggleOpen" onClick={handleToggle} className="lg:hidden">
            <Bars3Icon className="w-8 h- text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};
