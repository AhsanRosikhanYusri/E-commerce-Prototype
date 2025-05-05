export default function Login() {
  return (
    <>
      <div className="w-full md:max-w-[80%] flex flex-col space-y-6 justify-center ">
        <h1 className="font-montserrat font-extrabold text-3xl">
          Selamat
          <br />
          <span className="text-brown-300">Datang</span> Kembali
        </h1>

        {/* input email */}
        <div className="relative">
          <input
            type="text"
            id="email"
            className="peer px-4 pt-6 pb-2 w-full text-sm border-none bg-brown-100 rounded-2xl placeholder-transparent focus:outline-none font-poppins "
            placeholder="Nama Lengkap"
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-2 text-xs text-white font-montserrat transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
          >
            Email
          </label>
        </div>

        {/* input password */}

        <div className="relative">
          <input
            type="text"
            id="Kata sandi"
            className="peer px-4 pt-6 pb-2 w-full text-sm border-none bg-brown-100 rounded-2xl placeholder-transparent focus:outline-none font-poppins "
            placeholder="Nama Lengkap"
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-2 text-xs text-white font-montserrat transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
          >
            Kata Sandi
          </label>
        </div>

        <p className="text-right font-montserrat -mt-2 ">belum punya akun? <span className="text-brown-300 font-semibold">Daftar</span></p>

        <button className="bg-brown-300 hover:bg-amber-700 cursor-pointer transition-colors duration-300 ease-in-out -mt-1 h-12 rounded-full text-xl font-montserrat font-bold text-white">Masuk</button>

      </div>
    </>
  );
}
