"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function Closing() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between px-6 md:px-12 py-4 gap-8">
        {/* Text content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-white dark:text-white font-sans tracking-tight">
            Are you Ready for it?{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat font-godfather tracking-mid font-normal text-transparent bg-gradient-to-r py-4 from-red to-yellow [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Concepto 24.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat font-godfather tracking-mid font-normal bg-gradient-to-r from-red to-yellow py-4">
                <span>Concepto 24.</span>
              </div>
            </div>
          </h2>
          <p className="mt-2 text-lg text-white dark:text-white">
            Join us and discover the art of designing! Register now to get started.
          </p>
          <button className="mt-4 bg-yellow text-black font-alien font-bold tracking-low text-xl py-2 px-4 rounded-lg hover:opacity-90 transition hover:scale-105 duration-300">
            Register
          </button>
        </div>
        {/* Image */}
        <div>
        <img
            src="img/grp_pic.jpeg"
            alt="Description of the image"
            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105 filter grayscale"
          />
          
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
