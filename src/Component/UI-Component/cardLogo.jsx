import Shoping1 from "../../../public/asset/Image/Shoping1TOKPED.png"

const CardLogo = ({Logo = Shoping1, Name = "Tokopedia",TextColor = "text-[#4fcf5d]"}) => {
    return(
        <>
            <div className=" bg-white p-2 md:w-35 md:h-35 w-25 h-25 rounded-3xl  overflow-hidden relative group"> 
                <img className="w-full h-full object-cover object-center" src={Logo} alt={Name} />

                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
          <h1 className={` ${TextColor}  font-montserrat md:text-2xl text-md text-center font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            {Name}
          </h1>
        </div>
            </div>
        </>
    )

}

export default CardLogo