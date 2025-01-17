// import React from 'react'

import { Link } from "react-router-dom";
import MainLayout from "../components/templates/MainLayout";
import { BiMoviePlay } from "react-icons/bi";
import { FaBasketball, FaCamera } from "react-icons/fa6";

const hobby = [
    {
        name: "Movie",
        icon: <BiMoviePlay size={25}/>
    },
    {
        name: "BaskettBall",
        icon: <FaBasketball size={25}/>
    },
    {
        name: "Photo",
        icon: <FaCamera size={25}/>
    },
]

function About() {
    return (
        <MainLayout pageTitle="Rey About">
            <div className="h-screen px-10 ">
                <div className='grid  text-black grid-cols-3  h-full  justify-center'>
                    <div className='relative flex flex-col justify-center items-center'>
                        <img src="/src/assets/about-assets/skilss.png" className="w-full z-10" />
                    </div>
                    <div className='relative flex flex-col justify-center items-center'>
                        <img src="/src/assets/about-assets/Saly-10.png" className="w-full z-10" />
                    </div>

                    <div className='flex flex-col justify-center gap-2  px-2'>
                        <h2 className='font-semibold text-2xl text-blue-600 pb-2 uppercase'>Hello im, Rey</h2>
                        <h1 className='font-bold text-4xl pb-4 text-blue-950 text-wrap'>FrontEnd and Backend/Fullstack.jr</h1>
                        <p className='text-lg pb text-blue-900'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident soluta facere quis dolorem modi cum fugiat.</p>
                        <p className='text-lg pb-2 text-blue-900'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident soluta facere quis dolorem modi cum fugiat.</p>
                        <div>
                            <h3 className="text-blue-950 font-semibold text-2xl ">My Hobby</h3>
                            <div className="flex gap-4 mt-3 list-none">
                                {hobby.map((item, i) => (
                                    <li key={i} className=" text-blue-900">
                                        <div className="flex gap-2 text-sm">
                                            <div className=" flex-row my-auto">{item.icon}</div>
                                            <Link to={"/NotFound-lets-back"} className="text-xl my-auto">{item.name}</Link>
                                        </div>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </MainLayout>
    )
}

export default About