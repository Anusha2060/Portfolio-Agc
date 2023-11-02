import { Typewriter } from "react-simple-typewriter";
import React from "react";

function Portfolio() {
  return (
    <div className="flex flex-col items-center mt-14 justify-center pb-10 ">
      <div className="text-xl font-semibold text-orange-300	uppercase">
        Portfolio
      </div>

      <div className="text-2xl uppercase sm:text-3xl  lg:text-3xl font-semibold pt-6	">
        <Typewriter
          words={["my projects "]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={230}
          delaySpeed={1000}
        />
      </div>
      <div className="border-t-2 border-orange-300 w-20 mt-1"></div>
      <div className="flex flex-col gap-3  lg:grid grid-cols-2 w-10/12 mx-auto mt-10 cursor-pointer">
        <img
          src="./src/assets/Screenshot (3).png"
          className=" w-full rounded-lg"
        />
        <img
          src="./src/assets/Screenshot (4).png"
          className="w-full  rounded-lg"
        />
        <img
          src="./src/assets/Screenshot (6).png"
          className="w-full rounded-lg"
        />
        <img
          src="./src/assets/Screenshot (7).png"
          className="w-full  rounded-lg"
        />
      </div>
    </div>
  );
}

export default Portfolio;
