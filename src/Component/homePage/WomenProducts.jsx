import { useEffect, useState } from "react";
import CardProduct from "../UI-Component/cardProduct";

export default function WomenProducts (){

    const [WomenProducts,setWomenProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => {
            const filter = data.filter(
              (item) => item.category.toLowerCase() === "women's clothing"
            );
            const fourProduct = filter.slice(0, 4);
            setWomenProducts(fourProduct);
          });
      }, []);
      
    return (
        <>
         <section id="women" className="w-full min-h-[50dvh] h-auto lg:px-16 lg:py-10 sm:p-10 p-6 flex flex-col">
      <h1 className="md:text-3xl text-2xl text-center text-brown-300 font-bold font-montserrat">
        Produk Wanita
      </h1>

      <div className="flex flex-wrap md:gap-10 gap-6 w-full justify-center items-center mt-20">
        {WomenProducts.length === 0 ? (
          <p>Loading products...</p> 
        ) : (
          WomenProducts.map((product) => (
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
        </>
    )
}