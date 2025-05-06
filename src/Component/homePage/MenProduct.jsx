import { useEffect, useState } from "react";
import CardProduct from "../UI-Component/cardProduct";

export default function MenProducts() {
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Semua Produk:", data);
    
        const filter = data.filter(
          (item) => item.category.toLowerCase() === "men's clothing"
        );
        const fourProduct = filter.slice(0, 4);
        setMenProducts(fourProduct);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section id="men" className="w-full min-h-[50dvh] h-auto lg:px-16 lg:py-10 sm:p-10 p-6 flex flex-col">
      <h1 className="md:text-3xl text-2xl text-center text-brown-300 font-bold font-montserrat">
        Produk Pria
      </h1>

      <div className="flex flex-wrap md:gap-10 gap-6 w-full justify-center items-center mt-20">
        {menProducts.length === 0 ? (
          <p>Loading products...</p> 
        ) : (
          menProducts.map((product) => (
            <CardProduct
              key={product.id}
              Product={product.image}
              Category={product.category}
              Title={product.title}
              Price={`$${product.price}`}
              Rating={product.rating.rate}
              ShowRating={true}
            />
          ))
        )}
      </div>
    </section>
  );
}
