import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Back from "../../../public/asset/Icon/Back.png";
import { useNavigate } from "react-router-dom";

import SizeSelect from "../UI-Component/size";
import Star from "../../../public/asset/Icon/Star.png";

const Detail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);

  const sizeOptionsByCategory = {
    "men's clothing": ["S", "M", "L", "XL"],
    "women's clothing": ["S", "M", "L", "XL"],
    jewelery: ["4 cm", "5 cm", "6 cm"],
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  useEffect(() => {
    if (product) {
      const savedSize = localStorage.getItem(`selectedSize-${product.id}`);
      if (savedSize) {
        setSelectedSize(savedSize);
      }
    }
  }, [product]);

  if (!product)
    return (
      <p className="text-center flex h-screen w-full justify-center items-center font-bold text-4xl font-montserrat text-brown-300">
        Loading...
      </p>
    );

  const sizes = sizeOptionsByCategory[product.category] || [];

  return (
    <section className="w-full min-h-screen flex flex-col lg:px-16 lg:py-6 sm:p-10 p-6">
      {/* Header dengan icon dan judul */}
      <div className="flex items-center md:gap-6 gap-4">
        <img
          className="w-6 h-6 object-contain hover:opacity-60 transition-all duration-300 ease-in-out cursor-pointer"
          src={Back}
          alt="Back"
          onClick={() => navigate("/Home")}
        />
        <h1 className="font-bold font-montserrat text-brown-300 text-2xl">
          Detail Produk
        </h1>
      </div>

      {/* Kontainer Detail */}
      <div className="flex flex-1 w-full items-start justify-center px-4 md:px-20 py-20">
        <div className="flex lg:flex-row flex-col md:gap-10 gap-6 w-full max-w-6xl h-full justify-between items-start">
          {/* Gambar Produk */}
          <div className="flex-shrink-0 w-[300px] h-[400px]rounded-lg flex lg:items-start items-center lg:justify-start justify-center lg:self-start self-center">
            <img
              className="w-full h-full object-contain p-4"
              src={product.image}
              alt={product.title}
            />
          </div>

          {/* Konten Kanan */}
          <div className="flex flex-col gap-4 justify-start items-start flex-1">
            <div className="w-full flex lg:flex-row flex-col justify-between">
              <h1 className="font-bold md:text-3xl text-2xl text-wrap flex lg:items-start lg:w-[85%] text-brown-300">
                {product.title}
              </h1>
              <div className="flex gap-2 h-10 lg:justify-center items-center lg:mt-0 mt-2">
                <img className="w-[30px] h-[30px]" src={Star} alt="" />
                <h1 className="font-semibold flex self-center font-montserrat text-xl">
                  {product.rating.rate}
                </h1>
              </div>
            </div>

            <h2 className="font-montserrat">{product.category}</h2>

            {/* Pilihan Ukuran */}
            {sizes.length > 0 && (
              <div className="flex gap-2 flex-wrap mt-4">
                {sizes.map((size) => (
                  <SizeSelect
                    key={size}
                    label={size}
                    isActive={selectedSize === size}
                    onClick={() => {
                      const newSize = selectedSize === size ? null : size;
                      setSelectedSize(newSize);

                      if (newSize) {
                        localStorage.setItem(
                          `selectedSize-${product.id}`,
                          newSize
                        );
                      } else {
                        localStorage.removeItem(`selectedSize-${product.id}`);
                      }
                    }}
                  />
                ))}
              </div>
            )}

            {/* Deskripsi */}
            <div className="mt-4 space-y-3">
              <h1 className="font-montserrat font-medium text-xl">
                Deskripsi Produk
              </h1>
              <p className="font-montserrat">{product.description}</p>
            </div>

            <h1 className="text-xl font-semibold">${product.price}</h1>

            {/* Contoh teks tambahan */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo
              dolorem obcaecati dolore officiis hic mollitia iste reprehenderit?
              Laboriosam perferendis eaque architecto tempora harum. Corporis,
              quasi? Quod sint quaerat ipsam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo
              dolorem obcaecati dolore officiis hic mollitia iste reprehenderit?
              Laboriosam perferendis eaque architecto tempora harum. Corporis,
              quasi? Quod sint quaerat ipsam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo
              dolorem obcaecati dolore officiis hic mollitia iste reprehenderit?
              Laboriosam perferendis eaque architecto tempora harum. Corporis,
              quasi? Quod sint quaerat ipsam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
