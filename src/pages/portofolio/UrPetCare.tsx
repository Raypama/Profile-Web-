// import React from 'react'
import MainLayout from "../../components/templates/MainLayout";
import urpetcare from "/assets/urpetcare.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const UrPetCare = () => {
  const [copied, setCopied] = useState(false);
  const link = "https://ur-pet-care.vercel.app/";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset status setelah 2 detik
  };

  return (
    <MainLayout pageTitle="Rey|| polaroid">
      <div className="flex w-full items-center py-4 px-2">
        <div className="w-1/2  h-[700px] border-r-2 border-blue-950  flex flex-col items-center p-4">
          <div>
            <Link to={link}>
            <img
              src={urpetcare}
              alt="portofolio"
              className="w-full rounded-sm  object-contain
            "
            />
            </Link>
          </div>
          <div>
            <p className="flex justify-center py-4 text-xl font-sans font-semibold">
              UR Pet Care
            </p>
          </div>
          <div
            onClick={copyToClipboard}
            className="w-full rounded-sm shadow-sm border border-blue-950 p-2 cursor-pointer text-blue-500 text-center"
          >
            {copied ? "✅ Link Copied!" : link}
          </div>
        </div>
        <div className="w-1/2  h-[700px] pt-4 px-4 flex flex-col ">
          <div className="font-semibold text-xl mb-2">
            <p>Teknologi yang digunakan :</p>
          </div>
          <div className="mb-2">
            <div>
              <h2>Frontend (React Vite, React-DOM, TypeScript)</h2>
              <ul className="list-disc px-6 ">
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
          </div>
          <div>
            <div>
              <h2>Backend (Node.js, Express.js)</h2>
              <ul className="list-disc px-6 ">
                <li>
                  API dibuat dengan Express.js untuk menangani request dari
                  frontend.
                </li>

                <li>
                  Middleware seperti cors, helmet, dan express.json() mungkin
                  digunakan untuk keamanan dan parsing data.
                </li>
              </ul>
            </div>
            <div>
              <h2>Database (PostgreSQL, Sequelize/Sequelize-CLI)</h2>
              <ul className="list-disc px-6 ">
                <li>PostgreSQL digunakan sebagai database utama.</li>
                <li>
                  React digunakan untuk membangun UI dengan component-based
                  architecture.
                </li>
              </ul>
            </div>
            <div>
              <h2>Fitur Tambahan</h2>
              <ul className="list-disc px-6 ">
                <li>
                  Authentication: Bisa jadi ada fitur login/register menggunakan
                  JWT atau Auth.
                </li>
                <li>Fitur booking juga sudah bekerja</li>
                <li>
                  Private route juga ada ketika dia mau booking harus login
                  terlebih dahuli
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UrPetCare;
