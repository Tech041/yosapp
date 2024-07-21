import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Landing = () => {
  return (
    <section className="w-full h-screen bg-gray-200">
      <div className="p-20 flex flex-col justify-center items-center  w-full h-full  relative ">
        <FaGithub size={80} className="text-green-400 mb-8" />
        <h1 className=" text-green-900 text-xl">GitHub Profile Finder</h1>
        <h1 className=" text-green-900 text-xl">By Pharm Nelson</h1>
        <Link
          href="/otp"
          className="text-green-400 text-[24px] absolute bottom-[60px]"
        >
          continue
        </Link>
      </div>
    </section>
  );
};

export default Landing;
