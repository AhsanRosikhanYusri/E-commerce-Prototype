import Back from "../../public/asset/Icon/Back.png";
import { useNavigate } from "react-router-dom";
import Star from "../../public/asset/Icon/Star.png";
import PaymentMethod from "../Component/UI-Component/PaymentMethod";
import { useState, useEffect } from "react";

import Paypal from "../../public/asset/Image/PayPal.png";
import Visa from "../../public/asset/Image/Visa.png";

const Payment = () => {
  const cart = localStorage.getItem("cart");
  const checkout = localStorage.getItem("checkoutData");

  let sourceData;

  if (checkout) {
    const parsed = JSON.parse(checkout);
    sourceData = {
      items: parsed.items || [],
      totalPrice: parsed.totalPrice || 0,
      tax: (parsed.totalPrice || 0) * 0.1,
      totalWithTax: (parsed.totalPrice || 0) * 1.1,
    };
  } else if (cart) {
    const parsed = JSON.parse(cart);
    const total = parsed.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    sourceData = {
      items: parsed,
      totalPrice: total,
      tax: total * 0.1,
      totalWithTax: total * 1.1,
    };
  } else {
    sourceData = {
      items: [],
      totalPrice: 0,
      tax: 0,
      totalWithTax: 0,
    };
  }

  const [selectedMethod, setSelectedMethod] = useState("");
  const [warning, setWarning] = useState("");

  // Ambil metode dari localStorage jika ada (saat halaman di-reload)
  useEffect(() => {
    const storedMethod = localStorage.getItem("paymentMethod");
    if (storedMethod) {
      setSelectedMethod(storedMethod);
    }
  }, []);

  const handlePaymentMethod = (methodName) => {
    if (selectedMethod === methodName) {
      setSelectedMethod("");
      localStorage.removeItem("paymentMethod");
    } else {
      setSelectedMethod(methodName);
      localStorage.setItem("paymentMethod", methodName);
    }
  };

  const handlePayNow = () => {
    if (!selectedMethod) {
      setWarning("Choose Payment Method First");
      return;
    }

    const paymentData = {
      items: sourceData.items,
      totalPrice: sourceData.totalPrice,
      tax: sourceData.tax,
      totalWithTax: sourceData.totalWithTax,
      paymentMethod: selectedMethod,
      rating: sourceData.rating.rate,
      paymentDate: new Date().toISOString(),
    };

    localStorage.setItem("paymentData", JSON.stringify(paymentData));
    setWarning("");
    navigate("/payment-success");

    console.log("Checkout Data:", checkout);
    console.log("Parsed Data:", JSON.parse(checkout));
    console.log("Source Data:", sourceData);
  };

  JSON.parse(localStorage.getItem("checkoutData"));
  console.log(sourceData);

  const navigate = useNavigate();

  const today = new Date();
  const futureDate = new Date(today);

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  futureDate.setDate(today.getDate() + 2);

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "Mei",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const futureDay = dayNames[futureDate.getDay()];
  const futureDateNum = futureDate.getDate();
  const futureMonth = monthNames[futureDate.getMonth()];

  return (
    <>
      <section className="w-full min-h-[100dvh] h-full lg:px-16 lg:py-6 sm:p-10 p-6 ">
        {/* kontent atas dan judul */}
        <div className="flex items-center md:gap-6 gap-4">
          <img
            className="w-6 h-6 object-contain hover:opacity-60 transition-all duration-300 ease-in-out cursor-pointer"
            src={Back}
            alt="Back"
            onClick={() => navigate("/Home")}
          />
          <h1 className="text-brown-300 text-2xl font-bold font-montserrat">
            Payment
          </h1>
        </div>

        {/* konten utama */}
        {sourceData.items.length === 0 ? (
          <p> Tidak Ada item untuk Dibayar</p>
        ) : (
          <>
            <div className="flex lg:flex-row flex-col max-w-full min-h-full gap-10 mt-8 lg:translate-x-0  md:translate-x-[8%] translate-x-0  ">
              {/* konten kiri */}
              <div className="flex flex-col space-y-10 lg:w-3/5 w-full h-full">
                <div className="bg-white shadow-2xl lg:max-w-full md:max-w-[80%] h-[400px] rounded-2xl px-8 py-10 justify-center overflow-hidden ">
                  <div className="w-full h-full flex flex-col gap-10  overflow-y-scroll scrollbar-hide">
                    {sourceData.items.map((item, index) => (
                      <div key={index}>
                        <div className="flex ">
                          <div className="md:w-[150px] md:h-[130px] w-[120px] h-[110px]  flex flex-shrink-0 items-center justify-center">
                            <img
                              className="h-full w-full object-contain"
                              src={item.image}
                              alt={item.title}
                            />
                          </div>
                          <div className="flex flex-col w-full">
                            <div className="flex w-full h-6 justify-between">
                              <h1 className="font-montserrat font-semibold w-[80%] md:text-xl line-clamp-1 text-md ">
                                {item.title}
                              </h1>
                              <div className="flex gap-1">
                                <img className="w-6 h-6" src={Star} alt="" />
                                <h2 className="font-montserrat">
                                  {item.rating.rate}
                                </h2>
                              </div>
                            </div>
                            <h3 className="text-xs text-slate-600 -mt-1">
                              {item.category}
                            </h3>
                            <h6 className="font-montserrat text-xs">
                              Size:{" "}
                              <span className="font-semibold">
                                {" "}
                                {item.size}
                              </span>
                            </h6>
                            <h1>{item.quantity} Pcs</h1>
                            <h1 className="font-montserrat font-bold">
                              ${item.price}/Pcs
                            </h1>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full h-[auto] flex flex-col justify-center items-center border-brown-100 border-4 lg:max-w-full md:max-w-[80%] rounded-2xl px-8 py-4">
                  <h1 className="text-black font-montserrat font-bold text-center text-2xl">
                    Estimate Delivery
                  </h1>
                  <div className="flex md:flex-row flex-col gap-6 justify-center items-center mt-4 px-4">
                    <div className="h-15 w-auto px-10  py-2 bg-brown-300 flex justify-center items-center rounded-2xl">
                      <h1 className="text-white font-semibold font-montserrat text-lg">
                        {futureDay}
                      </h1>
                    </div>
                    <div className="h-15 w-auto px-10 py-2 bg-brown-300 flex justify-center items-center  rounded-2xl">
                      <h1 className="text-white font-semibold font-montserrat text-lg">
                        {futureDateNum} {futureMonth}
                      </h1>
                    </div>
                    <div className="h-15 w-auto px-10 py-2 bg-brown-300 flex justify-center items-center  rounded-2xl">
                      <h1 className="text-white font-semibold font-montserrat text-lg">
                        {hours} . {minutes}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* konten kanan */}
              <div className="lg:w-2/5 w-full">
                <div className="w-full min-h-[500px] h-auto border-4 border-brown-300 lg:max-w-full md:max-w-[80%] rounded-3xl px-8 py-4">
                  <div className="md:ml-4 lg:ml-0 mt-5 w-full max-h-[400px] px-8 py-4  sticky top-6 space-y-4">
                    <div className="border-b-[2px] border-black pb-2  ">
                      <h1 className="text-2xl font-semibold font-montserrat ">
                        Total Purchase
                      </h1>
                    </div>
                    <div className="w-full flex justify-between border-b-[2px] pb-2 border-black">
                      <h2 className="text-lg font-montserrat">Subtotal</h2>
                      <h2 className="text-md font-semibold flex self-center font-montserrat">
                        $ {sourceData.totalPrice}
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
                          $ {sourceData.tax}
                        </h2>
                      </div>
                    </div>
                    <div className=" flex w-full justify-between ">
                      <h1 className="text-2xl font-medium font-montserrat ">
                        Total{" "}
                      </h1>
                      <h1 className="flex self-center font-montserrat font-semibold">
                        $ {sourceData.totalWithTax}
                      </h1>
                    </div>
                    <div className="flex flex-wrap w-full gap-6 md:justify-center justify-between items-center mt-10">
                      <PaymentMethod
                        isSelected={selectedMethod === "Paypal"}
                        onClick={() => handlePaymentMethod("Paypal")}
                        Logo={Paypal}
                      />

                      <PaymentMethod
                        isSelected={selectedMethod === "Visa"}
                        onClick={() => handlePaymentMethod("Visa")}
                        Logo={Visa}
                      />
                      <PaymentMethod
                        isSelected={selectedMethod === "visa"}
                        onClick={() => handlePaymentMethod("visa")}
                        Logo={Visa}
                      />
                      <PaymentMethod
                        onClick={() => handlePaymentMethod("QRIS")}
                        isSelected={selectedMethod === "QRIS"}
                      />
                    </div>
                  </div>
                </div>
                {warning && (
                  <p className="text-red-500 font-medium font-montserrat -mb-3 ">
                    {warning}
                  </p>
                )}
                <button
                  onClick={handlePayNow}
                  className="w-full h-auto  px-8 py-3 bg-brown-300 mt-6 rounded-full lg:max-w-full md:max-w-[80%] text-white font-montserrat text-xl font-bold hover:bg-amber-700 transition-all duration-300 ease-in-out"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Payment;
