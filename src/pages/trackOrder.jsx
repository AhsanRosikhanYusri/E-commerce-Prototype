import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ProgressSteps from "../Component/UI-Component/ProgresStep";

const TrackOrder = () => {
  const [payItem, setPayItem] = useState([]);
  const [currentStep, setCurrentStep] = useState(1)
  const navigate = useNavigate();

  useEffect(() => {
    const raw = localStorage.getItem("paymentData");

    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);

      if (Array.isArray(parsed)) {
        const sanitized = parsed.map((entry) => ({
          items: Array.isArray(entry.items) ? entry.items : [],
          totalWithTax:
            typeof entry.totalWithTax === "number"
              ? entry.totalWithTax
              : Number(entry.totalWithTax) || 0,
          paymentDate: entry.paymentDate || "",
          paymentMethod: entry.paymentMethod || "",
          totalFinal:
            typeof entry.totalFinal === "number"
              ? entry.totalFinal
              : Number(entry.totalFinal) || 0,
          firstName: entry.firstName || "",
          lastName: entry.lastName || "",
          country: entry.country || "",
          city: entry.city || "",
          address: entry.address || "",
        }));

        setPayItem(sanitized);
      }
    } catch (err) {
      console.error("Error parsing paymentData:", err);
    }
  }, []);

  const renderDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;
  };

  const getStepStatus = (step) => {
    if (step < 2) {
      return { label: "Pending", className: "text-amber-700" };
    }

    if (step <= 3) {
      return { label: "Process", className: "text-black" };
    }

    if (step > 3) {
      return { label: "Success", className: "text-lime-600" };
    }

    return { label: "Unknown", className: "text-gray-500" };
  };

  

const totalSteps = 4;

const delayHome = () => {
  let step = 1;

  const intervalId = setInterval(() => {
    step += 1;
    setCurrentStep(step);

    if (step >= totalSteps) {
      clearInterval(intervalId);

      setTimeout(() => {
        navigate("/home");
      }, 5000);
    }
  }, 4000);
};


  return (
    <>
      <section className="w-full min-h-[100dvh] h-auto lg:px-16 lg:py-6 sm:p-10 p-6 relative">
        <div className="w-full flex flex-col justify-center items-center mt-4">
          <div className="relative inline-block mb-3">
            <div className="w-24 h-24 bg-gradient-to-r from-brown-300 to-amber-800 rounded-full flex items-center justify-center shadow-lg shadow-brown-300/20 animate-pulse">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-brown-300 to-brown-100 rounded-full opacity-60 animate-ping"></div>
          </div>
          <h1 className="text-xl font-bold font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-brown-300 to-amber-800">
            Payment Success
          </h1>
        </div>

        <div className="flex md:flex-row flex-col md:gap-0 gap-2 justify-between items-center w-full mt-6 border-b-[2px] border-brown-300 h-auto py-3 px-6">
          <h1 className="font-montserrat text-brown-300 font-bold text-xl">
            Order Status :{" "}
            <span className={`${getStepStatus(currentStep).className}`}>
              {getStepStatus(currentStep).label}
            </span>
          </h1>
          <h1 className="font-poppins">
            <span className="font-medium text-brown-300 mr-1">Today:</span>
            {renderDate()}
          </h1>
        </div>

        {/* Progress Steps */}
        <div className=" mt-6 flex w-full mb-5">
          <ProgressSteps currentStep={currentStep} />
        </div>

        {/* addres */}
       <div className="w-full h-auto px-6 py-4  bg-gradient-to-r from-brown-300 to-amber-800 rounded-lg shadow-md mb-10 ">
      {payItem.length > 0 ? (
        (() => {
          const lastOrder = payItem[payItem.length - 1];
          const { firstName, lastName, country, city, address } = lastOrder;

          return (
            <div className="space-y-6 font-montserrat">
              {/* Name, Country, City in one row */}
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="bg-white px-4 py-3 rounded-lg shadow-md flex-1">
                  <h3 className="text-sm font-semibold text-center text-brown-300 mb-1">Name</h3>
                  <p className="font-medium text-center text-gray-700">{firstName} {lastName}</p>
                </div>
                
                <div className="bg-white px-4 py-3 rounded-lg shadow-md flex-1">
                  <h3 className="text-sm font-semibold text-center text-brown-300 mb-1">Country</h3>
                  <p className="font-medium text-center text-gray-700">{country}</p>
                </div>
                
                <div className="bg-white px-4 py-3 rounded-lg shadow-md flex-1">
                  <h3 className="text-sm font-semibold text-center text-brown-300 mb-1">City</h3>
                  <p className="font-medium text-center text-gray-700">{city}</p>
                </div>
              </div>

              {/* Address Section - Bigger space for long text */}
              <div className="bg-white px-6 py-5 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-center text-brown-300 mb-3">Address</h2>
                <div className="min-h-[80px] bg-gray-50 px-4 py-4 rounded-md">
                  <p className="text-base font-medium text-center text-gray-800 leading-relaxed break-words">
                    {address}
                  </p>
                </div>
              </div>
            </div>
          );
        })()
      ) : (
        <div className="text-center py-8">
          <div className="text-gray-400 mb-2">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-gray-500 text-base font-medium">No address data found</h3>
          <p className="text-gray-400 text-sm mt-1">Please add shipping information to continue</p>
        </div>
      )}
    </div>

        {/* Order Items */}
        <div className="mt-8 flex flex-col gap-8">
          {payItem.length > 0 ? (
            (() => {
              const lastOrder = payItem[payItem.length - 1];

              if (!lastOrder || !lastOrder.items.length) {
                return <h1 className="px-6">Item not found</h1>;
              }

              return (
                <div className="rounded-[40px] shadow-lg">
                  <div className="w-full md:flex md:flex-row flex-col h-auto py-6 items-center md:justify-between justify-start bg-brown-300 p-8 text-white rounded-t-lg">
                    <div className="flex flex-col gap-4">
                      <h1 className="font-montserrat text-white md:text-[.9rem] flex md:self-center self-start">
                        Date: {new Date(lastOrder.paymentDate).toLocaleString()}
                      </h1>
                    </div>
                    <div className="flex gap-4">
                      <h1 className="font-bold font-inter flex self-start">
                        Total:{" "}
                        <span className="font-normal ml-3">
                          ${lastOrder.totalFinal.toFixed(2)}
                        </span>
                      </h1>
                    </div>
                  </div>

                  <h1 className="font-medium px-8 my-4">
                    Payment Method:{" "}
                    <span className="text-red-500">
                      {lastOrder.paymentMethod}
                    </span>
                  </h1>

                  <div className="flex flex-col gap-8 p-8">
                    {lastOrder.items.map((item, index) => (
                      <div className="w-full" key={index}>
                        <div className="flex gap-4 md:flex-row flex-col">
                          <div className="w-30 h-30 bg-brown-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <img
                              className="w-full h-full object-center object-contain"
                              src={item.image}
                              alt={item.title}
                            />
                          </div>
                          <div className="px-2 w-full">
                            <h1 className="font-bold text-lg font-montserrat text-wrap md:w-full w-[80%] line-clamp-2">
                              {item.title}
                            </h1>
                            <p className="text-xs text-black/70">
                              {item.category}
                            </p>
                            <h4 className="font-poppins text-[.9rem]">
                              Size: <span className="ml-2">{item.size}</span>
                            </h4>
                            <div className="flex md:flex-row flex-col md:gap-0 gap-2 justify-between w-70 mt-6">
                              <h1 className="font-poppins font-semibold text-start">
                                Qty:{" "}
                                <span className="ml-2 font-normal">
                                  {item.quantity} Pcs
                                </span>
                              </h1>
                              <h1 className="font-poppins font-semibold text-start">
                                Price/Pcs:{" "}
                                <span className="ml-2 font-normal">
                                  ${item.price}
                                </span>
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()
          ) : (
            <h1 className="px-6">History is Empty</h1>
          )}
        </div>

        <div 
        onClick={delayHome}
        className="w-auto h-auto px-4 py-3 bg-white border-4 cursor-pointer border-brown-300 text-black hover:bg-brown-300 hover:text-white transition-all duration-300 ease-out fixed right-4 bottom-4 rounded-full">
          <h1 className="font-bold font-inter">Finish It</h1>
        </div>
      </section>
    </>
  );
};

export default TrackOrder;
