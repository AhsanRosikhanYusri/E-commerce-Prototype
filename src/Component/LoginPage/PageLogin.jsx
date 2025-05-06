import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Register from "./LogComponent/Register";
import Login from "./LogComponent/Login";
import LogWith from "./LogComponent/LogGoogle";

export default function LoginPage() {
  const [isRegis, setIsRegis] = useState(false);
  const ToLandingPage = useNavigate();

  return (
    <>
      <section className="min-h-[100dvh] h-auto lg:px-16 md:px-10 px-6 w-full py-10 flex flex-col ">
        <div className=" flex gap-4 w-full ">
        <div
          className="bg-brown-300 py-2 px-4 md:w-[120px] w-[100px] h-fit  rounded-3xl hover:bg-amber-700 transition-colors duration-300 ease-in-out cursor-pointer"
          onClick={() => ToLandingPage("/")}
        >
          <h2 className="text-white font-montserrat font-bold text-center">
            Kembali
          </h2>
        </div>
        <div className=" flex md:absolute md:left-1/2 md:-translate-x-1/2">
          <div className="bg-black/40  w-[200px] flex  h-10 rounded-3xl overflow-hidden">
            <div
              onClick={() => setIsRegis(false)}
              className={`cursor-pointer w-[55%] h-full overflow-x-hidden flex justify-center items-center relative`}
            >
              <h2
                className={`text-brown-300 hover:text-white  text-md z-99 font-bold font-montserrat  transition-all duration-300 ease-in-out
                    ${isRegis ? "text-brown-300" : "text-white"}
                    `}
              >
                Masuk
              </h2>
              <div
                className={`absolute inset-0 bg-brown-300 rounded-3xl transition-all duration-500 ease-in-out opacity-100
                ${
                  isRegis
                    ? " translate-x-full "
                    : " translate-x-0"
                }`}
              ></div>
            </div>

            <div
              onClick={() => setIsRegis(true)}
              className={`cursor-pointer w-[55%] h-full overflow-x-hidden relative flex justify-center items-center `}
            >
              <h2 className={` text-md text-brown-300 hover:text-white z-99 font-bold font-montserrat transition-all duration-300 ease-in-out
                ${isRegis ? 'text-white ' : 'text-brown-300 '}`}>Daftar</h2>
                <div className={`absolute inset-0 bg-brown-300 rounded-3xl transition-all duration-500 ease-in-out opacity-100 
                ${isRegis ? '-translate-x-0' : '-translate-x-full'}
                    `}>
                </div>

            </div>
          </div>
        </div>
        </div>

        {/* Content */}
          <div className="lg:grid lg:grid-cols-2 lg:mt-12 mt-20 flex flex-col flex-grow overflow-x-hidden  ">
              <div className={`flex flex-col lg:col-span-1 translate-x-0 w-full px-8  relative md:flex-grow md:h-full justify-center items-center
                                transition-all duration-700 ease-in-out
                  ${isRegis? 'translate-x-full opacity-0 pointer-events-none ' : 'opacity-100 translate-x-0 pointer-events-auto'}
                `} >
                    <Login setIsRegis ={setIsRegis}/>

                    <div className={`lg:absolute lg:translate-x-[140%] lg:translate-y-0 translate-y-full transition-all duration-700 ease-in-out
                        ${isRegis? 'opacity-0 lg:translate-x-0 ' : 'opacity-100 lg:translate-x-[140%]'}
                      `}>
                      <LogWith/>
                    </div>
                    
              </div>
              <div className={`flex flex-col-reverse lg:col-span-1   -translate-x-0  relative w-full px-8 md:flex-grow md:h-full justify-center items-center
                              transition-all duration-700 ease-in-out
                  ${isRegis? 'opacity-100 -translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-full pointer-events-none'}
                `}>
                <Register setIsRegis ={setIsRegis}/>

                <div className={`lg:absolute lg:-translate-x-[140%]   lg:translate-y-0 -translate-y-full transition-all duration-700 ease-in-out
                      ${isRegis? 'opacity-100 lg:-translate-x-[140%] ' : 'opacity-0 lg:-translate-x-0'}
                      `}>
                      <LogWith/>
                    </div>
              </div>
             
          </div>
        </section>
    </>
  );
}
