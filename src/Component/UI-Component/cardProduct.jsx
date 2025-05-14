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
    <div className="md:w-[230px] w-[150px] h-[300px]  rounded-lg  hover:opacity-60 transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between p-4">
      
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
                <img className="w-5 h-5" src={Like} alt="" />
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
