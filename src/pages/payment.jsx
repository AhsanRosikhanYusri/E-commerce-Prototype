import Back from "../../public/asset/Icon/Back.png";
import { useNavigate } from "react-router-dom";
import Star from "../../public/asset/Icon/Star.png";
import { useState, useEffect } from "react";
import Paypal from "../../public/asset/Image/PayPal.png";
import Visa from "../../public/asset/Image/Visa.png";
import Swal from "sweetalert2";
import SelectBox from "../Component/UI-Component/select";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("");
  const [warning, setWarning] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
  });

  // Calculate source data from localStorage
  const getSourceData = () => {
    const cart = localStorage.getItem("cart");
    const checkout = localStorage.getItem("checkoutData");

    if (checkout) {
      const parsed = JSON.parse(checkout);
      return {
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
      return {
        items: parsed,
        totalPrice: total,
        tax: total * 0.1,
        totalWithTax: total * 1.1,
      };
    }
    return {
      items: [],
      totalPrice: 0,
      tax: 0,
      totalWithTax: 0,
    };
  };

  const sourceData = getSourceData();

  // Get delivery date estimation
  const getDeliveryDate = () => {
    const today = new Date();
    const futureDate = new Date(today);
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
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return {
      day: dayNames[futureDate.getDay()],
      date: `${futureDate.getDate()} ${monthNames[futureDate.getMonth()]}`,
      time: `${new Date().getHours()}:${String(
        new Date().getMinutes()
      ).padStart(2, "0")}`,
    };
  };

  const deliveryDate = getDeliveryDate();

  useEffect(() => {
    // Load saved data from localStorage
    const storedMethod = localStorage.getItem("paymentMethod");
    const savedData = localStorage.getItem("addressFormData");
    if (storedMethod) setSelectedMethod(storedMethod);
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  const handlePaymentMethod = (methodName) => {
    const newMethod = selectedMethod === methodName ? "" : methodName;
    setSelectedMethod(newMethod);
    localStorage.setItem("paymentMethod", newMethod);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayNow = async () => {
    const errors = {};
    let hasError = false;

    // Validasi tiap field kosong
    for (const key in formData) {
      if (!formData[key].trim()) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is null`;
        hasError = true;
      }
    }

    if (!selectedMethod) {
      setWarning("Please select a payment method");
      return;
    } else {
      setWarning("");
    }

    if (hasError) {
      setFormErrors(errors);
      return;
    }

    localStorage.setItem("addressFormData", JSON.stringify(formData));

    const paymentData = {
      ...sourceData,
      ...formData,
      totalPrice: sourceData.totalPrice.toFixed(2),
      tax: sourceData.tax,
      totalWithTax: sourceData.totalWithTax,
      paymentMethod: selectedMethod,
      paymentDate: new Date().toISOString(),
      totalFinal: totalFinal
    };

    Swal.fire({
      title: "Payment Succses",
      icon: "success",
      draggable: true,
    });

    const existingHistory =
      JSON.parse(localStorage.getItem("paymentData")) || [];

    const updatedHistory = [...existingHistory, paymentData];

    localStorage.setItem("paymentData", JSON.stringify(updatedHistory));
    localStorage.removeItem("cart"); // kosongkan cart
    setFormErrors({}); // reset error
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Arahkan ke halaman home
    navigate("/Home");
  };

  // couponSelect

  const [selectedCoupon, setSelectedCoupon] = useState('');
  const [couponOptions, setCouponOptions] = useState([]);

   useEffect(() => {
  try {
    const raw = localStorage.getItem("selectedCoupons");
    const parsed = JSON.parse(raw);

       const couponData =  Array.isArray(parsed) ? parsed : [];

    const formatted = couponData.map((coupon) => ({
      value: coupon.code,
      label: `${coupon.code}`,
      ...coupon,
    }));

    setCouponOptions(formatted);
  } catch (error) {
    console.error("Error parsing coupon data from localStorage:", error);
    setCouponOptions([]);
  }
}, []);


  const getDiscount = (totalPrice, coupon) => {
  if (!coupon) return 0;

  if (coupon.type === "percentage") {
    return (totalPrice * coupon.disc) / 100;
  } else if (coupon.type === "flat") {
    return coupon.disc;
  }
  return 0;
};

const totalWithTax = sourceData.totalWithTax;
const selectedCouponData = couponOptions.find(coupon => coupon.value === selectedCoupon);
const discount = getDiscount(totalWithTax, selectedCouponData);

const totalFinal = sourceData.totalWithTax - discount

console.log("Selected coupon:", selectedCoupon);
console.log("Selected coupon data:", selectedCouponData);



  return (
    <section className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto p-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer hover:bg-brown-50 transition-all"
            onClick={() => navigate("/Home")}
          >
            <img src={Back} alt="Back" className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-bold text-brown-300 font-montserrat">
            Checkout
          </h1>
        </div>

        {sourceData.items.length === 0 ? (
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <p className="text-gray-600 text-lg">Your cart is empty</p>
            <button
              onClick={() => navigate("/Shop")}
              className="mt-4 px-6 py-2 bg-brown-300 text-white rounded-lg hover:bg-brown-400 transition-all"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="lg:w-3/5 space-y-6">
              {/* Items List */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-bold text-brown-300 mb-4 pb-2 border-b border-brown-100">
                  Order Items{" "}
                  <span className="text-sm font-normal text-gray-500">
                    ({sourceData.items.length})
                  </span>
                </h2>
                <div className="space-y-5 max-h-[350px] overflow-y-auto pr-2 scrollbar-hide">
                  {sourceData.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-5 pb-4 border-b border-brown-50 last:border-0"
                    >
                      <div className="w-24 h-24 bg-brown-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start max-w-[300px]">
                          <h3 className="font-semibold text-lg text-brown-400 truncate max-w-[70%]">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-1 bg-brown-50 px-2 py-1 rounded-md">
                            <img src={Star} alt="Rating" className="w-4 h-4" />
                            <span className="font-medium">
                              {item.rating?.rate}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-500 mb-2">
                          {item.category}
                        </p>

                        <div className="flex justify-between items-end">
                          <div className="text-sm">
                            <span className="inline-block bg-brown-50 px-2 py-1 rounded-md mr-2">
                              Size:{" "}
                              <span className="font-semibold">{item.size}</span>
                            </span>
                            <span className="inline-block bg-brown-50 px-2 py-1 rounded-md">
                              Qty:{" "}
                              <span className="font-semibold">
                                {item.quantity}
                              </span>
                            </span>
                          </div>
                          <p className="font-bold text-brown-300 text-lg">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Estimate */}
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brown-300">
                <h2 className="text-xl font-bold mb-4 text-brown-300">
                  Estimated Delivery
                </h2>
                <div className="flex flex-wrap gap-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brown-300 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Day</p>
                      <p className="font-semibold">{deliveryDate.day}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brown-300 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-semibold">{deliveryDate.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brown-300 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="font-semibold">{deliveryDate.time}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Form */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-bold mb-6 text-brown-300 pb-2 border-b border-brown-100">
                  Shipping Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-brown-400">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full p-3 border-2 rounded-lg outline-none ${
                        formErrors.firstName
                          ? "border-red-500"
                          : "border-brown-50 focus:border-brown-300"
                      }`}
                      placeholder="Enter your first name"
                    />
                    {formErrors.firstName && (
                      <p className="text-sm text-red-500">
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-brown-400">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full p-3 border-2 rounded-lg outline-none ${
                        formErrors.lastName
                          ? "border-red-500"
                          : "border-brown-50 focus:border-brown-300"
                      }`}
                      placeholder="Enter your last name"
                    />
                    {formErrors.lastName && (
                      <p className="text-sm text-red-500">
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-brown-400">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 border-2 rounded-lg outline-none ${
                        formErrors.email
                          ? "border-red-500"
                          : "border-brown-50 focus:border-brown-300"
                      }`}
                      placeholder="your@email.com"
                    />
                    {formErrors.email && (
                      <p className="text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-brown-400">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full p-3 border-2 rounded-lg outline-none ${
                        formErrors.phone
                          ? "border-red-500"
                          : "border-brown-50 focus:border-brown-300"
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {formErrors.phone && (
                      <p className="text-sm text-red-500">{formErrors.phone}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-brown-400">
                      Country
                    </label>
                    <input
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full p-3 border-2 rounded-lg outline-none ${
                        formErrors.country
                          ? "border-red-500"
                          : "border-brown-50 focus:border-brown-300"
                      }`}
                      placeholder="Enter your country"
                    />
                    {formErrors.country && (
                      <p className="text-sm text-red-500">
                        {formErrors.country}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-brown-400">
                      City
                    </label>
                    <input
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full p-3 border-2 rounded-lg outline-none ${
                        formErrors.city
                          ? "border-red-500"
                          : "border-brown-50 focus:border-brown-300"
                      }`}
                      placeholder="Enter your city"
                    />
                    {formErrors.city && (
                      <p className="text-sm text-red-500">{formErrors.city}</p>
                    )}
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-sm font-medium text-brown-400">
                      Address
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full p-3 border-2 rounded-lg outline-none ${
                        formErrors.address
                          ? "border-red-500"
                          : "border-brown-50 focus:border-brown-300"
                      }`}
                      rows="3"
                      placeholder="Enter your full address"
                    />
                    {formErrors.address && (
                      <p className="text-sm text-red-500">
                        {formErrors.address}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-2/5">
              <div className="sticky top-8 space-y-6">
                {/* Order Summary */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden divide-y divide-brown-50">
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-brown-300 mb-6">
                      Order Summary
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">
                          ${sourceData.totalPrice.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (10%)</span>
                        <span className="font-semibold">
                          ${sourceData.tax.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Coupon</span>
                        <span className="font-semibold text-red-500">-${discount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-semibold text-green-600">
                          FREE
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brown-50 p-6">
                    <div className="flex justify-between items-center text-xl">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-brown-300">
                        ${totalFinal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex -mt-4 gap-4 flex-col justify-center items-center w-full ">
                   {selectedCoupon && (
                    <p className=" w-full text-sm mb-4 text-green-500 ">
                      Kupon terpilih: {selectedCoupon}
                    </p>
                  )}
                  <SelectBox
                    id="coupon-select"
                    label="Pilih Kupon Diskon"
                    value={selectedCoupon}
                    onChange={(e) => setSelectedCoupon(e.target.value)}
                    options={couponOptions}
                  />
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold mb-5 text-brown-300 pb-2 border-b border-brown-100">
                    Payment Method
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className={`border-2 ${
                        selectedMethod === "Paypal"
                          ? "border-brown-300 bg-brown-50"
                          : "border-gray-200"
                      } rounded-xl p-4 cursor-pointer transition-all`}
                      onClick={() => handlePaymentMethod("Paypal")}
                    >
                      <div className="flex justify-center items-center h-12">
                        <img
                          src={Paypal}
                          alt="PayPal"
                          className="h-8 object-contain"
                        />
                      </div>
                      {selectedMethod === "Paypal" && (
                        <div className="flex justify-center mt-2">
                          <div className="w-4 h-4 bg-brown-300 rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div
                      className={`border-2 ${
                        selectedMethod === "Visa"
                          ? "border-brown-300 bg-brown-50"
                          : "border-gray-200"
                      } rounded-xl p-4 cursor-pointer transition-all`}
                      onClick={() => handlePaymentMethod("Visa")}
                    >
                      <div className="flex justify-center items-center h-12">
                        <img
                          src={Visa}
                          alt="Visa"
                          className="h-8 object-contain"
                        />
                      </div>
                      {selectedMethod === "Visa" && (
                        <div className="flex justify-center mt-2">
                          <div className="w-4 h-4 bg-brown-300 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Warning and Payment Button */}
                {warning && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-600">{warning}</p>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={handlePayNow}
                  className="w-full py-4 bg-brown-300 hover:bg-brown-400 text-white text-xl font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Pay Now
                </button>

                <p className="text-center text-gray-500 text-sm">
                  By completing this purchase, you agree to our
                  <a href="#" className="text-brown-300 hover:underline">
                    {" "}
                    Terms of Service
                  </a>{" "}
                  and
                  <a href="#" className="text-brown-300 hover:underline">
                    {" "}
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Payment;
