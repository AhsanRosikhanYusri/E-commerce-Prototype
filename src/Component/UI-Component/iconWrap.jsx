import Delivery from "../../../public/asset/Icon/Delivery.png"

const IconWrap = ({
     icon = Delivery, 
     tittle = "Delivery",
     description = 
     "Kami memberikan kenyamanan dengan pengantaran yang cepat dan juga menjaga kualitas Produk.",
     size = "lg:w-18 lg:h-8 w-auto h-auto"
     
    }) => {
  return (
    <>
      <div className="flex lg:flex-row flex-col lg:items-start items-center lg:space-y-0 space-y-2 ">
        <div className="bg-brown-300 lg:p-[12px] w-18 lg:w-24 p-4 lg:h-14 rounded-2xl">
          <img className={`${size} object-contain `} src={icon} alt={tittle} />
        </div>
        <div className="lg:space-y-1 space-y-3 lg:ml-5 ml-0 text-wrap lg:text-left text-center font-montserrat lg:w-auto md:w-[70%] w-[80%]">
          <h2 className="font-bold text-xl">{tittle}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default IconWrap;
