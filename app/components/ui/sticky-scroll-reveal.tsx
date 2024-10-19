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
    title: string;
    description: string;
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

  const linearGradients = [
    "linear-gradient(to bottom right, #CA0F24, #FDDC4F)", // Red to yellow
    "linear-gradient(to bottom right, #D32F2F, #FFEB3B)", // Another shade of red to yellow
    "linear-gradient(to bottom right, #FF5722, #FFC107)", // Orange to yellow transition
  ];

  const backgroundGradients = [
    "linear-gradient(to bottom right, #A52A2A, #E0C078)", // Muted red to dull yellow
    "linear-gradient(to bottom right, #B03A3A, #D4C468)", // Muted red to pale yellow
    "linear-gradient(to bottom right, #D2691E, #D8B76C)", // Muted orange to muted yellow
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

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
          background: backgroundGradients[activeCard % backgroundGradients.length],
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
                  <div key={item.title + index} className="my-20">
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                      className="text-3xl font-bold text-slate-100"
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                      className="text-lg text-slate-300 mt-4"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Image Section */}
            <div className="w-1/2 flex justify-end">
              <motion.div
                style={{ background: backgroundGradient }}
                className={cn(
                  "h-full w-full max-w-[400px] max-h-[80vh] rounded-md bg-white sticky top-10 overflow-hidden", // Constrain height with max-h
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