const FormCS = ({
    Question = "Apakah ada garansi pada setiap Produk jika ada kerusakan?"
}) => {
    return (
        <button className="group border-b-4 border-brown-300 w-[95%] py-2 md:text-lg text-md text-left flex items-center justify-between transition-all duration-300 ease-in-out ">
            <span className="transition-transform duration-300 ease-in-out group-hover:scale-[1.03]">
                {Question}
            </span>
            <span className="font-bold transition-transform duration-300 ease-in-out group-hover:translate-x-4 px-4">
                {'>'}
            </span>
        </button>
    );
};

export default FormCS;
