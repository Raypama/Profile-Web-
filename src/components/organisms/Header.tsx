import { useState } from "react";
import { NavLink } from "react-router-dom"



const menuNavbar = [
    {
        menu: "Home",
        link: "/"
    },
    {
        menu: "About",
        link: "/about"
    },
    {
        menu: "Skills",
        link: "/skills"
    },
    {
        menu: "Portofolio",
        link: "/portofolio"
    },
    {
        menu: "Contact",
        link: "/contact"
    },
]

function Header() {
    const [active, setActive] = useState<string>("");
    return (
        <div className="flex w-full fixed justify-between bg-[url('/src/assets/home-assets/mainBG.png')] bg-fill bg-top  z-50   items-center px-9">
            <div className="font-bold drop-shadow-md text-2xl ">
                <img src="/src/assets/logo1.png" className=" h-20   " />
            </div>
            <div className="group inline-block text-blue-100">
                <ul className="flex gap-10">
                    {menuNavbar.map((item, i) => (
                        <li key={i} className={`text-lg font-semibold ${active === item.menu ? "text-gray-300 underline decoration-emerald-500[5px] " : "hover:text-blue-500"
                            }`}
                            onMouseOver={() => setActive(item.menu)}>
                            <NavLink to={item.link} className={({ isActive }) => isActive ? "opacity-60" : ""}>{item.menu}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header