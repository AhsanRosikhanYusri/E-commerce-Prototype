
const SizeSelect = ({
    label = "Tes" , 
    isActive = false, 
    onClick = () => {}
 }) => {

   

    return (
        <>
        <button
        onClick={onClick}
        className={`px-4 py-2 border-none rounded-xl hover:bg-amber-700 cursor-pointer text-white text-[12px] font-bold font-montserrat transition-colors duration-300 ease-in-out
                ${isActive ? "bg-amber-700 scale-110" : "bg-brown-300 scale-100"}
            `}
        >
            {label}
        </button>
        </>
    )
}

export default SizeSelect