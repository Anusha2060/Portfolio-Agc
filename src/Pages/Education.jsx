import React from "react";

function Education() {
  return (
    <div className="flex w-11/12 sm:w-9/12 md:w-5/6  mx-auto flex-col items-center mt-14	pb-5 justify-center ">
      <div className="text-xl  font-semibold text-orange-300 uppercase	">
        Education
      </div>

      <div className="w-full  group cursor-pointer ">
        <div className="p-3 w-full sm:p-5 h-5/6 text-lg font-medium back  text-orange-300 capitalize mt-14 md:text-2xl">
          secondary education examination(SEE) - 3.15GPA
        </div>
        <div className="h-0 bg-slate-200  w-full text-base md:text-xl text-center opacity-0 text-black font-medium group-hover:h-32 pt-1 transitio n-all duration-700 delay-100 ease-in-out rounded-b-md	 group-hover:opacity-100  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          voluptatem alias perferendis nisi sunt, aliquam doloremque eius non
          enim beatae vitae magni, consectetur nam itaque est eaque natus
          corrupti! Sit.
        </div>
      </div>

      <div className="w-full group cursor-pointer">
        <div className="p-3 w-full sm:p-5 h-5/6 back text-orange-300 capitalize font-medium text-lg mt-14 md:text-2xl">
          school leaving certificate(SLC) - 2.75GPA
        </div>
        <div className="h-0 bg-slate-200 text-base  w-full md:text-xl text-center opacity-0 text-black font-medium group-hover:h-32 pt-1 transition-all duration-700 delay-100 ease-in-out rounded-b-md	 group-hover:opacity-100  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          voluptatem alias perferendis nisi sunt, aliquam doloremque eius non
          enim beatae vitae magni, consectetur nam itaque est eaque natus
          corrupti! Sit.
        </div>
      </div>
    </div>
  );
}

export default Education;
