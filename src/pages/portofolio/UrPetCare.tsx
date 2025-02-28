// import React from 'react'
import MainLayout from "../../components/templates/MainLayout";
import urpetcare from "/assets/urpetcare.png";
// import { useState } from "react";
import { Link } from "react-router-dom";

const UrPetCare = () => {
  // const [copied, setCopied] = useState(false);
  const link = "https://ur-pet-care.vercel.app/";

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(link);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000); // Reset status setelah 2 detik
  // };

  return (
    <MainLayout pageTitle="Rey|| polaroid">
    <div className="flex flex-col md:flex-row w-full items-center py-4 px-2">
      {/* Bagian Kiri */}
      <div className="w-full md:w-1/2 h-auto md:h-[700px] border-b-2 md:border-r-2 md:border-b-0 border-blue-950 flex flex-col items-center p-4">
        <div className="w-full max-w-md">
          <Link to={link}>
            <img
              src={urpetcare}
              alt="portofolio"
              className="w-full rounded-sm object-contain"
            />
          </Link>
        </div>
        <div className="text-center">
          <p className="py-4 text-lg md:text-xl font-sans font-semibold">
            UR Pet Care
          </p>
        </div>
        <Link to={link} target="blank">
            <div
              //   onClick={copyToClipboard}
              className="w-full max-w-md rounded-lg  shadow-lg border border-blue-950 p-2 px-5 sm:px-36 cursor-pointer text-blue-500 text-center text-sm md:text-base"
            >
              Demo
            </div>
          </Link>
      </div>
  
      {/* Bagian Kanan */}
      <div className="w-full md:w-1/2 h-auto md:h-[700px] pt-4 px-4 flex flex-col">
        <div className="font-semibold text-lg md:text-xl mb-2">
          <p>Teknologi yang digunakan :</p>
        </div>
  
        {/* Frontend */}
        <div className="mb-2">
          <h2 className="text-base md:text-lg font-semibold">
            Frontend (React Vite, React-DOM, TypeScript)
          </h2>
          <ul className="list-disc px-6 text-sm md:text-base">
            <li>Vite sebagai build tool untuk performa lebih cepat.</li>
            <li>
              React digunakan untuk membangun UI dengan component-based
              architecture.
            </li>
            <li>
              TypeScript untuk menambahkan type safety dalam pengembangan
              frontend.
            </li>
          </ul>
        </div>
  
        {/* Backend */}
        <div className="mb-2">
          <h2 className="text-base md:text-lg font-semibold">
            Backend (Node.js, Express.js)
          </h2>
          <ul className="list-disc px-6 text-sm md:text-base">
            <li>API dibuat dengan Express.js untuk menangani request dari frontend.</li>
            <li>
              Middleware seperti cors, helmet, dan express.json() mungkin
              digunakan untuk keamanan dan parsing data.
            </li>
          </ul>
        </div>
  
        {/* Database */}
        <div className="mb-2">
          <h2 className="text-base md:text-lg font-semibold">
            Database (PostgreSQL, Sequelize/Sequelize-CLI)
          </h2>
          <ul className="list-disc px-6 text-sm md:text-base">
            <li>PostgreSQL digunakan sebagai database utama.</li>
            <li>React digunakan untuk membangun UI dengan component-based architecture.</li>
          </ul>
        </div>
  
        {/* Fitur Tambahan */}
        <div>
          <h2 className="text-base md:text-lg font-semibold">Fitur Tambahan</h2>
          <ul className="list-disc px-6 text-sm md:text-base">
            <li>
              Authentication: Bisa jadi ada fitur login/register menggunakan JWT atau Auth.
            </li>
            <li>Fitur booking juga sudah bekerja</li>
            <li>
              Private route juga ada ketika dia mau booking harus login terlebih dahulu
            </li>
          </ul>
        </div>
      </div>
    </div>
  </MainLayout>
  );  
};

export default UrPetCare;
