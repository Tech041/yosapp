"use client";
import Link from "next/link";
import React, { useState } from "react";

const Otp = () => {
  const [userName, setUserName] = useState("");

  return (
    <section className="w-full h-screen relative bg-gray-300">
      <div className="p-10  flex justify-center  flex-col items-center   w-full">
        <h1 className="text-green-900 text-[23px]">
          Verify you are not a robot
        </h1>

        <form className="mt-10 flex justify-center items-center flex-col">
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            className="text-center rounded-md mb-4"
            value={userName}
          />
        </form>
        <p>Enter your name</p>
      </div>
      <div className="flex justify-center">
        <div
          className={` ${
            userName !== "" ? "block" : "hidden"
          } bg-green-400 text-white w-[40%] h-[20%] flex justify-center items-center py-1 rounded-md`}
        >
          <p>{userName} is verified</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center font-semibold mt-10"></div>

      <div
        className={`${
          userName !== "" ? "block" : "hidden"
        } w-full flex justify-center items-center  absolute bottom-[100px]`}
      >
        <span className="bg-green-400 text-white w-[20%] flex justify-center items-center py-1 rounded-md">
          <Link href="/chat" className="text-[16px]">
            continue
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Otp;
