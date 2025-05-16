import { useSearchParams } from "react-router-dom";
import CardProduct from "../Component/UI-Component/cardProduct";
import { useNavigate } from "react-router-dom";
import Back from "../../public/asset/Icon/Back.png"
import { Link } from "react-router-dom";
import Footer from "../Component/LandingPage/footer";

const SearchPage = ({ products }) => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword")?.toLowerCase() || "";
  const navigate = useNavigate()

  const filtered = products.filter(
    (product) =>
      product.title.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
  );

  console.log("Filtered products:", filtered);

  return (
    <section className="min-h-[100dvh] w-full ">
      <div className="lg:px-16 lg:py-6 sm:p-10 p-6">
          <div className="flex items-center md:gap-6 gap-4">
            <img
              className="w-6 h-6 object-contain hover:opacity-60 transition-all duration-300 ease-in-out cursor-pointer"
              src={Back}
              alt="Back"
              onClick={() => navigate("/Home")}
            />
            <h1 className="text-brown-300 text-2xl font-bold font-montserrat">
              Back
            </h1>
          </div>
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 px-8">Search Results for "{keyword}"</h2>
       {filtered.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No products found for "{keyword}"
        </p>
      ) : (
        <div className="flex flex-wrap md:gap-10 gap-6 w-full justify-center items-center mt-10">
          {filtered.map((product) => (
            <Link
              to={`/Product/${product.id}`}
              key={product.id}
              className="hover:scale-[1.02] transition-transform duration-200"
            >
              <CardProduct
                Product={product.image}
                Category={product.category}
                Title={product.title}
                Price={`$${product.price}`}
                Rating={product.rating.rate}
                ShowRating={true}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
    </div>
    <Footer/>
     </section>
  );
 
};

export default SearchPage;
