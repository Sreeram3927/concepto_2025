"use client"

import { HoverEffect } from "./ui/card-hover-effect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

export function Faq() {

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust this value to control when the animation should trigger
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section ref={ref}>
      <motion.div
        className="max-w-screen-2xl mx-auto px-4 py-6 md:px-8 md:py-10"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="mx-auto items-center justify-center text-center">
          <h2 className="mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <h4 className="max-w-screen-sm mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg">
            Have questions about Concepto'24? We're here to help! Whether you're curious about event details, participation guidelines, or anything in between, our FAQ section has you covered. Let's clear up any doubts and ensure you're ready to dive into the Designathon experience with confidence!
          </h4>
          <div className="max-w-5xl mx-auto">
            <HoverEffect items={projects} />
          </div>
        </div>
        
      </motion.div>
    </section>
  );
}
export const projects = [
  {
    title: "Click me to expand",
    description:
      "We're no strangers to love, You know the rules and so do I (do I), A full commitment's what I'm thinking of, You wouldn't get this from any other guy",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  },
];
