import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProduct from "../UI-Component/cardProduct";
import Banner from "../../../public/asset/Image/Banner Jewerly.jpg";

export default function Jewerly() {
  const [Jewerly, setJewerly] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(`Semua Produk: ${data}`);

        const filter = data.filter(
          (item) => item.category.toLowerCase() === "jewelery"
        );

        const fourProduct = filter;
        setJewerly(fourProduct);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <section id="jewerly" className="w-full min-h-[100dvh] h-auto lg:px-16 lg:py-10 sm:p-10 p-6 flex flex-col items-center justify-center ">
        <img className="rounded-xl w-full" src={Banner} alt="" />
        <div className="mt-20">
          <h1 className="md:text-3xl text-2xl text-center text-brown-300 font-bold font-montserrat">
            Perhiasan Mewah
          </h1>

          <div className="flex flex-wrap md:gap-10 gap-6 w-full justify-center items-center mt-20">
            {Jewerly.length === 0 ? (
              <p>Loading products...</p>
            ) : (
              Jewerly.map((product) => (
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
                  ShowRating={true}
                />
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
