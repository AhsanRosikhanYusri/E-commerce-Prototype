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
        </section>
        </>
    )
}

export default Payment