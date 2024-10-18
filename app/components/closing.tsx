"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function Closing() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-4">
        <div className="text-center md:text-left md:mr-8"> {/* Wrap text for alignment */}
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-white dark:text-white font-sans tracking-tight">
            Are you Ready for it?{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Concepto.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Concepto.</span>
              </div>
            </div>
          </h2>
          <p className="mt-2 text-lg text-white dark:text-white"> {/* Description text */}
            Join us and discover the art of designing! Register now to get started.
          </p>
          <button className="mt-4 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition duration-300">
            Register
          </button>
        </div>
        <img
          src="img/About-Banner.jpg" 
          alt="Description of the image" 
          className="mt-4 md:mt-0 md:ml-8 w-full md:w-auto rounded-lg"
        />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
