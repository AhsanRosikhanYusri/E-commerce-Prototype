import Cart from "../../../public/asset/Icon/Cart.svg";
import Search from "../../../public/asset/Icon/Search.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [search, setSearch] = useState(false);
  const [burger, setBurger] = useState(false);
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
      setSearch(false);
    }
  };

  return (
    <>
      {/* container */}
      <div id="Navbar" className="w-full lg:h-[20%] h-[10vh]">
        {/* parent content */}
        <div className="flex justify-between items-center lg:px-16 lg:py-6 sm:p-10 p-6 relative">
          {/* left side */}
          <div className="flex gap-4 items-start">
            {/* Burger Toggle */}
            <div
              className="space-y-2 mt-2 lg:hidden block z-50 cursor-pointer"
              onClick={() => setBurger(!burger)}
            >
              <span className="block h-0.5 w-5 sm:h-[3px] sm:w-6 bg-gray-600 transition-all"></span>
              <span className="block h-0.5 w-8 sm:h-[3px] sm:w-9 bg-gray-600 transition-all"></span>
            </div>

            {/* Navbar Mobile */}
            <div
              className={`
                lg:hidden bg-[#ad8572] rounded-b-2xl absolute left-0 top-full sm:-m-0 -mt-3 w-[200px] sm:w-[250px] h-auto  sm:h-[250px]
                transform transition-all duration-300 ease-in-out origin-top z-40
                ${
                  burger
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0 pointer-events-none"
                }
              `}
            >
              <nav className="p-6 text-white text-xl md:text-3xl font-semibold font-montserrat flex flex-col">
                <ul className="space-y-4 sm:space-y-8">
                  <li className="relative group cursor-pointer">
                    Home
                    <div className="bg-[#ad8572] h-[4px] w-0 group-hover:w-full transition-all duration-500 absolute left-0 -bottom-1"></div>
                  </li>
                  <li className="relative group cursor-pointer">
                    catalog
                    <div className="bg-[#ad8572] h-[4px] w-0 group-hover:w-full transition-all duration-500 absolute left-0 -bottom-1"></div>
                  </li>
                  <li className="relative group cursor-pointer">
                    contact                    <div className="bg-[#ad8572] h-[4px] w-0 group-hover:w-full transition-all duration-500 absolute left-0 -bottom-1"></div>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Logo */}
            <h1 className="lg:text-3xl sm:text-3xl text-2xl text-[#866a56] font-black tracking-wider font-inter">
              BOUTIQUE
            </h1>
          </div>

          {/* nav desktop */}
          <div className="lg:flex hidden font-montserrat absolute left-1/2 -translate-x-1/2">
            <nav className="cursor-pointer">
              <ul className="flex gap-8">
                <li className="relative group cursor-pointer">
                  <a href="#Home">Home</a>

                  <div className="bg-[#ad8572] h-[4px] w-0 group-hover:w-full transition-all duration-500 absolute left-0 -bottom-1"></div>
                </li>
                <li className="relative group cursor-pointer">
                  <a href="#Katalog"> catalog</a>
                  <div className="bg-[#ad8572] h-[4px] w-0 group-hover:w-full transition-all duration-500 absolute left-0 -bottom-1"></div>
                </li>
                <li className="relative group cursor-pointer">
                  <a href="#Kontak">contact</a>
                  <div className="bg-[#ad8572] h-[4px] w-0 group-hover:w-full transition-all duration-500 absolute left-0 -bottom-1"></div>
                </li>
              </ul>
            </nav>
          </div>

          {/* icon content */}
          <div className="flex sm:gap-8 gap-5">
            {/* searchbar */}
            <div className="flex">
              <input
                className={`md:relative absolute md:-translate-x-0 -translate-x-[100%]  bg-[#e3caa5] sm:h-10 lg:h-8 h-7 rounded-2xl text-md outline-none px-3
                transition-all duration-300 ease-in-out overflow-hidden transform
                ${
                  search
                    ? "sm:max-w-[220px] sm:w-[280px] max-w-[180px] z-99 opacity-100"
                    : "max-w-0 opacity-0"
                }`}
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              <img
                onClick={() => setSearch(!search)}
                className="lg:w-8 lg:h-8 sm:w-9 sm:h-9 w-7 h-7 sm:mt-0 mt-[2px] cursor-pointer hover:opacity-40 transition-all duration-300 ease-in-out"
                src={Search}
                alt="Search"
              />
            </div>
            <img
              className="lg:w-6 sm:w-8 w-6 hover:opacity-40 cursor-pointer transition-all duration-300 ease-in-out"
              src={Cart}
              alt="Cart"
            />
            <div
              className="bg-brown-300 w-24 rounded-xl flex justify-center items-center px-4 py-1 hover:bg-amber-700
            transition-colors duration-300 ease-in-out"
              onClick={() => navigate("/Login")}
            >
              <h1 className="text-white font-semibold font-montserrat">
                Sign in
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
