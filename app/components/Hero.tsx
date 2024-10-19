import React from "react";
import { Vortex } from "./ui/vortex";
import Countdown from "./Countdown"; // Adjust the path as necessary

export function Hero() {
  return (
    <div className="mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="inline-flex items-center font-godfather text-6xl md:text-8xl tracking-mid">
          <a
            href="/" // Change to your desired link
            style={{
              background: "linear-gradient(to right, #CA0F24, #FDDC4F)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent", // Ensures text is clipped to gradient
              transition: "background 0.75s ease",
            }}
            aria-label="logo"
          >
            Concepto'24
          </a>
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Ignite Your Design Genius.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Countdown />
        </div>
      </Vortex>
    </div>
  );
}
