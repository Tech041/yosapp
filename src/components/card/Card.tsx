"use client";
import { useState, useEffect } from "react";
import React from "react";
interface CardProp {
  username: any;
  text: any;
  chat: any;
  time: any;
  picture: any;
}

const Card = ({ username, text, chat, time, picture }: CardProp) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function myData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data);
      const username = data;
      console.log(username);
    }
    myData();
  }, []);
  return (
    <div className="my-1">
      <div className="flex justify-center items-center">
        <div className="wrapper h-[100px]  flex gap-5 w-[90%] items-center text-gray-400">
          <div className="dp-wrapper">
            <div className="dp w-[60px] h-[60px] rounded-full bg-gray-300 text-[10px] flex justify-center items-center">
              <p> {picture}</p>
            </div>
          </div>
          <div className="main-wrapper w-full">
            <div className="user-chatwrapper  flex  justify-around gap-2">
              <div className="w-[40%]  font-semibold text-gray-600">
                {username}
              </div>
              <div className="w-[10%]">{time}</div>
            </div>
            <div className="chat-chat flex gap-2 justify-around">
              <div className="w-[40%]">{text}</div>
              <div className="w-[10%] flex justify-center items-center">
                <div className="text-white h-[30px] w-[30px]   bg-green-400  rounded-full flex justify-center items-center">
                  <p>{chat}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
