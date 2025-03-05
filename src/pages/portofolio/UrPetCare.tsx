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
          <p>Technologies used :</p>
        </div>
  
        {/* Frontend */}
        <div className="mb-2">
          <h2 className="text-base md:text-lg font-semibold">
            Frontend (React Vite, React-DOM, TypeScript)
          </h2>
          <ul className="list-disc px-6 text-sm md:text-base">
            <li>Vite as the build tool for faster performance.</li>
            <li>
            React is used to build the UI with a component-based architecture.
            </li>
            <li>
            TypeScript is used to add type safety in frontend development.
            </li>
          </ul>
        </div>
  
        {/* Backend */}
        <div className="mb-2">
          <h2 className="text-base md:text-lg font-semibold">
            Backend (Node.js, Express.js)
          </h2>
          <ul className="list-disc px-6 text-sm md:text-base">
            <li>The API is built with Express.js to handle requests from the frontend.</li>
            <li>
            Middleware such as <span className="font-medium">cors, helmet, and express.json()</span> may be used for security and data parsing.
            </li>
          </ul>
        </div>
  
        {/* Database */}
        <div className="mb-2">
          <h2 className="text-base md:text-lg font-semibold">
            Database (PostgreSQL, Sequelize/Sequelize-CLI)
          </h2>
          <ul className="list-disc px-6 text-sm md:text-base">
            <li>PostgreSQL is used as the primary database.</li>
            <li>Sequelize/Sequelize-CLI is used as an <span className="font-medium">ORM</span> to simplify database management, including <span className="font-medium">migrations, models, and queries</span> in PostgreSQL.</li>
          </ul>
        </div>
  
        {/* Fitur Tambahan */}
        <div>
          <h2 className="text-base md:text-lg font-semibold">Additional Features:</h2>
          <ul className="list-disc px-6 text-sm md:text-base">
            <li>
            <span className="font-medium">Authentication:</span> Includes login/register features using <span className="font-medium">JWT or Auth.</span>
            </li>
            <li>The booking feature is also working.</li>
            <li>
            A private route is also implemented, requiring users to log in before making a booking.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </MainLayout>
  );  
};

export default UrPetCare;
