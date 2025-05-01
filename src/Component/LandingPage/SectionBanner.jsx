import Banner from "../../../public/asset/Image/Banner.webp";
import Banner2 from "../../../public/asset/Image/Banner2.jpg";
import Banner3 from "../../../public/asset/Image/Banner3.jpg";

import { useState, useEffect } from "react";

import Category from "../UI-Component/kategori-card";
import menClothes from "../../../public/asset/Image/menCategory.avif"
import womenClothes from "../../../public/asset/Image/Women.webp"
import jewelery from "../../../public/asset/Image/jewelery.jpg"


export default function BannerSection() {
  const banner = [Banner, Banner2, Banner3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banner.length);
        setIsFading(false);
      }, 400); 
    }, 5000);
    
    return () => clearInterval(interval);
  }, [banner.length]);
  
  return (
    <>
      <section  className="lg:px-16 md:px-10 px-6 w-full h-[100dvh] lg:pt-0 md:pt-5   flex flex-col">
        <div className="w-full h-[30vh] lg:h-[60vh] relative">
          <img
            src={banner[currentIndex]}
            className={`w-full h-full object-cover rounded-xl sm:mt-0 mt-4 transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
            alt="Banner"
          />
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-10 lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:space-y-0 
                        md:space-y-7 space-y-5 justify-center items-center lg:mt-0 mt-10 ">
            <div className=" lg:translate-x-0 translate-x-0 md:translate-x-[10dvh]">
            <Category 
                image={menClothes} category="Men Clothes"
            />
            </div>

            <div>
            <Category 
                image={womenClothes} category="Women Clothes"
            />
            </div>

            <div className="lg:-translate-x-0 -translate-x-0 md:-translate-x-[10dvh]">
            <Category 
                image={jewelery} category="Jewelery"  
            />
            </div>
        </div>

        
      </section>
    </>
  );
}
