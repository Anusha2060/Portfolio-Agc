import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ setsidebar, Sidebarshow }) {
  return (
    <div
      className={`  ${
        Sidebarshow ? "translate-x-0" : "translate-x-full"
      } transition-all duration-700 ease-in-out delay-100 w-screen  fixed  top-0 right-0 lg:hidden grid grid-cols-6 h-screen`}
    >
      <div
        onClick={() => {
          setsidebar(!Sidebarshow);
        }}
        className="col-span-4 h-full w-full bg-black bg-opacity-20"
      ></div>
      <div className={`h-screen col-span-2  bg-white text-black font-medium `}>
        <div className="flex flex-col gap-3 pt-5 text-center cursor-pointer">
          <div className="h-fit w-full px-3 group relative group-hover:border-b ">
            <Link to={"/"} className=" relative z-10 pb-2 ">
              Home
            </Link>
            <div
              className="h-0.5  bg-orange-300 absolute bottom-0 left-0 w-0 text-lg text-center
           font-medium
           group-hover:w-full 
           transition-all duration-700 delay-100 ease-in-out"
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
      </div>
    </div>
  );
}

export default Sidebar;
