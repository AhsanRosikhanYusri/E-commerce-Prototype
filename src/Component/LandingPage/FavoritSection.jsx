import Favorit1 from "../../../public/asset/Image/Favorit1.jpg"
import Favorit2 from "../../../public/asset/Image/Favorit2.jpg"
import Favorit4 from "../../../public/asset/Image/Favorit4.jpg"
import Favorit5 from "../../../public/asset/Image/Favorit5.webp"
import Favorit3 from "../../../public/asset/Image/Favorit3.webp"
import Favorit6 from "../../../public/asset/Image/Favorit6.jpg"

export default function FavoritSection() {
  return (
    <>
      <section className="  flex justify-center items-center lg:px-16 md:px-10 px-6 w-full py-10 pb-30 lg:h-[100dvh] md:min-h-[40dvh] min-h-[100dvh] ">
        <div className="flex flex-col justify-center items-center gap-10  md:h-full h-screen " >
          <h1 className="lg:text-5xl text-3xl md:text-4xl text-brown-300 font-bold text-center font-montserrat lg:mt-10  mt-[1rem]">
            Produk Unggulan Kami
          </h1>

          <div className="grid grid-cols-2 grid-rows-11 gap-4 w-full h-full md:grid-cols-11 md:grid-rows-6 lg:gap-6">
            {/* Box 13 */}
            <div className="bg-amber-300 row-span-3 col-span-2 md:col-span-3 md:row-span-6 rounded-tl-[70px] rounded-2xl">
                <img className="object-cover md:object-center object-top w-full h-full rounded-tl-[70px] rounded-2xl scale-100 hover:scale-[1.04]
                                  transition-transform duration-400 ease-in-out " src={Favorit1} alt="" />
            </div>

            {/* Box 20 */}
            <div className="bg-amber-300 row-span-2 col-span-1 md:col-span-3 md:row-span-2 md:col-start-4 rounded-2xl">
            <img className="object-cover md:object-center object-top w-full h-full rounded-2xl 
                            scale-100 hover:scale-[1.04]
                                  transition-transform duration-400 ease-in-out" src={Favorit4} alt="" />  
            </div>

            {/* Box 21 */}
            <div className="bg-amber-300 row-span-3 col-span-1 md:col-span-3 md:row-span-4 md:col-start-4 md:row-start-3 rounded-2xl">
            <img className="object-cover object-center w-full h-full rounded-2xl
                            scale-100 hover:scale-[1.04]
                                  transition-transform duration-400 ease-in-out " src={Favorit2} alt="" />
            </div>

            {/* Box 24 */}
            <div className="bg-amber-300 row-span-3 col-span-1 md:col-span-2 md:row-span-4 md:col-start-7 md:row-start-1 rounded-2xl">
            <img className="object-cover md:object-center object-top w-full h-full rounded-2xl
                            scale-100 hover:scale-[1.04]
                                  transition-transform duration-400 ease-in-out " src={Favorit3} alt="" />
            </div>

            {/* Box 25 */}
            <div className="bg-amber-300 row-span-2 col-span-1 md:col-span-2 md:row-span-2 md:col-start-7 md:row-start-5 rounded-2xl">
            <img className="object-cover object-center w-full h-full rounded-2xl
                            scale-100 hover:scale-[1.04]
                                  transition-transform duration-400 ease-in-out " src={Favorit5} alt="" />
            </div>

            {/* Box 23 */}
            <div className="bg-amber-300 row-span-6 col-span-2 md:col-span-3 md:row-span-6 md:col-start-9 md:row-start-1 rounded-br-[60px] rounded-2xl">
            <img className="object-cover md:object-center object-top  w-full h-full rounded-br-[60px] rounded-2xl 
                            scale-100 hover:scale-[1.04]
                                  transition-transform duration-400 ease-in-out" src={Favorit6} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
