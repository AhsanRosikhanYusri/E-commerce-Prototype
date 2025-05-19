import { FaWhatsapp } from "react-icons/fa";

import FormCS from "../UI-Component/formCS";
import CS from "../../../public/asset/Image/CS.png";

export default function CSsection() {
  return (
    <section className="min-h-[100dvh] w-full lg:px-16 md:px-10 px-6 py-20 flex flex-col items-center">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="font-light text-brown-300 md:text-4xl text-3xl font-montserrat text-center">
          Ada kendala?
        </h1>
        <h3 className="text-center font-inter text-xl">
          Hubungi kami, Kami siap melayani anda
        </h3>
      </div>

      <div className="flex-grow flex flex-col-reverse lg:gap-0 gap-10 lg:grid lg:grid-cols-5 w-full lg:mt-15 mt-10">
        <div className="w-full lg:col-span-3 space-y-2">
          <FormCS />
          <FormCS 
          Question="Bagaimana jika ada keterlambatan pengiriman?"/>
          <FormCS 
          Question="Apa bahan dasar dari produk?"/>
          <FormCS 
          Question="Dari mana asal brand ini?"/>
          <FormCS 
          Question="Saya kesulitan dalam penggunaan web?"/>
          <FormCS 
          Question="apakah ada ukuran yang lebih besar?"/>
          <FormCS 
          Question="saya kesulitan dalam memilih"/>
        </div>

        <div className="w-full h-full lg:w-full md:w-[70%] flex flex-col space-y-4 self-center bg-[#673418] p-4 lg:col-span-2 rounded-4xl px-12 py-10">
          <h1 className="text-white text-xl font-semibold font-poppins text-center">
            Masih ada kendala yang lain? Hubungi Customer Service Kami
          </h1>
          <img
            className="max-w-[70%] self-center rounded-2xl"
            src={CS}
            alt=""
          />
        </div>
      </div>
      <button className="group mt-10 text-xl bg-white border-brown-300 border-3 rounded-full w-[300px] h-auto p-4 relative overflow-hidden font-poppins font-semibold flex items-center justify-center gap-2">
        <span className="relative z-10 transition-all duration-300 group-hover:translate-x-2 flex items-center gap-2 text-black group-hover:text-white">
          Hubungi Kami
          <FaWhatsapp className="opacity-0 fill-green-400 transition-opacity duration-300 group-hover:opacity-100" />
        </span>
        <div className="absolute inset-0 bg-brown-300 translate-x-full rounded-full group-hover:translate-x-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
      </button>
    </section>
  );
}
