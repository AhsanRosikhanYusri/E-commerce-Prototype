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
            About Us
          </h1>
          <div className="w-full flex justify-center items-center">
            <p className="mt-6 text-center text-wrap md:w-[50%] w-[80%] font-montserrat">
            We believe that clothing is not just about appearance, but also about self-expression.
At Boutique, we present a collection of high-quality fashion designed to make you feel confident in every moment.
With a touch of the latest trends and exceptional comfort, we are here to accompany every step of your style journey.
Discover who we are and be part of an inspiring fashion story.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 mt-18 lg:px-0 pb-10 lg:gap-0 gap-10 lg:items-stretch items-center  ">
          <div className="lg:px-16 px-6 gap-12 flex flex-col justify-center">
            <IconWrap />
            <IconWrap 
            icon={Wallet}
            tittle="Wallet"
            description="Every payment you make is encrypted and closely monitored to ensure a secure and comfortable shopping experience."
            size = "lg:w-12 lg:h-8"
          
            />
            <IconWrap 
              icon={CustomerService}
              tittle="Customer Service"
              description="We provide support in case of any issues or questions, we have chatbot and we're here to help you 24/7! "
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
