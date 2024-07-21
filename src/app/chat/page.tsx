"use client";
import React from "react";

import { useState } from "react";
import { error } from "console";
const styles = " w-full flex gap-5 justify-center items-center";
const spanStyle = "text-[24px] w-[50%] text-white";

const Chat = () => {
  const [userData, setUserData] = useState<any>("");
  const [user, setUser] = useState<any>("");

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error:", error);
      setUserData("");
    }
  };
  return (
    <section className="w-full h-screen relative bg-gray-700">
      <div className="px-5 w-full">
        <div className="flex justify-center flex-col text-white items-center font-semibold pt-10">
          <h1 className="py-2">Welcome to my GitHub Profile Finder</h1>
          <h1>Get connected today</h1>
        </div>
        <div className="w-full flex justify-center items-center mt-5">
          <input
            type="text"
            placeholder="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-[90%] bg-gray-100  py-2 rounded-2xl px-3 placeholder:text-gray-400"
          />
        </div>
        <div className="find flex justify-center items-center mt-10">
          <button
            onClick={fetchData}
            className="text-white bg-green-400 py-1 px-6 rounded-md"
          >
            Find
          </button>
        </div>
        {userData && (
          <div className="user-profie absolute bottom-[30%] left-0 text-white text-[20px] flex justify-center items-center w-full px-10">
            <div className="w-full flex justify-center items-center flex-col ">
              <div className={styles}>
                <span className={spanStyle}>Username:</span>
                <span className={spanStyle}>@{userData.login}</span>
              </div>

              <div className={styles}>
                <span className={spanStyle}> Repos:</span>
                <span className={spanStyle}> {userData.public_repos}</span>
              </div>

              <div className={styles}>
                <span className={spanStyle}> Followers:</span>
                <span className={spanStyle}>{userData.followers}</span>
              </div>

              <div className={styles}>
                <span className={spanStyle}> Following:</span>
                <span className={spanStyle}>{userData.following}</span>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Chat;
