"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function Closing() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between px-6 md:px-12 py-4 gap-8">
        {/* Text content */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl relative z-20 lg:text-6xl font-bold text-white dark:text-white font-sans tracking-tight">
            Are you Ready for it?{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat font-godfather tracking-mid font-normal text-transparent bg-gradient-to-r py-4 from-red to-yellow [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Concepto 25</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat font-godfather tracking-mid font-normal bg-gradient-to-r from-red to-yellow py-4">
                <span>Concepto 25</span>
              </div>
            </div>
          </h2>
          <p className="text-base lg:text-lg leading-relaxed text-white mb-6 text-justify">
            Don't miss out on this incredible opportunity to enhance your problem-solving skills and collaborate with like-minded innovators!  
            Whether you're an experienced thinker or just starting out, this ideathon is designed to inspire and challenge you.  
            <br /><br />
            Secure your spot today and get ready for a creative journey like no other!
            Spaces are limited, so register now to avoid missing out!
          </p>
          <div className="text-center">
            <a href="https://konfhub.com/8fc956e1-9f3a-4c6a-b9cc-a7d5880a4ade" className="mt-4 bg-yellow text-black font-alien font-bold tracking-low text-xl py-2 px-4 rounded-lg hover:opacity-90 transition hover:scale-105 duration-300">
              Register
            </a>
          </div>
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
