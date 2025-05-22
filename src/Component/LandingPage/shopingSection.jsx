import CardLogo from "../UI-Component/cardLogo"
import Shoping2 from "../../../public/asset/Image/Shoping2SHOPEE.png"
import Shoping3 from "../../../public/asset/Image/Shoping3BUKALAPAK.png"
import Shoping4 from "../../../public/asset/Image/Shoping4BLIBLI.webp"
import Shoping5 from "../../../public/asset/Image/Shoping5ZALORA.png"
import Shoping6 from "../../../public/asset/Image/Shoping6EBAY.png"
import Shoping7 from "../../../public/asset/Image/Shoping7ZALANDO.png"
import Shoping8 from "../../../public/asset/Image/Shoping8ASOS.png"
import Shoping9 from "../../../public/asset/Image/Shoping9YOOX.png"
import Shoping10 from "../../../public/asset/Image/Shoping10BeryBenka.webp"
import { useNavigate } from "react-router-dom"
export default function Shopping (){

    const navigate = useNavigate()
    return (
        <>
            <section className="w-full min-h-[100dvh] flex flex-col lg:py-10 py-10 md:py-0 items-center justify-center">
                    <h1 className="md:text-5xl text-3xl text-black text-center font-montserrat font-bold">
                        Find our every where
                    </h1>

                    <div className="bg-brown-300 w-full h-auto py-16 md:mt-20 mt-10 rounded-4xl flex justify-center items-center lg:px-16 md:px-10 px-4">
                        <div className="flex flex-row flex-wrap md:gap-8 gap-6 justify-center items-center">
                            <CardLogo/>
                            <CardLogo
                             Logo={Shoping2}
                             Name="Shopee"
                             TextColor="text-[#f78a05]"
                            />
                            <CardLogo
                            Logo={Shoping3}
                            Name="Bukalapak"
                            TextColor="text-[#f42873]"/>
                            <CardLogo
                            Logo={Shoping4}
                            Name="Blibli"
                            TextColor="text-blue-500"
                            />
                            <CardLogo
                            Logo={Shoping5}
                            Name="Zalora"
                            TextColor="text-black"
                            />
                            <CardLogo
                            Logo={Shoping7}
                            Name="Zalando"
                            TextColor="text-amber-800"
                            />
                            <CardLogo
                            Logo={Shoping8}
                            Name="ASOS"
                            TextColor="text-black"
                            />
                            <CardLogo
                            Logo={Shoping9}
                            Name="YOOX"
                            TextColor="text-black"
                            />
                            <CardLogo
                            Logo={Shoping10}
                            Name="Bery Benka"
                            TextColor="text-black"
                            />
                            <CardLogo
                            Logo={Shoping6}
                            Name="eBay"
                            TextColor="text-red-500"
                            />
                
                            {/* Component */}
                        </div>
                    </div>
                    <button className="bg-brown-300/80 hover:bg-brown-300 transition-colors duration-300 ease-in-out p-4 mt-8 w-80 text-xl font-semibold text-white font-poppins rounded-full"
                    onClick={()=> navigate("/login")}
                    >Shop Now</button>
            </section>
        </>
    )
}