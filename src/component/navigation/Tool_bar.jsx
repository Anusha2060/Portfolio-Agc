import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Toolbar() {
  return (
    <nav className="flex justify-around w-screen items-center  h-full">
      <img
        src="./src/assets/logo.png"
        className="h-38 w-56 lg:h-36 w-54 mt-3"
      />
      <div className="fonts lg:flex gap-4 text-lg font-medium hover:cursor-pointer">
        <div className="h-fit w-full px-3 group relative group-hover:border-b ">
          <Link to={"/"} className=" relative z-10 pb-2 ">
            Home
          </Link>
          <div
            className="h-0.5  bg-orange-300 absolute	bottom-0 left-0 w-0 text-lg text-center
           font-medium
           group-hover:w-full 
           transition-all duration-700 delay-100 ease-in-out   "
          ></div>
        </div>
        <div className="h-fit w-full px-3 group relative group-hover:border-b ">
          <Link to={"/About"} className=" relative z-10 pb-2 ">
            About
          </Link>
          <div
            className="h-0.5 bg-orange-300 absolute	 bottom-0 left-0 w-0 text-lg text-center
           font-medium
           group-hover:w-full 
           transition-all duration-700 delay-100 ease-in-out   "
          ></div>
        </div>
        <div className="h-fit w-full px-3 group relative group-hover:border-b ">
          <Link to={"/Skill"} className=" relative z-10 pb-2 ">
            Skills
          </Link>
          <div
            className="h-0.5 bg-orange-300 absolute	bottom-0 left-0 w-0 text-lg text-center
           font-medium
           group-hover:w-full 
           transition-all duration-700 delay-100 ease-in-out   "
          ></div>
        </div>
        <div className="h-fit w-full px-3  group relative group-hover:border-b ">
          <Link to={"/Education"} className=" relative z-10 pb-2 ">
            Education
          </Link>
          <div
            className="h-0.5 bg-orange-300 absolute	bottom-0 left-0 w-0 text-lg text-center
           font-medium
           group-hover:w-full 
           transition-all duration-700 delay-100 ease-in-out"
          ></div>
        </div>
        <div className="h-fit w-full px-3 group relative group-hover:border-b ">
          <Link to={"/Experience"} className=" relative z-10 pb-2">
            Experience
          </Link>
          <div
            className="h-0.5 bg-orange-300 absolute	bottom-0 left-0 w-0 text-lg text-center
           font-medium
           group-hover:w-full 
           transition-all duration-700 delay-100 ease-in-out"
          ></div>
        </div>
        <div className="h-fit w-full px-3 group relative group-hover:border-b ">
          <Link to={"/Portfolio"} className=" relative z-10 pb-2">
            Portfolio
          </Link>
          <div
            className="h-0.5 bg-orange-300 absolute	bottom-0 left-0 w-0 text-lg text-center
           font-medium
           group-hover:w-full 
           transition-all duration-700 delay-100 ease-in-out   "
          ></div>
        </div>
        <div className="h-fit w-full px-3 group relative group-hover:border-b ">
          <Link to={"/Contact"} className=" relative z-10 pb-2 ">
            Contact
          </Link>
          <div
            className="h-0.5 bg-orange-300 absolute	 bottom-0 left-0 w-0 text-lg text-center
           font-medium
           group-hover:w-full 
           transition-all duration-700 delay-100 ease-in-out   "
          ></div>
        </div>
      </div>

      {/* <div className="block lg:hidden">
        menu
      </div> */}
    </nav>
  );
}

export default Toolbar;
