    import { useEffect, useState } from "react";
    import CardProduct from "../UI-Component/cardProduct";

    export default function NewRelease() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            const filtered = data.filter(
            (item) => item.category.toLowerCase() !== "electronics"
            );

            const firstEight = filtered.slice(0, 8);

            setProducts(firstEight);
        });
    }, []);

    return (
        <section className="min-h-[100dvh] h-auto w-full lg:px-16 lg:py-10 sm:p-10 p-6 flex flex-col items-center justify-center">
        <h1 className="md:text-3xl text-2xl text-brown-300 font-roboto font-bold text-center">
            PERILISAN BARU
        </h1>

        <div className="flex flex-wrap md:gap-10 gap-6 w-full justify-center items-center mt-10">
            {products.map((product) => (
            <CardProduct
                key={product.id}
                Product={product.image}
                Category={product.category}
                Title={product.title}
                Price={`$${product.price}`}
                Rating={product.rating.rate}
                ShowRating={true} // Tidak ditampilkan di section ini
            />
            ))}
        </div>
        </section>
    );
    }
