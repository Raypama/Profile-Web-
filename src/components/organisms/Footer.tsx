// import React from 'react'






function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className=" text-white mb-0 from-blue-400 to-white bg-gradient-to-t h-24  items-center px-9">
            <div className="font-bold drop-shadow-md text-2xl mx-auto ">
                <img src="/src/assets/logo1.png" className="h-16 flex flex-col mx-auto  " />
            </div>
            <div className="font-bold drop-shadow-md text-sm text-center ">
                <p className="text-blue-950">COPYRIGHT © {currentYear} DESIGN BY RAI RESTU PAMA</p>
            </div>
        </div>
    )
}

export default Footer