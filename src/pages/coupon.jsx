import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import CouponTicket from "../Component/UI-Component/couponComponent";


const CouponPage = () => {
  const navigate = useNavigate();

const couponData = [
  {
    code: "WELCOME50",
    description: "Get 50% off on your first purchase!",
    expiry: "Valid until May 31, 2025",
    disc: 50,
    type: "percentage"
  },
  {
    code: "FREESHIP100",
    description: "Free shipping on orders over $100",
    expiry: "Valid until June 15, 2025",
    disc: 100,
    type: "flat"
  },
  {
    code: "CASHBACK100",
    description: "Free Cashback $100",
    expiry: "Valid until June 20, 2025",
    disc: 100,
    type: "flat"
  },
  {
    code: "FLASH20",
    description: "Extra 20% off during flash sale",
    expiry: "Valid for today only",
    disc: 20,
     type: "percentage"
  },
  {
    code: "CASHBACK30",
    description: "Get 30% cashback on payments via e-wallet",
    expiry: "Valid until May 30, 2025",
     disc: 30,
      type: "percentage"
  },
  {
    code: "SAVE10",
    description: "Save $10 with no minimum purchase",
    expiry: "Valid until May 25, 2025",
    disc: 10,
    type: "flat"
  },
];

useEffect(() => {
  localStorage.setItem("coupon", JSON.stringify(couponData));
}, []);



  return (
    <>
      <section className="min-h-[100dvh] w-full h-auto ">
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
                Coupon
              </h1>
            </div>
          </div>
        </header>

        <div className="lg:px-16 lg:py-6 sm:p-10 p-6">
          <div>
            <h1 className="text-2xl font-semibold font-montserrat">
              My Coupon <span>({couponData.length})</span>
            </h1>
            <h1>{}</h1>
          </div>
          <div className="flex gap-4 gap-y-8 mt-8 flex-wrap">
            {couponData.map((couponData, index) => (
              <div key={index} className="flex-1 shrink-0">
                <CouponTicket
                  code={couponData.code}
                  description={couponData.description}
                  expiry={couponData.expiry}
                  disc={couponData.disc}
                  type={couponData.type}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CouponPage;
