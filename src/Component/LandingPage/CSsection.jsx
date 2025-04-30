export default function CSsection () {
    return (
      <section className="min-h-[100dvh] w-full lg:px-16 md:px-10 px-6 py-10 flex flex-col">
        
        {/* Heading */}
        <div className="flex flex-col justify-center items-center space-y-2">
          <h1 className="font-light text-brown-300 md:text-4xl text-3xl font-montserrat text-center">
            Ada kendala?
          </h1>
          <h3 className="text-center font-inter text-xl">
            Hubungi kami, Kami siap melayani anda
          </h3>
        </div>
  
        <div className="flex-grow flex flex-col-reverse lg:grid lg:grid-cols-5 w-full mt-15">
          
          <div className="w-full lg:col-span-3">
          </div>
  
          <div className="w-full h-full bg-brown-300 p-4 col-span-2 rounded-4xl px-12 py-6">
                <h1 className="text-white text-xl font-semibold font-poppins text-center">Masih ada kendala yang lain? Hubungi Customer Service Kami</h1>
          </div>
                
        </div>

      </section>

    );
  }


  