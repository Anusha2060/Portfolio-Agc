import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Contact() {
  return (
    <div className="flex flex-col items-center mt-14 justify-center pb-10">
      <div className="text-xl font-semibold text-orange-300	uppercase">
        Contact
      </div>
      <div className="text-2xl uppercase md:text-3xl font-semibold pt-6">
        <Typewriter
          words={["way to contact me"]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={230}
          delaySpeed={1000}
        />
      </div>

      <div className="border-t-2 border-orange-300 w-32 mt-1"></div>
      <div className="w-10/12 md:w-6/12 text-center text-xl pt-10">
        Let's grab a cup of coffee. Feel free to reach out of any project
        related inquiries and I'll follow up as soon as possible.
      </div>
      <div className=" flex flex-col mt-16 cursor-pointer md:grid grid-cols-3 gap-5">
        <div className="w-full h-full wrap flex gap-5 p-2 pr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"
            />
          </svg>
          <div className="text-base text-orange-300">
            anushagc2060@gmail.com
          </div>
        </div>

        <div className="w-full h-full wrap flex gap-5 p-2 pr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
            />
          </svg>

          <div className="text-base text-orange-300">anusha_chhetri</div>
        </div>

        <div className="w-full h-full wrap flex gap-5 p-2 pr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
            />
          </svg>

          <div className="text-base text-orange-300">anusha__gc</div>
        </div>

        <div className="w-full h-full wrap flex gap-5 p-2 pr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225h-2.6Z"
            />
          </svg>

          <div className="text-base text-orange-300">Anusha Gc</div>
        </div>

        <div className="w-full h-full wrap flex gap-5 p-2 pr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
            />
          </svg>

          <div className="text-base text-orange-300">Anusha Chhetri</div>
        </div>

        <div className="w-full h-full wrap flex gap-5 p-2 pr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
            />
          </svg>

          <div className="text-base text-orange-300">Anusha2060</div>
        </div>
      </div>

      {/* FORM */}
      <div className=" w-10/12 wrap mt-16 h-10/12  p-5 md:w-5/12   rounded-md	">
        <div className="capitalize text-xl font-semibold text-center">
          drop a line
        </div>
        <div className="w-9/12 md:w-7/12 m-auto flex flex-col gap-5 mt-10 pb-5">
          <div className="flex flex-col ">
            <label className="text-base"> Your Name:</label>
            <input
              type="text"
              className=" outline-none p-1 border-b-2 border-orange-300 bg-transparent "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-base"> Email:</label>
            <input
              type="text"
              className=" outline-none p-1 border-b-2 border-orange-300 bg-transparent "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base"> Subject:</label>
            <input
              type="text"
              className=" outline-none p-1 border-b-2 border-orange-300 bg-transparent "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base"> Message:</label>
            <textarea
              rows={2}
              className="outline-none p-1 border-b-2 bg-transparent	border-orange-300	 responsive"
            ></textarea>
          </div>
          <div className="relative w-32 group">
            <div className="h-full w-0 absolute group-hover:w-32 transition-all duration-1000 delay-500 ease-in-out send"></div>
            <button className="text-orange-300 relative z-10 text-base capitalize cursor-pointer p-2">
              send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
