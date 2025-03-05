// import React from 'react'
// import { FaApple } from 'react-icons/fa6'
import Button from "../components/atoms/Button";
import MainLayout from "../components/templates/MainLayout";

function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Rai-Restu-Pama.pdf"; // Path ke file CV di folder public
    link.download = "RaiRestuPama_CV.pdf"; // Nama file saat di-download
    link.click();
  };
  return (
    <MainLayout pageTitle="Home-dev">
      <div className=" px-6 sm:px-10 py-24 sm:py-32 bg-cover bg-center relative flex flex-col-reverse sm:grid sm:grid-cols-2 items-center">
        {/* Gambar Latar Belakang */}
        <div
          className="absolute h-screen inset-0 bg-no-repeat bg-left-top top-0 opacity-30 z-0"
          style={{
            backgroundImage: "url('/assets/home-assets/lingkaranBesar.png')",
          }}
        ></div>

        {/* Bagian Kiri (Text) */}
        <div className="flex flex-col justify-center  gap-3 sm:gap-4 z-10 text-center sm:text-left">
          <h2 className="font-semibold text-xl sm:text-2xl">Hello, I'm Rey</h2>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-2">
            FrontEnd & Backend / Fullstack Jr.
          </h1>
          <p className="text-base sm:text-lg md:text-xl pb-4 sm:pb-6">
            FullStack in the world, Let's work and <br /> easy-going code...
          </p>
          <div className="flex justify-center sm:justify-start">
            <Button
              textButton1="Hire Me"
              textButton2="Get CV"
              onDownloadCV={handleDownloadCV}
            />
          </div>
        </div>
        {/* Gambar Bulatan Kecil */}
        <img
          src="/assets/home-assets/lingkaran kecil.png"
          className="absolute w-24 sm:w-1/3 right-0 opacity-20 z-0"
        />

        {/* Bagian Kanan (Hero Image) */}
        <div className="relative flex justify-center">
          {/* Gambar Utama */}
          <img
            src="/assets/home-assets/hero-img.png"
            className="w-2/3 sm:w-full max-w-sm sm:max-w-md md:max-w-lg z-10"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
