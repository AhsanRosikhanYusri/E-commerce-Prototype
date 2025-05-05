import LoginWith from "../../UI-Component/LogGoogle"
import Faceook from "../../../../public/asset/Image/Facebook.webp"

export default function LogWith () {
    return (
        <>
            <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-bold lg:text-start text-center font-inter ">Bergabung <span className="text-red-500">Gratis</span></h2>
                <h1 className="md:text-3xl  text-2xl lg:text-start text-center font-extrabold font-montserrat">Temukan Jati Dirimu,<br/>
                    <span className="text-brown-300">Nikmati Pakaian</span> Kesukaan<br />
                    Anda di <span className="text-brown-100">Toko Ini</span></h1>
                <div className="space-y-3 flex flex-col w-full lg:items-start items-center mt-5 ">
                    <LoginWith/>
                    <LoginWith
                    icon={Faceook}
                    background="bg-blue-800"
                    textColor="text-white"
                    hover="hover:bg-blue-600"
                    />

                </div>
            </div>
        </>
    )
}