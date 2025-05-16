import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Back from "../../../public/asset/Icon/Back.png";
import { useNavigate } from "react-router-dom";
import CardProduct from "../UI-Component/cardProduct";
import { Link } from "react-router-dom";
import Footer from "../LandingPage/footer"

import SizeSelect from "../UI-Component/size";
import Star from "../../../public/asset/Icon/Star.png";
import cart from "../../../public/asset/Icon/Cart.svg";
import toast, { Toaster } from "react-hot-toast";

const Detail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [recomend, setRecomend] = useState([]);
  const [warning, setWarning] = useState("");
  const [showSizeWarning, setShowSizeWarning] = useState(false);
  const [description, setDescription] = useState(false)
  const [quantity, setQuantity] = useState(1)
 
  // pilihan ukuran berdasarkan kategori gweh

  const sizeOptionsByCategory = {
    "men's clothing": ["XS ", "S", "M", "L", "XL"],
    "women's clothing": ["XS", "S", "M", "L", "XL"],
    jewelery: ["4 cm", "5 cm", "6 cm", "7 cm"],
  };

  const handleQuantity = (type) => {
    setQuantity((prevQuantity) => {
         let newQuantity = type === "increment" ? prevQuantity + 1 : prevQuantity - 1;
    if (newQuantity < 1) newQuantity = 1;

    if (product) {
      localStorage.setItem(`quantity-${product.id}`, newQuantity.toString());
    }

    return newQuantity;
    })
  } 
  
  const handleBuyNow = () => {
    if (!selectedSize) {
      setWarning("Silakan pilih ukuran terlebih dahulu.");
      return;
    } else {
      const checkoutProduct = {
        title: product.title,
        category: product.category,
        price: product.price,
        size: selectedSize,
        quantity: quantity,
        image: product.image,
        rating: {
          rate: product.rating.rate,
        },
      };

      const totalPrice = checkoutProduct.price * checkoutProduct.quantity;
      const tax = totalPrice * 0.1;
      const totalWithTax = totalPrice + tax;

      const checkoutData = {
        items: [checkoutProduct],
        totalPrice,
        tax,
        totalWithTax,
      };

      localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

      setWarning("");

      navigate("/Pay");
    }
  };

  // ngefetch API untuk halaman detail dari id nya
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  //render untuk quantity
  useEffect(() => {
  if (product) {
    const savedQuantity = localStorage.getItem(`quantity-${product.id}`);
    if (savedQuantity) {
      setQuantity(parseInt(savedQuantity, 10));
    }
  }
}, [product]);


  // localStorage pilihan size brok
  useEffect(() => {
    if (product) {
      const savedSize = localStorage.getItem(`selectedSize-${product.id}`);
      if (savedSize) {
        setSelectedSize(savedSize);
      }
    }
  }, [product]);

  // localStorage status like
  useEffect(() => {
    if (product) {
      const likedStatus = localStorage.getItem(`liked-${product.id}`);
      if (likedStatus === "true") {
        setIsLiked(true);
      }
    }
  }, [product]);

  // ngerender produk rekomen kecuali kategori elektronik karena w ga make
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Semua Produk:", data);

        const filteredProducts = data.filter(
          (item) => item.category.toLowerCase() !== "electronics"
        );

        const fourProduct = filteredProducts.slice(0,4);

        setRecomend(fourProduct);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (!product)
    return (
      <p className="text-center flex h-screen w-full justify-center items-center font-bold text-4xl font-montserrat text-brown-300">
        Loading...
      </p>
    );

  // handleklik untuk tombol like mas seh

  const handleLikeClick = () => {
    const newLikedStatus = !isLiked;
    setIsLiked(newLikedStatus);

    if (newLikedStatus) {
      localStorage.setItem(`liked-${product.id}`, "true");
       toast.success('Product Liked')
    } else {
      localStorage.removeItem(`liked-${product.id}`);
    }

    // Ambil data like yang sudah ada di localStorage
    const existingLikes =
      JSON.parse(localStorage.getItem("likedProducts")) || [];

    const likedProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      rating: {
        rate: product.rating.rate,
      },
    };

    if (newLikedStatus) {
      // Tambahkan jika belum ada
      const alreadyExists = existingLikes.some(
        (item) => item.id === product.id
      );
      if (!alreadyExists) {
        const updatedLikes = [...existingLikes, likedProduct];
        localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
      }
    } else {
      // Hapus dari localStorage jika unlike
      const updatedLikes = existingLikes.filter(
        (item) => item.id !== product.id
      );
      localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
    }

   
  };

  // handle klik buat cart

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizeWarning(true);
      setShowSizeWarning("Silakan pilih ukuran terlebih dahulu.");
      return;
    }

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = existingCart.findIndex(
      (item) => item.id === product.id && item.size === selectedSize
    );

    if (existingIndex >= 0) {
      // Jika produk dengan size sama sudah ada, tambah jumlahnya
      existingCart[existingIndex].quantity += 1;
    } else {
      // Tambahkan produk baru dengan size yang dipilih
      existingCart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: quantity,
        size: selectedSize,
        rating: {
          rate: product.rating.rate,
        },
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    setShowSizeWarning(false);
    toast.success("Successfully Added");
  };

  // update size bisa di isi bisa kosong
  const sizes = sizeOptionsByCategory[product.category] || [];

  return (
    <section className="w-full min-h-screen ">
      <div className="flex flex-col lg:px-16 lg:py-6 sm:p-10 p-6">
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
      <div className="flex flex-1 w-full items-start justify-center px-4 md:px-20 py-20 relative">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex lg:flex-row flex-col md:gap-10 gap-6 w-full max-w-6xl h-full justify-between items-start">
          {/* Gambar Produk */}
          <div className="flex-shrink-0 w-[250px] h-[350px]rounded-lg flex lg:items-start items-center lg:justify-start justify-center lg:self-start self-center">
            <img
              className="w-full h-full object-contain p-4"
              src={product.image}
              alt={product.title}
            />
          </div>

          {/* Konten Kanan */}
          <div className="flex flex-col gap-4 justify-start items-start flex-1">
            <div className="w-full flex lg:flex-row flex-col justify-between">
              <h1 className="font-bold text-[28px] text-wrap flex lg:items-start lg:w-[85%] text-brown-300">
                {product.title}
              </h1>
              <div className="flex gap-2 h-10 lg:justify-center items-center lg:mt-0 mt-2">
                <img className="w-[30px] h-[30px]" src={Star} alt="" />
                <h1 className="font-semibold flex self-center font-montserrat text-xl">
                  {product.rating.rate}
                </h1>
                 <h1 className="font-montserrat text-xs">(99+)</h1>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-4 justify-center  text-left  -mt-2 ">
            <h2 className=" font-montserrat text-[14px]">{product.category}</h2>
            <h2 className="text-md opacity-70 text-slate-500 font-medium font-montserrat text-[14px] self-center">99+ Product Sold</h2>
            </div>

            {/* Pilihan Ukuran */}
            {sizes.length > 0 && (
              <div className="flex gap-2 flex-wrap">
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
              <h1 className=" border-b-2 pb-2 border-black/20 font-montserrat font-medium text-xl">
                Product Description  
              </h1>
              <p className={` ${description ? "line-clamp-none" : "line-clamp-2"} text-[14px] font-montserrat`}>{product.description}</p>
              <p 
              onClick={() => setDescription(!description)}
              className=" cursor-pointer max-w-[100px] font-montserrat font-semibold hover:text-brown-300 hover:underline transition-all duration-300 ease-in-out text-[14px] ">Read More</p>

            </div>
            <div className="w-full space-y-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">${product.price}</h1>

                <div className="flex justify-center items-center gap-2">
                <button
                onClick={() => handleQuantity("decrement")}
                className="px-2 py-1 w-6 h-6 flex justify-center items-center text-xl font-bold transition-all duration-300 ease-in-out bg-amber-600 rounded hover:bg-amber-900 text-white">
                  -
                </button>
                  <p className="bg-brown-300 text-white font-montserrat font-medium p-1 rounded-lg min-w-[30px] text-center">{quantity}</p>
                  <button 
                  onClick={() => handleQuantity("increment")}
                  className="px-2 py-1 w-6 h-6 flex justify-center items-center text-xl font-bold transition-all duration-300 ease-in-out bg-amber-600 rounded hover:bg-amber-900 text-white">
                  +
                </button>
                </div>

                {warning && (
                  <p className="text-red-600 font-semibold font-montserrat md:text-sm text-xs ">
                    {warning}
                  </p>
                )}
                {showSizeWarning && (
                  <p className="text-red-600 font-semibold font-montserrat md:text-sm text-xs ">
                    {showSizeWarning}
                  </p>
                )}
              </div>
              <div className="flex md:gap-8 gap-4">
                <button
                  onClick={handleBuyNow}
                  className="bg-brown-300 text-white w-[80%] py-2 text-xl font-montserrat font-bold rounded-full
            hover:bg-amber-700 transition-colors duration-300 ease-in-out
            "
                >
                  Buy Now
                </button>
                <div className="flex items-center justify-center shadow-2xl rounded-2xl w-12 h-12 hover:opacity-60 transition-colors duration-300 ease-in-out">
                  <img
                    onClick={() => {
                      handleAddToCart();
                    }}
                    className="w-8 h-auto "
                    src={cart}
                    alt="cart"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={isLiked ? "red" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10  cursor-pointer transition-colors duration-300 ease-in-out"
                    onClick={handleLikeClick}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl text-center font-montserrat text-brown-300 font-bold">
          Recomendation
        </h1>
      </div>

      <div className="flex flex-wrap md:gap-10 gap-6 w-full justify-center items-center mt-20">
        {recomend.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          recomend.map((product) => (
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
      <Footer/>
    </section>
  );
};

export default Detail;
