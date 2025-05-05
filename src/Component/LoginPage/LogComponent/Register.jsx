export default function Register() {
  return (
    <>
    <div className="flex flex-col w-full space-y-6 md:translate-x-15 translate-x-0">
      <h1 className="font-extrabold font-montserrat md:text-3xl text-2xl">
        Daftar
        <br />
        <span className="text-brown-300">Akun baru</span> Sekarang
      </h1>

      {/* container input */}

      {/* input Nama */}
        <div className="flex flex-col gap-4 max-w-full md:max-w-[80%] ">
      <div className="relative">
        <input
          type="text"
          id="name"
          className="peer px-4 pt-6 pb-2 w-full text-sm border-none bg-brown-100 rounded-2xl placeholder-transparent focus:outline-none font-poppins "
          placeholder="Nama Lengkap"
        />
        <label
          htmlFor="name"
          className="absolute left-4 top-2 text-xs text-white font-montserrat transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
        >
          Nama Lengkap
        </label>
      </div>

         <div className="flex md:flex-row flex-col gap-4 ">   
        {/* input nomor */}
        <div className="relative md:w-[50%]">
        <input
          type="number"
          id="name number"
          className="peer px-4 pt-6 pb-2 w-full text-sm border-none bg-brown-100 rounded-2xl placeholder-transparent focus:outline-none font-poppins "
          placeholder="Nama Lengkap"
        />
        <label
          htmlFor="number"
          className="absolute left-4 top-2 text-xs text-white font-montserrat transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
        >
          Nomor Handphone
        </label>
      </div>
        {/* input nama akun */}

        <div className="relative md:w-[50%]">
        <input
          type="text"
          id="username"
          className="peer px-4 pt-6 pb-2 w-full text-sm border-none bg-brown-100 rounded-2xl placeholder-transparent focus:outline-none font-poppins "
          placeholder="Nama Lengkap"
        />
        <label
          htmlFor="Username"
          className="absolute left-4 top-2 text-xs text-white font-montserrat transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
        >
          Nama Akun
        </label>
      </div>
      </div>

      {/* email */}
      <div className="relative">
        <input
          type="text"
          id="Email"
          className="peer px-4 pt-6 pb-2 w-full text-sm border-none bg-brown-100 rounded-2xl placeholder-transparent focus:outline-none font-poppins "
          placeholder="Nama Lengkap"
        />
        <label
          htmlFor="Email"
          className="absolute left-4 top-2 text-xs text-white font-montserrat transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
        >
          Email
        </label>
      </div>

      {/* kata sandi */}
      <div className="relative">
        <input
          type="text"
          id="Password"
          className="peer px-4 pt-6 pb-2 w-full text-sm border-none bg-brown-100 rounded-2xl placeholder-transparent focus:outline-none font-poppins "
          placeholder="Nama Lengkap"
        />
        <label
          htmlFor="Password"
          className="absolute left-4 top-2 text-xs text-white font-montserrat transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
        >
          Kata sandi
        </label>
      </div>
      <p className="text-right font-montserrat -mt-2 ">Sudah punya akun? <span className="text-brown-300 font-semibold">Masuk</span></p>

        <button className="bg-brown-300 hover:bg-amber-700 -mt-1 h-12 rounded-full text-xl font-montserrat font-bold text-white transition-colors duration-300 ease-in-out">Daftar</button>

      </div>
      </div>
    </>
  );
}
