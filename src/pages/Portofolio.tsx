import { useNavigate } from "react-router-dom";
import MainLayout from "../components/templates/MainLayout";
import { useState } from "react";
import Masonry from "react-masonry-css";

const allGrid = [
  { img: "/src/assets/urpetcare.png", path: "urpetcare", name: "UrPetCare" },
];

function Portofolio() {
  const [limitter, setLimitter] = useState(5);
  const navigate = useNavigate();

  const breakpointColumnsObj = {
    default: 3, // jumlah kolom pada layar besar
    1100: 2, // jumlah kolom pada layar medium
    700: 1, // jumlah kolom pada layar kecil
  };

  return (
    <MainLayout pageTitle="rey Portofolio">
      <div className="h-max px-10 mb-9">
        <div className="py-4 w-full text-center">
          <h1 className="uppercase text-base text-blue-500 font-medium">
            my portofolio
          </h1>
          <h2 className=" text-2xl text-blue-950 font-semibold">
            Recent Works
          </h2>
        </div>
        {/* <div className="full mx-auto mt-6">
          <ul className="flex justify-center gap-5 text-blue-950 font-serif">
            
            <li>
              <NavLink
                to={""}
                className={({ isActive }) => (isActive ? "text-zinc-700" : "")}
              >
                Web Design
              </NavLink>
            </li>
            
          </ul>
        </div> */}

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4  pt-6"
          columnClassName="masonry-grid-column"
        >
          {allGrid.slice(0, limitter).map((item, i) => (
            <div
              key={i}
              className="relative group rounded-lg mb-5 overflow-hidden shadow-md"
            >
              <img
                src={item.img}
                alt="Portfolio Image"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-lg font-bold">{item.name}</h3>
                <div className="flex space-x-4 mt-2">
                <button
                    onClick={() => navigate(`/portofolio/${item.path}`)} // <- FIX INI
                    className="p-2 bg-white rounded-full text-blue-500 shadow"
                  >
                    🔍 Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
        {allGrid.length >5 && (
          <div className="w-full flex items-center justify-center">
            <button
              type="button"
              onClick={() => setLimitter(limitter + 6)}
              className="h-14 w-32 rounded-3xl bg-blue-400 text-lg"
            >
              View
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Portofolio;
