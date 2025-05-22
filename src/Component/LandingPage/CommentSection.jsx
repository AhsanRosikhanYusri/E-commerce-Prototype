export default function CommentSection() {
  return (
    <>
      <section id="Kontak" className=" w-full lg:min-h-[100dvh] min-h-[100dvh] md:min-h-[70dvh] lg:px-16 md:px-10 px-4 py-10 mb-10  flex flex-col justify-center items-center space-y-10">
        <div>
          <h2 className="md:text-3xl text-2xl font-montserrat text-center text-brown-300">
            Contact us
          </h2>
          <h1 className="md:text-4xl text-3xl font-montserrat text-center font-bold">
            Type your message here
          </h1>
        </div>

        <div className=" md:w-[600px] w-[90%] h-[500px] space-y-2 flex flex-col">
          <div className="flex md:flex-row flex-col gap-2">
            <input
              className="bg-amber-800 md:w-[50%] w-full rounded-2xl h-[50px] px-4 placeholder:text-white/70 text-white"
              placeholder="Input Name"
              type="text"
            />
            <input
              className="bg-amber-800 md:w-[50%] w-full rounded-2xl h-[50px] px-4 placeholder:text-white/70 text-white"
              placeholder="Input Email"
              type="text"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-2">
            <input
              className="bg-amber-800 md:w-[50%] w-full rounded-2xl h-[50px] px-4 placeholder:text-white/70 text-white"
              placeholder="Input Phone number"
              type="text"
            />
            <input
              className="bg-amber-800 md:w-[50%] w-full rounded-2xl h-[50px] px-4 placeholder:text-white/70 text-white"
              placeholder="Input subject"
              type="text"
            />
          </div>

          <div className="flex-grow">
            <textarea
              className="w-full h-full bg-amber-800 rounded-2xl px-4 py-2 placeholder:text-white/70 text-white resize-none"
              placeholder="Tuliskan pesan Anda..."
            ></textarea>
          </div>

          <button className="w-full h-[10%] rounded-full bg-brown-300 text-white font-bold text-xl  hover:bg-orange-700 transition-all duration-300 ease-in-out">Send</button>
        </div>

      </section>
    </>
  );
}
