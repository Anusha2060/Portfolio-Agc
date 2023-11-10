import { motion } from "framer-motion";

import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center mt-14 justify-center ">
      <div className="text-xl font-semibold text-orange-300	uppercase lg:text-xl">
        About
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 1,
        }}
        // viewport={{
        //   amount: 0.5,
        // }}
        className="uppercase w-full text-center text-2xl lg:text-3xl font-semibold pt-6	"
      >
        junior front-end developer
      </motion.div>
      <div className="border-t-2 border-orange-300 w-1/5 mt-1"></div>
      <motion.div
        // initial={{ x: -1000 }}
        // viewport={{
        //   amount: 0.1,
        // }}
        // whileInView={{ x: 0 }}
        // transition={{
        //   duration: 0.6,
        // }}
        className="text-sm sm:text-xl pt-10 text-center lg:text-2xl w-10/12 md:w-8/12  "
      >
        Frontend web developer adapt at building responsive web applications.
        Passionate about learning new technologies, bringing ideas to life, and
        working with dedicated teams to build efficient and robust applications
        suited to the user's needs.
      </motion.div>
      {/* <div className="text-xl w-1/2 text-center pt-5">
        Frontend web developer adapt at building responsive web applications.
        Passionate about learning new technologies, bringing ideas to life, and
        working with dedicated teams to build efficient and robust applications
        suited to the user's needs.
      </div> */}
    </div>
  );
}

export default About;
