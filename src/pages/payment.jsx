import Back from "../../public/asset/Icon/Back.png"
import { useNavigate } from "react-router-dom"

const Payment = () => {

    const navigate = useNavigate()
    return (
        <>
        <section className="w-full min-h-[100dvh] h-full lg:px-16 lg:py-6 sm:p-10 p-6 ">

            {/* kontent atas dan judul */}
            <div className="flex items-center md:gap-6 gap-4">
                    <img
                      className="w-6 h-6 object-contain hover:opacity-60 transition-all duration-300 ease-in-out cursor-pointer"
                      src={Back}
                      alt="Back"
                      onClick={() => navigate("/Home")}
                    />
                    <h1 className="text-brown-300 text-2xl font-bold font-montserrat">
                      Payment
                    </h1>
                  </div>

                {/* konten utama */}
                <div className="flex lg:flex-row flex-col w-full h-full gap-10 mt-8 bg-amber-400 ">
                    
                    {/* konten kiri */}
                    <div className="flex flex-col space-y-10 lg:w-3/5 w-full h-full">
                        <div className="bg-white shadow-2xl lg:max-w-full md:max-w-[80%] h-[400px] rounded-2xl px-8 py-6 justify-center items-center flex   ">
                            <div className="w-12 rounded-4xl h-12 bg-amber-500">
                            
                            </div>
                        </div>

                        <div className="w-full h-[180px] bg-brown-300 lg:max-w-full md:max-w-[80%] rounded-2xl">

                        </div>
                    </div>

                    {/* konten kanan */}
                    <div className="lg:w-2/5 w-full">
                        <div className="w-full h-[400px] border-4 border-brown-300 lg:max-w-full md:max-w-[80%] rounded-3xl">

                        </div>
                    <button
                    
                    className="w-full h-auto  px-8 py-3 bg-brown-300 mt-6 rounded-full lg:max-w-full md:max-w-[80%] text-white font-montserrat text-xl font-bold hover:bg-amber-700 transition-all duration-300 ease-in-out"
                    >Pay Now</button>
                    </div>
                </div>
        </section>
        </>
    )
}

export default Payment