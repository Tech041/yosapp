"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LiaStarSolid } from "react-icons/lia";
import Link from "next/link";
const styles = "text-center font-semibold py-2";
const stars = [1, 2, 3, 4, 5];

const Home = () => {
  const [rating, setRating] = useState(0);
  const [hover, sethover] = useState(0);
  return (
    <div className="flex  flex-col justify-center font-[24px] items-center text-white bg-green-700 h-screen w-full">
      <div className="my-5 flex justify-center items-center">
        <Image
          width={200}
          height={100}
          src="/images/profile.jpg"
          alt="profile-pic"
          className="rounded-full"
        />
      </div>
      <h1 className={styles}>
        This application was designed to enable developers
      </h1>
      <h1 className={styles}>
        discover one another on GitHub, if you find this innovation
      </h1>
      <h1> interesting kindly rate my work</h1>

      <h1 className={styles}>
        This programmer is a licenced Pharmacist who derives
      </h1>
      <h1 className={styles}> joy in integrating tech into health</h1>
      <div className="flex gap-3 my-3">
        {stars.map((index) => (
          <div
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => sethover(index)}
            onMouseLeave={() => sethover(0)}
          >
            <LiaStarSolid
              size={30}
              className={`${
                index <= (rating || hover) ? "text-yellow-400" : "text-gray-900"
              }`}
            />
          </div>
        ))}
      </div>
      <div>Rated:{rating}</div>
      <div className="bg-white py-2 px-4 my-2 rounded-md text-green-900 hover:bg-green-900 hover:text-white">
        <Link href="/landing">Continue</Link>
      </div>
    </div>
  );
};

export default Home;
