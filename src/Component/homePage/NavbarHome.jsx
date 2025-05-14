import Cart from "../../../public/asset/Icon/Cart.svg"
import Search from "../../../public/asset/Icon/Search.png"
import Heart from "../../../public/asset/Icon/Hearth.png"
import Profile from "../../../public/asset/Icon/User.svg"
import { Navigate, useNavigate } from "react-router-dom"

import { useState } from "react"


const NavbarHome  = () => {

    const navigate = useNavigate()

    const [search, setSearch] = useState(false)

    return(
        <>
        <div className="flex justify-between lg:px-16 lg:py-6 sm:p-10 p-6 sticky left-0 top-0 z-99 bg-white ">
        <h1 className="lg:text-3xl sm:text-3xl text-2xl text-[#866a56] font-black tracking-wider font-inter">
              LOGO
        </h1>

            <div className="flex lg:gap-6 gap-4 justify-end items-center w-full relative">
            <div className="flex md:relative flex-grow w-full justify-end ">
                <input 
                 type="text"
                className={`absolute md:bottom-0 -bottom-8  right-0 md:left-auto left-0 flex md:w-[80%] w-full items-center rounded-xl px-2 bg-brown-100 md:h-10 h-8 transition-all duration-300 ease-in-out
                focus:outline-none "
                ${search ? 'opacity-100 ' : ' opacity-0'} 
                `
                } /> 
             <div className={` hidden md:flex  w-10 h-10 z-10  justify-center items-center rounded-xl
                    transition-all duration-300 ease-in-out
                    ${search? 'bg-brown-100' : 'bg-white'}
                `}>   
             <img 
                onClick={() => setSearch(!search)}
             className=" lg:w-7 lg:h-7 sm:w-9 sm:h-9 w-7 h-7 sm:mt-0 mt-[2px] cursor-pointer hover:opacity-40 z-10"
             src={Search}
             alt="Search"
             />
             </div>

             <img 
              onClick={() => setSearch(!search)}
             className="block md:hidden lg:w-7 lg:h-7 sm:w-9 sm:h-9 w-7 h-7 sm:mt-0 mt-[2px] cursor-pointer hover:opacity-40 transition-all duration-300 ease-in-out z-10"
             src={Search}
             alt="Search"
             />
             </div>

             <img 
             onClick={() => {
                navigate("/Liked")
             }}
             className="w-6 h-6 hover:opacity-40 cursor-pointer transition-all duration-300 ease-in-out"
             src={Heart} 
             alt="Like" />

            <img
                onClick={() => {
                    navigate("/cart");
                }}
              className="lg:w-6 sm:w-8 w-6 hover:opacity-40 cursor-pointer transition-all duration-300 ease-in-out"
              src={Cart}
              alt="Cart"
            />

            <img 
            className=""
            src={Profile} 
            alt="" />
            </div>
        </div>

        </>
    )
}

export default NavbarHome