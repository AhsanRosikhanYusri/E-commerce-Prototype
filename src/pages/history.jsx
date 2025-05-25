import { useNavigate } from "react-router-dom"
import { ArrowLeft, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";



const HistoryOrder = () => {
  const [payItem, setPayItem] = useState([]);
  const navigate = useNavigate()

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
        }));

        sanitized.sort(
          (a, b) => new Date(b.paymentDate) - new Date(a.paymentDate)
        );

        setPayItem(sanitized);
      }
    } catch (err) {
      console.error("Error parsing paymentData:", err);
    }
  }, []);


const deleteHistory = (date) => {
  const raw = localStorage.getItem("paymentData");
  if (!raw) return;

  const parsed = JSON.parse(raw);
  const updated = parsed.filter((entry) => entry.paymentDate !== date);

  localStorage.setItem("paymentData", JSON.stringify(updated));
  setPayItem(updated); 
};



    return (
        <>
         <section className="min-h-[100dvh] w-full h-auto bg-slate-50/50 ">
        <header className="bg-brown-300 shadow">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4 flex items-center gap-4">
              <button
                onClick={() => navigate("/profile")}
                className="p-2 rounded-full hover:bg-brown-100 transition-colors"
              >
                <ArrowLeft size={20} color="white" />
              </button>
              <h1 className="text-xl font-semibold font-montserrat text-white">
                Order History
              </h1>
            </div>
          </div>
        </header>
        <div className="lg:px-16 lg:py-6 sm:p-10 p-6">
            <h1 className="text-[1.3rem] mt-6 font-bold font-inter">My Order History</h1>
        
        <div className="mt-8 flex flex-col gap-8 ">
           {payItem.length > 0 ? (
                payItem.map((order,index)=> (
                    <>
                    <div className="rounded-[40px] shadow-lg  ">
                    <div key={index} className="w-full md:flex md:flex-row flex-col h-auto py-6 items-center md:justify-between justify-start bg-brown-300 p-8 text-white rounded-t-lg" >
                        <div className="flex flex-col gap-4">
                        <h1 className="font-montserrat text-white md:text-[.9rem] flex md:self-center self-start"> Date: {new Date(order.paymentDate).toLocaleString()}</h1>
                        </div>
                        <div className="flex gap-4">
                        <h1 className="font-bold font-inter flex self-start">Total : <span className="font-normal ml-3"> ${order.totalFinal.toFixed(2)}</span> </h1>
                          <Trash2 
                          key={order.paymentDate}
                          onClick={() => deleteHistory(order.paymentDate  )}
                          color="white" className="hover:opacity-70 transition-all duration-300 ease-out"/>
                        </div>
                    </div>
                     <h1 className="font-medium px-8 my-4">Payment Method : <span className="text-red-500">{order.paymentMethod}</span></h1>
                    <div className="flex flex-col gap-8 p-8 ">
                        {order.items.map((item,i) => (

                            <div key={i} className="w-full">
                              <div className="flex gap-4 md:flex-row flex-col  "> 
                                <div className="w-30 h-30 bg-brown-50 rounded-lg flex items-center justify-center flex-shrink-0 ">
                                    <img className="w-full h-full object-center object-contain" src={item.image} alt="" />
                                </div>
                                <div className="px-2  w-full">
                                      <h1 className="font-bold text-lg font-montserrat text-wrap md:w-full w-[80%] line-clamp-2 ">{item.title}</h1>
                                      <p className="text-xs text-black/70">{item.category}</p>
                                      <h4 className="font-poppins text-[.9rem]">Size : <span className="ml-2">{item.size}</span> </h4>
                                      <div className="flex md:flex-row flex-col md:gap-0 gap-2 justify-between w-70 mt-6 ">
                                        <h1 className="font-poppins font-semibold text-start">Qty : <span className="ml-2 font-normal"> {item.quantity} Pcs</span></h1>
                                        <h1 className="font-poppins font-semibold text-start">Price/Pcs : <span className="ml-2 font-normal">${item.price} </span> </h1>
                                      </div>
                                    </div>
                              </div>
                            </div>

                        ))}
                    </div>
                    </div>
                    </>
                    
           ))    
           ) : (
                <h1> History is Empty</h1>
           )
        }
        </div>
        </div>
        </section>
        </>
    )
}

export default HistoryOrder