import Profile1 from "../../../public/asset/Image/Profile1.jpg";

const CardTesti = ({
  name = "Jhon dae",
  Profile = Profile1,
  Testi = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do ei Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, ",
  Jabatan = "Pejabat Konoha"
}) => {
  return (
    <>
      <div className="w-[300px] h-[450px] bg-white rounded-3xl px-4 relative border-2 border-black/20">
        {/* Konten biru */}
        <div className="h-[300px] flex justify-center items-center">
          <div className="max-h-[280px] overflow-y-auto ">
            <p className="text-center font-poppins text-xs max-h-full overflow-auto px-2 m-0">
              {Testi}
            </p>
          </div>
        </div>

        {/* Footer coklat */}
        <div className="bg-brown-300 rounded-b-3xl absolute w-full left-0 bottom-0 h-[150px] flex flex-col  justify-center items-center">
          <img
            className="rounded-full w-[80px] absolute h-[80px] object-cover -top-10 border-[6px] border-brown-300"
            src={Profile}
            alt=""
          />
          <h2 className="text-center text-xl text-white font-inter font-bold">
            {name}
          </h2>
          <p className="text-white font-extralight text-xs font-poppins">{Jabatan}</p>
        </div>
      </div>
    </>
  );
};

export default CardTesti;
