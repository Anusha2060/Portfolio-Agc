import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row md:w-screen justify-center items-center lg:justify-evenly pt-10">
        <img
          src="./src/assets/self.png"
          className="w-min md:w-3/6	h-full  justify-center	"
        />
        <div className="fonts leading-tight flex flex-col gap-4 items-center py-7 md:py-24">
          <div className="text-base md:text-lg">HELLO EVERYBODY, I AM</div>
          <div className=" font-extrabold text-3xl break-all w-72 uppercase text-center text-orange-300 ">
            <Typewriter
              words={["Anusha Chhetri"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={230}
              delaySpeed={1000}
            />
          </div>
          <div className="w-80 text-xl md:text-lg font-semibold">
            <Typewriter
              words={["JUNIOR FRONT-END DEVELOPER"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={90}
              delaySpeed={1000}
            />
          </div>
          <div className="text-base text-center md:text-lg hover:cursor-pointer">
            <span className=" hover:text-orange-300">Instagram</span>|
            <span className=" hover:text-orange-300">Github</span>|
            <span className=" hover:text-orange-300">Facebook</span>
          </div>

          <div className=" text-orange-300 text-lg border-orange-300 border-2 w-15 px-4 py-1 mt-1 hover:cursor-pointer">
            Get Resume
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
