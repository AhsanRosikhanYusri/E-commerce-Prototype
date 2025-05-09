import { useState, useRef, useEffect } from 'react';
import CardTesti from "../UI-Component/cardTesti";

import Profile2 from "../../../public/asset/Image/Profile2.jpg";
import Profile1 from "../../../public/asset/Image/Profile1.jpg";
import Profile3 from "../../../public/asset/Image/Profile3.jpg";
import Profile4 from "../../../public/asset/Image/Profile4.jpeg";
import Profile5 from "../../../public/asset/Image/Profile5.jpeg";


export default function Testimoni() {
  return (
    <section className="min-h-[100dvh] md:min-h-[70dvh] lg:px-16 md:px-10 px-6 flex justify-center gap-10 flex-col py-10">
      <div className="text-center flex flex-col gap-2">
        <h2 className="font-montserrat text-4xl font-semibold text-brown-300">
          Testimoni
        </h2>
        <h1 className="md:text-5xl text-3xl">
          Apa kata mereka tentang kami?
        </h1>
      </div>

      <TestiSlider />
    </section>
  );
}

const TestiSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const hasMountedRef = useRef(false);

  const items = [
    { name: 'Abdul', profile: Profile2, Testimoni: 'Produk ini sangat bagus, saya sangat puas dengan kualitasnya!' },
    { name: 'IR, H, Dean Kiyowo', profile: Profile1, Testimoni: 'Saya suka belanja disini soalnya harganya murah pembelinya sepi makanya murah dan penjual juga yaaa... ramah dan saya ganteng', Jabatan: 'Anggota DPR/RI Komisi 3 Fraksi Golkar' },
    { name: 'Afgan', profile: Profile3, Testimoni: 'Saya cinta javascript.', Jabatan: 'Pelanggan setia' },
    { name: 'Raja Skibidi', profile: Profile4, Testimoni: 'Toko ini sangat bagus saya dilayani layaknya raja', Jabatan: 'Pelanggan Karbit' },
    { name: 'Jefrey', profile: Profile5, Testimoni: 'Saya menyukai Produk-produk disini. membuat saya jauh lebih tampan', Jabatan: 'PELANGGAN TAMPAN' },
  ];

  useEffect(() => {
    // tandai bahwa komponen sudah ter-mount
    hasMountedRef.current = true;
  }, []);

  const scrollToIndex = (index) => {
    if (!hasMountedRef.current) return; 

    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.snap-center');
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  const handleNext = () => {
    const nextIndex = Math.min(activeIndex + 1, items.length - 1);
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    setActiveIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  return (
    <div className="relative">
      {/* Tombol Navigasi */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-brown-300 backdrop-blur-sm p-3 rounded-full hover:bg-brown-300/80 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 h-6 w-6 md:w-10" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-brown-300 backdrop-blur-sm p-3 rounded-full hover:bg-brown-300/80 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 h-6 w-6 md:w-10" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Container Slider */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-mandatory  gap-5 w-full px-4 scrollbar-hide"
      >
        {items.map((item, index) => {
          const distance = Math.abs(index - activeIndex);
          const scale = 1 - 0.15 * distance;
          const opacity = 1 - 0.3 * distance;

          return (
            <div key={index} className="snap-center shrink-0 transition-transform duration-300">
              <div
                className="relative transform origin-center transition-all duration-300"
                style={{
                  transform: `scale(${scale})`,
                  opacity: opacity
                }}
              >
                <CardTesti
                  name={item.name}
                  Profile={item.profile}
                  Testi={item.Testimoni}
                  Jabatan={item.Jabatan}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
