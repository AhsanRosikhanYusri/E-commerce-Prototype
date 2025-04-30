const Category = ({ image, category }) => {
    return (
      <div className="lg:w-[300px] lg:h-[200px] md:w-[40dvh] w-[32dvh] h-[16vh] md:h-[18dvh] md:rounded-4xl rounded-2xl  overflow-hidden shadow-lg relative group">
        <img className="w-full h-full object-cover object-center" src={image} alt={category} />
  
        {/* Layer untuk background bergerak */}
        <div className="absolute inset-0 bg-[#ad8572]/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
          <h1 className="text-white font-montserrat md:text-2xl text-md font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {category}
          </h1>
        </div>
      </div>
    );
  };
  
  export default Category;
  