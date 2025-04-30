import IconWrap from "../UI-Component/iconWrap";
import Wallet from "../../../public/asset/Icon/Coin Wallet.png"
import CustomerService from "../../../public/asset/Icon/Customer.png"

import Hero from "../../../public/asset/Image/Hero.jpg"

export default function HeroSection() {
  return (
    <>
      <section id="Home" className=" w-full lg:min-h-[120dvh] md:min-h-[130dvh] lg:block md:flex md:flex-col md:justify-center md:items-center py-10 ">
        <div>
          <h1 className="text-brown-300 font-montserrat text-3xl md:text-4xl  font-bold text-center">
            Tentang Kami
          </h1>
          <div className="w-full flex justify-center items-center">
            <p className="mt-6 text-center text-wrap md:w-[50%] w-[80%] font-montserrat">
              Kami percaya bahwa pakaian bukan hanya tentang penampilan, tetapi
              juga tentang ekspresi diri. Di Boutique, kami menghadirkan koleksi
              busana berkualitas tinggi yang dirancang untuk membuat Anda merasa
              percaya diri di setiap momen. Dengan sentuhan tren terbaru dan
              kenyamanan terbaik, kami siap menemani setiap langkah perjalanan
              gaya Anda. Temukan siapa kami, dan bergabunglah dalam cerita mode
              yang penuh inspirasi.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 mt-18 lg:px-0 pb-10 lg:gap-0 gap-10 lg:items-stretch items-center  ">
          <div className="lg:px-16 px-6 gap-12 flex flex-col justify-center">
            <IconWrap />
            <IconWrap 
            icon={Wallet}
            tittle="Wallet"
            description="Setiap pembayaran Anda dienkripsi dan diawasi ketat untuk menjaga keamanan dan kenyamanan berbelanja."
            size = "lg:w-12 lg:h-8"
          
            />
            <IconWrap 
              icon={CustomerService}
              tittle="Customer Service"
              description="Kami menyediakan pelayanan jika terdapat kendala ataupun pertanyaan, kami siap membantu anda 24 jam! "
              size="lg:w-8 lg:h-7"
            />
          </div>

          <div className=" lg:w-full w-[70%] bg-slate-400  lg:rounded-tl-[90px] lg:rounded-bl-3xl rounded-3xl
            h-[300px] lg:h-auto  mb-10 lg:mb-0">
              <img className="object-cover object-right w-full h-full lg:rounded-tl-[90px]  lg:rounded-bl-3xl rounded-3xl" src={Hero} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
