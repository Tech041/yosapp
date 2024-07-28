import Link from "next/link";
import React from "react";

const Otp = () => {
  return (
    <section className="w-full h-screen relative" id="otp">
      <div className="p-10  flex justify-center  flex-col items-center   w-full">
        <h1 className="text-green-400 text-[16px]">Verify your phone number</h1>

        <hr className="border-2 w-[60%] mt-10" />
        <p>Enter your phone number</p>
      </div>
      <div className="w-full flex justify-center items-center  absolute bottom-10">
        <span className="bg-green-400 text-white w-[15%] flex justify-center items-center">
          <Link href="#" className="text-[16px]">
            Verify
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Otp;
