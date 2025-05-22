import LoginWith from "../../UI-Component/LogGoogle"
import Faceook from "../../../../public/asset/Image/Facebook.webp"

export default function LogWith () {
    return (
        <>
            <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-bold lg:text-start text-center font-inter ">Join <span className="text-red-500">Free</span></h2>
                <h1 className="md:text-3xl  text-2xl lg:text-start text-center font-extrabold font-montserrat">Find Your Identity,<br/>
                    <span className="text-brown-300">Enjoy Your Favorite</span> Clothes<br />
                    at <span className="text-brown-100">This Store</span></h1>
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
