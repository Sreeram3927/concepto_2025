"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastImageRef = useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Recalculate timelineHeight on scroll and resize
  useEffect(() => {
    const updateTimelineHeight = () => {
      if (ref.current && lastImageRef.current) {
        const containerTop = ref.current.getBoundingClientRect().top + window.scrollY;
        const lastImageBottom = lastImageRef.current.getBoundingClientRect().bottom + window.scrollY;
        const newHeight = lastImageBottom - containerTop;
        console.log("Timeline Height:", newHeight); // Debug log
        setTimelineHeight(newHeight);
      }
    };

    updateTimelineHeight();
    window.addEventListener("scroll", updateTimelineHeight);
    window.addEventListener("resize", updateTimelineHeight);
    return () => {
      window.removeEventListener("scroll", updateTimelineHeight);
      window.removeEventListener("resize", updateTimelineHeight);
    };
  }, [data, isMobile]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, timelineHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg font-bold md:text-4xl mb-4 text-white dark:text-white max-w-4xl">
          TimeLine For Concepto'25
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-white text-sm md:text-base max-w-sm">
          “Concepto: Where Ideas Ignite! 🚀 Join us for an electrifying journey of innovation with hackathons, workshops, and limitless possibilities!”
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div
              className="relative pl-20 pr-4 md:pl-4 w-full"
              ref={index === data.length - 1 ? lastImageRef : undefined}
            >
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline Bar */}
        <div
          style={{ height: timelineHeight || "100%" }} // Fallback to 100% if height is 0
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};