"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string | React.JSX.Element;
    description: string | React.JSX.Element;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Define gradients that transition from black to a color and back to black
  const linearGradients = [
    "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(202, 15, 36, 0.5), rgba(0, 0, 0, 1))", // Black to yellow back to black
    "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(211, 47, 47, 0.5), rgba(0, 0, 0, 1))", // Black to orange back to black
    "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(255, 87, 34, 0.5), rgba(0, 0, 0, 1))", // Black to red back to black
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <>
      <style>
        {`
          /* Hide scrollbar for WebKit browsers */
          .scrollbar-hidden::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }

          /* Hide scrollbar for Firefox */
          .scrollbar-hidden {
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>

      <motion.div
        animate={{
          background: backgroundGradient,
        }}
        className="h-[100vh] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 scrollbar-hidden"
        ref={ref}
      >
        {/* Left and Right container */}
        <div className="relative flex items-start px-4 w-full">
          <div className="flex flex-row justify-between w-full max-w-[1200px] mx-auto">
            {/* Left Text Section */}
            <div className="w-1/2 pr-8">
              <div className="max-w-full">
                {content.map((item, index) => (
                  <div key={String(item.title) + index} className="my-20">
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                      className="text-3xl font-bold text-slate-100"
                    >
                      {item.title}
                    </motion.h2>

                    {/* Conditionally render description based on its content */}
                    {typeof item.description === "string" ? (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                        className="text-lg text-slate-300 mt-4"
                      >
                        {item.description}
                      </motion.p>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                        className="text-lg text-slate-300 mt-4"
                      >
                        {item.description}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Right Image Section */}
            <div className="w-1/2 flex justify-end">
              <motion.div
                className={cn(
                  "h-full w-full max-w-[400px] max-h-[80vh] rounded-md bg-transparent sticky top-10 overflow-hidden", // Constrain height with max-h
                  contentClassName
                )}
              >
                {content[activeCard].content ?? null}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="h-40" />
      </motion.div>
    </>
  );
};
