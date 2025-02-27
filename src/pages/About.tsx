// import React from 'react'

import { Link } from "react-router-dom";
import MainLayout from "../components/templates/MainLayout";
import { BiMoviePlay } from "react-icons/bi";
import { FaBasketball, FaCamera } from "react-icons/fa6";

const hobby = [
  {
    name: "Movie",
    icon: <BiMoviePlay size={25} />,
  },
  {
    name: "BaskettBall",
    icon: <FaBasketball size={25} />,
  },
  {
    name: "Photo",
    icon: <FaCamera size={25} />,
  },
];

function About() {
  return (
    <MainLayout pageTitle="Rey About">
      <div className="py-4 px-4 sm:px-6 lg:px-10">
        {/* Grid yang lebih responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black h-full justify-center">
          {/* Image 1 */}
          {/* <div className="relative flex flex-col justify-center items-center">
            <img
              src="/src/assets/about-assets/skilss.png"
              className="w-3/4 sm:w-2/3 lg:w-full z-10"
            />
          </div> */}

          {/* Image 2 */}
          <div className="relative flex flex-col justify-center items-center">
            <img
              src="/src/assets/about-assets/Saly-10.png"
              className="w-3/4 sm:w-2/3 lg:w-full z-10"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center gap-4 px-2">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-blue-950">
              FrontEnd and Backend / Fullstack.jr
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-950">
              <span className="font-bold">Junior Web Developer</span>,
              specializing in{" "}
              <span className="font-bold">
                Front-End and Back-End Development.
              </span>
              <br />I have experience in building applications using
              <span className="font-bold"> React TypeScript</span> and{" "}
              <span className="font-bold">Next.js</span>, styled with{" "}
              <span className="font-bold">Tailwind CSS</span> and{" "}
              <span className="font-bold">Chakra UI.</span> <br /> On the
              backend, I work with <span className="font-bold">Node.js</span>{" "}
              and <span className="font-bold">Express.js.</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-blue-950">
              I am a <span className="font-bold">Junior Web Developer</span> who
              has been learning from several expert mentors with years of
              experience in this field. Currently, I am still under their
              guidance to further improve my skills. I am ready to take on tasks
              and work under any conditions, ensuring that I complete every
              assignment to the best of my ability.
            </p>

            {/* Hobby Section */}
            <div>
              <h3 className="text-blue-950 font-semibold text-xl sm:text-2xl">
                My Hobby
              </h3>
              <div className="flex flex-wrap gap-4 mt-3 list-none">
                {hobby.map((item, i) => (
                  <li key={i} className="text-blue-950">
                    <div className="flex gap-2 text-sm sm:text-base md:text-lg">
                      <div className="flex-row my-auto">{item.icon}</div>
                      <Link
                        to={"/NotFound-lets-back"}
                        className="text-base sm:text-lg md:text-xl my-auto"
                      >
                        {item.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
