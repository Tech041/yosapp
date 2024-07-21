import Link from "next/link";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Landing = () => {
  return (
    <section className="w-full h-screen" id="landing">
      <div className="p-20 flex flex-col justify-center items-center  w-full h-full  relative ">
        <IoLogoWhatsapp size={80} className="text-green-400 mb-8" />
        <h1 className=" text-green-400 text-xl">WhatApp clone</h1>
        <Link
          href="/#otp"
          className="text-green-400 text-[24px] absolute bottom-[60px]"
        >
          continue
        </Link>
      </div>
    </section>
  );
};

export default Landing;
