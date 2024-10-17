"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => setClickedIndex(clickedIndex === idx ? null : idx)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <AnimatePresence>
              {clickedIndex === idx ? (
                <>
                  <CardTitle isActive>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </>
              ) : (
                <CardTitle>{item.title}</CardTitle>
              )}
            </AnimatePresence>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[200px] w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col",
        className
      )}
    >
      <div className="relative z-50 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  isActive,
}: {
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
}) => {
  return (
    <motion.h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide transition-all text-lg absolute", // Removed horizontal centering
        { "top-0 translate-y-0": isActive, "top-1/2 translate-y-[-50%]": !isActive } // Float to the top when active
      )}
      initial={{ opacity: 1 }}
      animate={isActive ? { opacity: 1 } : { opacity: 1 }}
    >
      {children}
    </motion.h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.p
      className={cn(
        "mt-12 text-zinc-400 tracking-wide leading-relaxed text-sm", // Removed horizontal centering
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.p>
  );
};
