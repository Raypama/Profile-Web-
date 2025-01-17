import {  NavLink } from "react-router-dom";
import MainLayout from "../components/templates/MainLayout";
import { useState } from "react";
import Masonry from "react-masonry-css";

const allGrid = [
    { img: "/src/assets/portofolio-assets/potrait.png" },
    { img: "/src/assets/portofolio-assets/landscape3.png" },
    { img: "/src/assets/portofolio-assets/landscape2.png" },
    { img: "/src/assets/portofolio-assets/landscape3.png" },
    { img: "/src/assets/portofolio-assets/landscape4.png" },
    { img: "/src/assets/portofolio-assets/landscape2.png" },
    { img: "/src/assets/portofolio-assets/potrait.png" },
    { img: "/src/assets/portofolio-assets/landscape3.png" },
    { img: "/src/assets/portofolio-assets/landscape4.png" },
    { img: "/src/assets/portofolio-assets/landscape3.png" },
    { img: "/src/assets/portofolio-assets/landscape4.png" },
    { img: "/src/assets/portofolio-assets/landscape3.png" },
    { img: "/src/assets/portofolio-assets/landscape4.png" },
    { img: "/src/assets/portofolio-assets/potrait.png" },
    { img: "/src/assets/portofolio-assets/potrait.png" },
    { img: "/src/assets/portofolio-assets/landscape3.png" },
    { img: "/src/assets/portofolio-assets/landscape4.png" },
    { img: "/src/assets/portofolio-assets/landscape3.png" },
    { img: "/src/assets/portofolio-assets/landscape4.png" },
];

function Portofolio() {
    const [limitter, setLimitter] = useState(5);

    const breakpointColumnsObj = {
        default: 3, // jumlah kolom pada layar besar
        1100: 2, // jumlah kolom pada layar medium
        700: 1, // jumlah kolom pada layar kecil
    };

    return (
        <MainLayout pageTitle="rey Portofolio">
            <div className="h-max px-10 mb-9">
                <div className="pt-28 w-full text-center">
                    <h1 className="uppercase text-base text-blue-500 font-medium">
                        my portofolio
                    </h1>
                    <h2 className=" text-2xl text-blue-950 font-semibold">Recent Works</h2>
                </div>
                <div className="full mx-auto mt-6">
                    <ul className="flex justify-center gap-5 text-blue-950 font-serif">
                        <li>
                            <NavLink to={""} className={({ isActive }) => isActive ? "text-zinc-700" : ""}>All Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to={""} className={({ isActive }) => isActive ? "text-zinc-700" : ""}>Web Design</NavLink>
                        </li>
                        <li>
                            <NavLink to={""} className={({ isActive }) => isActive ? "text-zinc-700" : ""}>App Design</NavLink>
                        </li>
                        <li>
                            <NavLink to={""} className={({ isActive }) => isActive ? "text-zinc-700" : ""}>Graphic Design</NavLink>
                        </li>
                    </ul>
                </div>

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
                                <h3 className="text-white text-lg font-bold">Logo Design</h3>
                                <div className="flex space-x-4 mt-2">
                                    <button className="p-2 bg-white rounded-full text-blue-500 shadow">
                                        🔍
                                    </button>
                                    <button className="p-2 bg-white rounded-full text-red-500 shadow">
                                        ❤️
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Masonry>
                <div className="w-full flex items-center justify-center ">
                    <button
                        type="button"
                        onClick={() => setLimitter(limitter+6)}
                        className="h-14 w-32 rounded-3xl bg-blue-400 text-lg"
                    >
                        View
                    </button>
                </div>
            </div>
        </MainLayout>
    );
}

export default Portofolio;