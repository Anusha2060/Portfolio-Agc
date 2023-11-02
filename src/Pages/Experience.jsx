import React from "react";

function Experience() {
  return (
    <div className="flex w-11/12 sm:w-9/12   md:w-5/6 mx-auto flex-col items-center mt-14 justify-center ">
      <div className="text-xl font-semibold text-orange-300 uppercase	">
        Experience
      </div>

      <div className="w-full group cursor-pointer">
        <div className="p-4 py-5 w-full md:p-5 h-5/6 font-medium back text-orange-300 capitalize text-xl mt-14 md:text-2xl">
          Currently doing Internship in HUB IT.
        </div>
        <div className="h-0 bg-slate-200 text-base w-full md:text-xl text-center opacity-0 text-black font-medium group-hover:h-32 pt-1 transition-all duration-700 delay-100 ease-in-out rounded-b-md	 group-hover:opacity-100  ">
          Working Under "Hari Prasad Banjade" Since 2022 - Present.
          <br />
          For more enquiry: <br />
          Phone number - +977 71-532805
          <br />
          Email - training@hubit.com.np
        </div>
      </div>
    </div>
  );
}

export default Experience;
