import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../../public/asset/Icon/Back.png";
import CardProduct from "../Component/UI-Component/cardProduct";
import Footer from "../Component/LandingPage/footer";
import { Link } from "react-router-dom";

const Liked = () => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState([]);

  // Ambil data produk yang disukai dari localStorage
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProducts")) || [];  // Pastikan nama key konsisten
    setLiked(savedLikes);
  }, []);



  // Fungsi untuk menghapus produk dari daftar disukai
  const handleUnlikeClick = (productId) => {
    const updatedLikes = liked.filter((product) => product.id !== productId);
    setLiked(updatedLikes);
     localStorage.removeItem(`liked-${productId}`);
    localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));  // Pastikan nama key konsisten
  };

    localStorage.setItem("liked", JSON.stringify(liked))

  return (
    <section className="w-full min-h-[100dvh] h-auto  ">
      <div className="lg:px-16 lg:py-10 sm:p-10 p-6">
      <div className="flex items-center md:gap-6 gap-4">
        <img
          className="w-6 h-6 object-contain hover:opacity-60 transition-all duration-300 ease-in-out cursor-pointer"
          src={Back}
          alt="Back"
          onClick={() => navigate("/Home")}
        />
        <h1 className="text-brown-300 text-2xl font-bold font-montserrat">
          Liked
        </h1>
      </div>
      <div className="mt-10 md:px-12 w-full h-auto flex  flex-col">
        <h1 className="font-semibold lg:text-start text-center font-inter text-black text-xl">
          Product you Liked <span className="text-md">({liked.length})</span>
        </h1>

        <div>
          {liked.length === 0 ? (
            <p className="text-brown-300 font-semibold text-center text-xl">
              No Liked Product yet!
            </p>
          ) : (
           
            <div className="flex flex-wrap lg:justify-start justify-center md:gap-10 gap-6 w-full mt-10">
              {liked.map((product) => (
                   <Link
              to={`/Product/${product.id}`}
              key={product.id}
              className="hover:scale-[1.02] transition-transform duration-200"
            > 
                <CardProduct
                  key={product.id}
                  Product={product.image}
                  Category={product.category}
                  Title={product.title}
                  Price={`$${product.price}`}
                  Rating={product.rating.rate}
                  ShowLike={true}
                  onClick={() => handleUnlikeClick(product.id)}  // Trigger handleUnlikeClick saat like di-click
                />
                </Link>
              ))}
            </div>
           
          )}
        </div>
      </div>
      </div>
      <div className=" w-full bottom-0">
          <Footer/>
          </div>
    </section>
  );
};

export default Liked;
