import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsRegis }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (!email || !password) {
      setError("Semua kolom wajib diisi!");
      return;
    }

    navigate("/Home");
    // Lanjutkan proses login di sini
    setError(""); // reset error jika valid
    console.log("Login berhasil:", { email, password });
  }

  return (
    <>
      <div className="w-full md:max-w-[80%] flex flex-col space-y-6 justify-center">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer px-4 pt-6 pb-2 w-full text-sm border-none bg-brown-100 rounded-2xl placeholder-transparent focus:outline-none font-poppins"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-2 text-xs text-white font-montserrat transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
          >
            Email
          </label>
        </div>

        {/* input password */}
        <div className="relative">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer px-4 pt-6 pb-2 w-full text-sm border-none bg-brown-100 rounded-2xl placeholder-transparent focus:outline-none font-poppins"
            placeholder="Kata Sandi"
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-2 text-xs text-white font-montserrat transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
          >
            Kata Sandi
          </label>
        </div>

        {error && (
          <p className="text-red-500 font-montserrat text-sm -mt-4">{error}</p>
        )}

        <p className="text-right font-montserrat -mt-2">
          Belum punya akun?{" "}
          <span
            onClick={() => setIsRegis(true)}
            className="text-brown-300 font-semibold cursor-pointer"
          >
            Daftar
          </span>
        </p>

        <button
          onClick={handleLogin}
          className="bg-brown-300 hover:bg-amber-700 cursor-pointer transition-colors duration-300 ease-in-out -mt-1 h-12 rounded-full text-xl font-montserrat font-bold text-white"
        >
          Masuk
        </button>
      </div>
    </>
  );
}
