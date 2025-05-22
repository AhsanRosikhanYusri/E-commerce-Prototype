import { TicketPercent } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const CouponTicket = ({
  code = "DISKON50",
  description = "Dapatkan diskon 50% untuk pembelian pertama Anda!",
  expiry = "Berlaku hingga 31 Mei 2025",
  disc = 50,
  type = "",
}) => {
  const handleUseCoupon = () => {
    const selectedCoupon = {
      code,
      disc,
      type,
    };

   

    const existingCoupons =
      JSON.parse(localStorage.getItem("selectedCoupons")) || [];

    const isCouponExist = existingCoupons.some(
      (coupon) => coupon.code === code
    );

    if (!isCouponExist) {
      existingCoupons.push(selectedCoupon);

      localStorage.setItem("selectedCoupons", JSON.stringify(existingCoupons));

      toast.success("Success use Coupon");
    } else {
      toast.info("Coupon already used");
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md border border-dashed border-brown-300 flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="bg-brown-300 text-white p-3 rounded-full">
            <TicketPercent size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brown-300 tracking-wide">
              {code}
            </h3>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-xs text-gray-400 mt-1 italic">{expiry}</p>
          </div>
        </div>

        <button
          onClick={handleUseCoupon}
          className="ml-4 px-4 py-2 text-sm bg-brown-300  text-white rounded-lg hover:bg-brown-100 transition-colors duration-200 ease-out"
        >
          Gunakan
        </button>
      </div>
    </div>
  );
};

export default CouponTicket;
