// import React from 'react'

import { IoIosContact, IoIosMail } from "react-icons/io";
import MainLayout from "../components/templates/MainLayout";
import { IoCall } from "react-icons/io5";
import { TiSocialGithubCircular, TiSocialLinkedinCircular } from "react-icons/ti";
import { Link } from "react-router-dom";
import { SlSocialDribbble, SlSocialInstagram } from "react-icons/sl";
import { Label, TextInput } from "flowbite-react";

function Contact() {
    return (
        <MainLayout pageTitle="Contact Pages">
            <div className="min-h-full  mb-36 ">
                <div className="pt-36 w-full text-center mb-10">
                    <h1 className="uppercase text-base text-blue-500 font-medium ">contact me</h1>
                    <h2 className=" text-2xl text-blue-950 font-semibold">Get In Touch</h2>
                </div>
                <div className="grid grid-cols-2  gap-7">
                    <div className="bg-blue-700 h-96 pl-14 py-5 rounded-r-3xl shadow-2xl relative">
                        <img src="/src/assets/contact-assets/Ellipse 1.png" alt="ellips" className="absolute text-sky-300 left-0 h-96 bottom-20 opacity-35 z-10 " />
                        <img src="/src/assets/contact-assets/Ellipse 2.png" alt="ellips" className="absolute text-sky-300 right-56 h-40 bottom-24 opacity-20 z-10 " />
                        <h2 className="text-white z-30 font-semibold text-2xl pb-5 ">Contact Information</h2>
                        <p className="text-white z-30 text-lg pb-5">Have some project? or maybe just want to say hello? I'd love to hear from you</p>
                        <div className="flex gap-3 text-white z-30 mb-3">
                            <div>
                                <IoIosContact size={25} />
                            </div>
                            <p>Rai Restu Pama</p>
                        </div>
                        <div className="flex gap-3 text-white z-30 mb-3">
                            <div>
                                <IoCall size={25} />
                            </div>
                            <p>+62 882 4524 6658</p>
                        </div>
                        <div className="flex gap-3 text-white z-30 mb-10">
                            <div>
                                <IoIosMail size={25} />
                            </div>
                            <p>ghosting@mail.com</p>
                        </div>
                        <div className="flex text-white w-full z-30 items-center gap-10">
                            <Link to={"/"} >
                                <SlSocialDribbble size={50} />
                            </Link>
                            <Link to={"https:linkedin.com"}>
                                <TiSocialLinkedinCircular size={60} />
                            </Link>
                            <Link to={"https:instagram.com"}>
                                <SlSocialInstagram size={45} />
                            </Link>
                            <Link to={"https:github.com"}>
                                <TiSocialGithubCircular size={60} />
                            </Link>
                        </div>
                    </div>
                    <div className="grid gap-2 grid-rows-4">
                        <div className=" mt-2 mr-10">
                            <div className="mb-2 ">
                                <Label htmlFor="Name" className="text-xl" value="Name" />
                            </div>
                            <TextInput sizing="sm" id="Name" type="string" placeholder="Your Name" required />
                        </div>
                        <div className=" mt-2 mr-10">
                            <div className="mb-2 ">
                                <Label htmlFor="Email" className="text-xl" value="Email" />
                            </div>
                            <TextInput sizing="sm" id="Email" type="string" placeholder="YourEmail" required />
                        </div>
                        <div className=" mt-2 mr-10">
                            <div className="mb-2 ">
                                <Label htmlFor="Message" className="text-xl" value="Message" />
                            </div>
                            <TextInput sizing="sm" id="Message" type="string" placeholder="Your Message" required />
                        </div>
                        <div className="mt-4">
                            <button type="button" onClick={()=>alert("massage has ben succesfully send")} className="w-44 h-12 shadow-lg border bg-blue-600 border-blue-500 rounded-3xl text-white text-lg font-medium hover:text-blue-900 hover:bg-white duration-200" >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}

export default Contact