import { useState, useEffect } from "react";
import Back from "../../public/asset/Icon/Back.png";
import { useNavigate } from "react-router-dom";

import Star from "../../public/asset/Icon/Star.png";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [warning, setWarning] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Saved Cart:", savedCart);
    setCartItems(savedCart);
  }, []);

  // increment decrement item
  const updateQuantity = (key, type) => {
    const updatedItems = cartItems.map((item, index) => {
      const uniqueKey = `${item.id}-${item.size}-${index}`;
      if (uniqueKey === key) {
        const newQuantity =
          type === "increment"
            ? item.quantity + 1
            : Math.max(item.quantity - 1, 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  // input checkbox
  const handleCheckChange = (key) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectAll = () => {
    const newCheckedItems = {};
    cartItems.forEach((item, index) => {
      const uniqueKey = `${item.id}-${item.size}-${index}`;
      newCheckedItems[uniqueKey] = !selectAll;
    });
    setCheckedItems(newCheckedItems);
    setSelectAll(!selectAll);
  };

  const handleDelete = (key) => {
    const deleteItem = cartItems.filter((item, index) => {
      const uniqueKey = `${item.id}-${item.size}-${index}`;
      return uniqueKey !== key;
    });

    setCartItems(deleteItem);
    localStorage.setItem("cart", JSON.stringify(deleteItem));
  };

  const calculateTotalPrice = () => {
    const checkedItemsArray = cartItems.filter(
      (item, index) => checkedItems[`${item.id}-${item.size}-${index}`]
    );
    const totalPrice = checkedItemsArray.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    return totalPrice;
  };

  const calculateTaxTotal = (totalPrice) => {
    const tax = totalPrice / 10;
    const totalWithTax = totalPrice + tax;
    return {
      tax: tax.toFixed(2),
      totalWithTax: totalWithTax.toFixed(2),
    };
  };

  const total = calculateTotalPrice();
  const { tax, totalWithTax } = calculateTaxTotal(total);

  const handleCheckOut = (cartItems) => {
    // Memastikan filter yang benar berdasarkan checkedItems
    const selectedItems = cartItems.filter(
      (cartItem, index) =>
        checkedItems[`${cartItem.id}-${cartItem.size}-${index}`]
    );

    // Jika tidak ada item yang dipilih
    if (selectedItems.length === 0) {
      setWarning("You have not selected any item!");
      return;
    }

    // Membuat array checkout item
    const checkOutItem = selectedItems.map((item) => ({
      image: item.image,
      title: item.title,
      category: item.category,
      price: item.price,
      size: item.size,
      quantity: item.quantity,
      rating: {
        rate: item.rating.rate,
      },
    }));

    // Menghitung total harga dan pajak
    const totalPrice = selectedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = totalPrice * 0.1;
    const totalWithTax = totalPrice + tax;

    // Set warning to false setelah checkout
    setWarning("");

    // Simpan data checkout ke localStorage
    localStorage.setItem(
      "checkoutData",
      JSON.stringify({
        items: checkOutItem,
        totalPrice,
        tax,
        totalWithTax,
      })
    );

    navigate("/Pay");

    // Mengembalikan data checkout
    return {
      item: checkOutItem,
      totalPrice,
      tax,
      totalWithTax,
    };
  };

  return (
    <section className="min-h-[100dvh] w-full lg:px-16 lg:py-6 sm:p-10 p-6">
      <div className="flex items-center md:gap-6 gap-4">
        <img
          className="w-6 h-6 object-contain hover:opacity-60 transition-all duration-300 ease-in-out cursor-pointer"
          src={Back}
          alt="Back"
          onClick={() => navigate("/Home")}
        />
        <h1 className="text-brown-300 text-2xl font-bold font-montserrat">
          Cart
        </h1>
      </div>

      {/* content cart */}
      <div className="flex md:flex-row flex-col space-y-10 lg:justify-between">
        <div className="flex flex-col  md:w-1/2 lg:w-2/3 gap-6 md:max-h-full max-h-[500px]  md:overflow-visible overflow-y-scroll overflow-hidden ">
          {cartItems.length === 0 ? (
            <p>Keranjang masih kosong.</p>
          ) : (
            cartItems.map((item, index) => {
              console.log(item.category);

              const uniqueKey = `${item.id}-${item.size}-${index}`;
              return (
                <div key={uniqueKey} className="mt-10 flex w-full items-center">
                  <div className="flex lg:gap-5 gap-0 lg:max-w-[50%] max-w-full">
                    <div className="relative">
                      <input
                        id={`checkbox-${uniqueKey}`}
                        type="checkbox"
                        className="peer hidden"
                        checked={!!checkedItems[uniqueKey]}
                        onChange={() => handleCheckChange(uniqueKey)}
                      />
                      <label
                        htmlFor={`checkbox-${uniqueKey}`}
                        className="w-6 h-6 border-2 border-brown-300 rounded-sm cursor-pointer flex items-center justify-center peer-checked:bg-brown-300 transition-colors duration-200"
                      >
                        <svg
                          className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </label>
                    </div>
                    <div className="flex gap-2 w-[800px]">
                      <div className="w-[100px] h-[90px]  flex flex-shrink-0 items-center justify-center">
                        <img
                          className="h-full w-full object-contain"
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="w-full flex justify-between h-7">
                          <h1 className="lg:text-lg text-md font-semibold lg:w-[85%] w-[75%] line-clamp-3">
                            {item.title}
                          </h1>
                          <div className="flex gap-1">
                            <img
                              className="w-6 h-6 object-contain"
                              src={Star}
                              alt="rating"
                            />
                            <p>{item.rating?.rate ?? "-"}</p>
                          </div>
                        </div>
                        <h4 className="-mt-1 text-gray-500 text-xs">
                          {item.category}
                        </h4>
                        <h4 className="font-montserrat text-xs mt-1">
                          Ukuran:{" "}
                          <span className="font-medium"> {item.size}</span>{" "}
                        </h4>

                        {/* contain increment decrement */}
                        <div className="flex items-center gap-2 my-2">
                          <button
                            onClick={() =>
                              updateQuantity(uniqueKey, "decrement")
                            }
                            className="px-2 py-1 w-6 h-6 flex justify-center items-center text-xl font-bold transition-all duration-300 ease-in-out bg-amber-600 rounded hover:bg-amber-900 text-white"
                          >
                            -
                          </button>
                          <p className="bg-brown-300 text-white font-montserrat font-medium p-1 rounded-lg min-w-[30px] text-center">
                            {item.quantity}
                          </p>
                          <button
                            onClick={() =>
                              updateQuantity(uniqueKey, "increment")
                            }
                            className="px-2 py-1 w-6 h-6 flex justify-center items-center text-xl font-bold transition-all duration-300 ease-in-out bg-amber-600 rounded hover:bg-amber-900 text-white"
                          >
                            +
                          </button>
                        </div>

                        {/* price dan delete */}
                        <div className="flex justify-between">
                          <h1 className="text-lg font-semibold font-montserrat">
                            $ {item.price}
                          </h1>
                          <button
                            onClick={() => handleDelete(uniqueKey)}
                            className=" group w-8 h-8"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-6 group-hover:scale-120 transition-transform duration-200 ease-in"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {/* content kanan */}
        <div className="md:ml-4 lg:ml-0 mt-5 w-full max-h-[400px] px-8 py-4  sticky top-6 space-y-4">
          <div className="border-b-[2px] border-black pb-2  ">
            <h1 className="text-2xl font-semibold font-montserrat ">
              Total Purchase
            </h1>
          </div>
          <div className="w-full flex justify-between border-b-[2px] pb-2 border-black">
            <h2 className="text-lg font-montserrat">Subtotal</h2>
            <h2 className="text-md font-semibold flex self-center font-montserrat">
              $ {total}
            </h2>
          </div>
          <div className="w-full flex flex-col space-y-6 border-b-[2px] border-black pb-2">
            <div className="w-full flex justify-between">
              <h2 className="text-lg font-montserrat">Discount</h2>
              <h2 className="text-md font-semibold flex self-center font-montserrat">
                $ 0
              </h2>
            </div>
            <div className="w-full flex justify-between">
              <h2 className="text-lg font-montserrat">Tax</h2>
              <h2 className="text-md font-semibold flex self-center font-montserrat">
                $ {tax}
              </h2>
            </div>
          </div>
          <div className=" flex w-full justify-between ">
            <h1 className="text-2xl font-medium font-montserrat ">Total </h1>
            <h1 className="flex self-center font-montserrat font-semibold">
              $ {totalWithTax}
            </h1>
          </div>
          {warning && (
            <p className="text-red-600 font-montserrat font-medium">
              {warning}
            </p>
          )}
          <button
            onClick={() => handleCheckOut(cartItems)}
            className="bg-brown-100 hover:bg-brown-300 transition-colors duration-300 ease-in-out w-full h-auto px-6 py-2 text-white font-bold md:text-xl text-lg rounded-full font-montserrat"
          >
            Payment Now
          </button>
          <div className="flex gap-4 mt-4 ">
          <input
            id="buy-all"
            type="checkbox"
            className="peer hidden"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          <label
            htmlFor="buy-all"
            className="w-6 h-6 border-2 border-brown-300 rounded-sm cursor-pointer flex items-center justify-center peer-checked:bg-brown-300 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </label>
          <h1 className="font-montserrat font-medium text-lg">Buy All</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
