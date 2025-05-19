import Star from "../../../public/asset/Icon/Star.png";
import Like from "../../../public/asset/Icon/Hearth.png"

const CardProduct = ({
  Product,
  Category,
  Title,
  Price,
  Rating,
  ShowRating = true,
  ShowLike = false,
  onClick = () => {}
}) => {


  return (
    <div className="md:w-[230px] w-[150px] h-[300px]  rounded-lg    hover:opacity-60 transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between p-4">
      
      {/* Gambar */}
      <div className="w-full h-[150px]  flex items-center justify-center">
        <img
          className="max-h-full max-w-full object-contain"
          src={Product}
          alt={Title}
        />
      </div>

      {/* Konten */}
      <div className="flex flex-col justify-between flex-1 mt-4">
        <p className="font-medium font-montserrat text-xs text-gray-500">
          {Category}
        </p>

        {/* Title dengan potongan jika terlalu panjang */}
        <h1 className="text-sm font-semibold line-clamp-2 mt-1 ">
          {Title}
        </h1>

        <div className="w-full flex justify-between items-center mt-auto pt-3">
          <h1 className="text-[1.1rem] font-bold text-gray-800">{Price}</h1>

         
          <div className="flex gap-2">
          {ShowLike && (
            <div 
            onClick={onClick}
            className="flex self-center"> 
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill= {"red"}
                    viewBox="0 0 24 24"
                    strokeWidth={0}
                    stroke="currentColor"
                    className="size-6 cursor-pointer transition-colors duration-300 ease-in-out"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
            </div>
          )}

          {/* Rating hanya jika ShowRating true */}
          {ShowRating && (
            <div className="flex gap-1 items-center">
              <img className="w-[20px] h-[20px]" src={Star} alt="star" />
              <span className="text-sm font-medium">{Rating}</span>
            </div>
          )}
        </div>
          </div>
          
      </div>
    </div>
  );
};

export default CardProduct;
