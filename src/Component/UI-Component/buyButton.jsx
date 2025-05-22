 import { Link } from "react-router-dom";

    const BuyButton = ({productId}) => {
        return (
            <>
            <Link
                to={`/Product/${productId}`}
                key={productId}
                className="hover:scale-[1.02] transition-transform duration-200"
              > 
                <div className="w-20 h-auto py-[4px] px-[8px] bg-brown-300 rounded-full hover:bg-brown-100 transition-colors duration-300 ease-out">
                    <h1 className="text-white font-medium font-inter text-center text-xs">Buy Now</h1>
                </div>
                </Link>
            </>
        )
    }

    export default BuyButton