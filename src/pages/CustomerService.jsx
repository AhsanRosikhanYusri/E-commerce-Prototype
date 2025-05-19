import CS from "../Component/LandingPage/CSsection"
import Back from "../../public/asset/Icon/Back.png"
import { useNavigate } from "react-router-dom"
import {Bot} from "lucide-react";
import PopOverBot from "../Component/UI-Component/PopOverBot";


const CustomerService = () => {

    const navigate = useNavigate()
    return (
        <>
        <section className="min-h-[100dvh] w-full lg:px-16 lg:py-6 sm:p-10 p-6 relative">
        <div className="flex items-center md:gap-6 gap-4">
                <img
                  className="w-6 h-6 object-contain hover:opacity-60 transition-all duration-300 ease-in-out cursor-pointer"
                  src={Back}
                  alt="Back"
                  onClick={() => navigate("/Home")}
                />
                <h1 className="text-brown-300 text-2xl font-bold font-montserrat">
                  Customer Service
                </h1>
              </div>
            <div className="-mt-10">
        <CS/>
            </div>
            <div className="fixed right-4 bottom-0  ">
            <PopOverBot/>

              </div>
              
        </section>
        </>
    )
}

export default CustomerService