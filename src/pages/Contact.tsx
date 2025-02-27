// import React from 'react'

import { IoIosContact, IoIosMail } from "react-icons/io";
import MainLayout from "../components/templates/MainLayout";
import { IoCall } from "react-icons/io5";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import { SlSocialDribbble, SlSocialInstagram } from "react-icons/sl";
import { Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(form.email);
  console.log(form.name);
  console.log(form.message);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("All input are required");
      setIsLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Email format not valid (example@gmail.com/.co.id or other..)");
      setIsLoading(false);
      return;
    }
    console.log("jalann submit");

    // Format pesan WhatsApp
    const name = encodeURIComponent(form.name);
    const email = encodeURIComponent(form.email);
    const message = encodeURIComponent(form.message);

    // Format pesan WhatsApp
    const whatsappMessage = `Hello!%0A%0AMy Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Nomor tujuan (gunakan format internasional tanpa "+")
    const phoneNumber = "6285693013151";

    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Redirect ke WhatsApp
    window.open(whatsappURL, "_blank");

    setIsLoading(false);
  };

  return (
    <MainLayout pageTitle="Contact Pages">
      <div className="  py-5 ">
        <div className="  w-full text-center mb-3 md:mb-10">
          <h1 className="uppercase text-sm sm:text-base text-blue-500 font-medium">
            contact me
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-950 font-semibold">
            Get In Touch
          </h2>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 sm:mr-7 mr-3">
          <div className="bg-blue-700 h-96 px-5 py-5 rounded-r-3xl shadow-2xl relative">
            {/* Tambahin `z-0` biar ada di belakang */}
            <img
              src="/assets/contact-assets/Ellipse 1.png"
              alt="ellips"
              className="absolute  left-0 h-[700px] bottom-20 opacity-35 z-0"
            />

            <img
              src="/assets/contact-assets/Ellipse 2.png"
              alt="ellips"
              className="absolute  right-0 h-40 bottom-0 opacity-20 z-0"
            />

            {/* Tambahin `z-10` buat teks biar tetap di atas */}
            <h2 className="text-white font-semibold text-xl sm:text-2xl pb-5 z-10 relative">
              Contact Information
            </h2>
            <p className="text-white text-sm sm:text-lg pb-5 z-10 relative">
              Have some project? or maybe just want to say hello? I'd love to
              hear from you
            </p>

            {/* Ikon dan teks kontak */}
            <div className="flex gap-3 text-white mb-3 text-sm sm:text-lg z-10 relative">
              <IoIosContact size={25} />
              <p>Rai Restu Pama</p>
            </div>
            <div className="flex gap-3 text-white text-sm sm:text-lg mb-3 z-10 relative">
              <IoCall size={25} />
              <p>+62 856 9301 3151</p>
              <a
                href="https://wa.me/6285693013151"
                className="text-white underline"
                target="blank"
              >
                Chat via WhatsApp
              </a>
            </div>
            <div className="flex gap-3 text-white text-sm sm:text-lg mb-10 z-10 relative">
              <IoIosMail size={25} />
              <a
                href="mailto:rayrestu7@gmail.com"
                className="text-white underline"
                target="blank"
              >
                rayrestu7@gmail.com
              </a>
            </div>

            {/* Sosial Media */}
            <div className="flex text-white w-full items-center gap-10 z-10 relative">
              <Link to={"/"} className="block">
                <SlSocialDribbble className="w-8 h-8 sm:w-12 sm:h-12" />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/ray-restu "}
                className="block"
                target="blank"
              >
                <TiSocialLinkedinCircular className="w-10 h-10 sm:w-14 sm:h-14" />
              </Link>
              <Link
                to={"https://www.instagram.com/rey.rstu/"}
                className="block"
                target="blank"
              >
                <SlSocialInstagram className="w-8 h-8 sm:w-12 sm:h-12" />
              </Link>
              <Link
                to={"https://github.com/Raypama"}
                className="block"
                target="blank"
              >
                <TiSocialGithubCircular className="w-10 h-10 sm:w-14 sm:h-14" />
              </Link>
            </div>
          </div>
          <form
            action=""
            className="w-full md:w-1/2 my-5  z-30 md:pt-0 "
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2  flex-col">
              <div className=" mt-2 mx-5 ">
                <div className="mb-2 ">
                  <Label
                    htmlFor="Name"
                    className="text-lg sm:text-xl"
                    value="name"
                  />
                </div>
                <TextInput
                  sizing="sm"
                  id="name"
                  name="name" // ✅ Tambahkan name
                  value={form.name}
                  type="text"
                  onChange={handleChange} // ✅ Tambahkan onChange
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className=" mt-2 mx-5">
                <div className="mb-2 ">
                  <Label
                    htmlFor="Email"
                    className="text-lg sm:text-xl"
                    value="email"
                  />
                </div>
                <TextInput
                  sizing="sm"
                  id="email"
                  name="email" // ✅ Tambahkan name
                  type="email"
                  value={form.email}
                  onChange={handleChange} // ✅ Tambahkan onChange
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className=" mt-2 mx-5">
                <div className="mb-2 ">
                  <Label
                    htmlFor="message"
                    className="text-lg sm:text-xl"
                    value="message"
                  />
                </div>
                <div>
                  <Textarea
                    id="message"
                    name="message" // ✅ Tambahkan name
                    placeholder="Your Message"
                    onChange={handleChange} // ✅ Tambahkan onChange
                    value={form.message}
                    required
                    className="min-h-36 p-4 max-h-36"
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-36 sm:w-44 h-10 sm:h-12 shadow-lg border bg-blue-600 border-blue-500 rounded-3xl text-white text-base sm:text-lg font-medium hover:text-blue-900 hover:bg-white duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default Contact;
