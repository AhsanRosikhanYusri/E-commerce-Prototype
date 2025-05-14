import QRIS from "../../../public/asset/Image/QRIS.png"

const PaymentMethod = ({
    Logo = QRIS,
    onClick = () => {},
    isSelected = false
}) => {

    return (
        <>
        <div 
        onClick={onClick}
        className={`border-brown-100 hover:bg-brown-100  cursor-pointer
        transition-all duration-300 ease-out transform border-2 rounded-xl px-3 py-1 ${isSelected ? "bg-brown-100 scale-110" : "bg-none"}`}>
            <img className="md:w-24 h-auto w-20 object-cover object-center"  src={Logo} alt="" />
        </div>
        </>
    )
}

export default PaymentMethod