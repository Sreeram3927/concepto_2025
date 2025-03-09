import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "17th March 2025",
      content: (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4">
          <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
            <span className="text-lg md:text-xl font-extrabold block">Venue: Mini-Hall 1</span>
  
            <span className="text-base md:text-lg font-bold block mt-2">1) UI/UX Workshop</span>
            <ul className="ml-4 md:ml-6 list-disc">
              <li>Instructor: Andrew JF</li>
              <li>Focus: Theory and hands-on design practice</li>
            </ul>

            <span className="text-base md:text-lg font-bold block mt-2">2) PCB Design Workshop</span>
            <ul className="ml-4 md:ml-6 list-disc">
              <li>Instructors: Krittika Roy & Vinnakota Siddarth</li>
              <li>Coverage: Beginner-to-advanced PCB concepts</li>
              <li>Topics:</li>
              <ul className="ml-6 list-circle">
                <li>Schematic capture, layout, and routing</li>
                <li>Hands-on LED circuit design using EasyEDA & KiCAD</li>
                <li>Real-world applications (IoT devices, medical sensors)</li>
              </ul>
            </ul>
          </p>
          <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
            <span className="text-lg md:text-xl font-extrabold block">Venue: Mini-Hall 2</span>
  
            <span className="text-base md:text-lg font-bold block mt-2">1) Undecided Workshop </span>
            <ul className="ml-4 md:ml-6 list-disc">
              <li>Instructor: Prof/Dr. Pulkit Agarwal</li>
              <li>Focus: offering advanced insights or a technical focus (details to be confirmed).</li>
            </ul>

            <span className="text-base md:text-lg font-bold block mt-2">2) No Info</span>
            <ul className="ml-4 md:ml-6 list-disc">
              <li>No Info</li>
              <li>No Info</li>
              <li>No Info</li>
              <ul className="ml-6 list-circle">
                <li>No Info</li>
                <li>No Info</li>
                <li>No Info</li>
              </ul>
            </ul>
          </p>
          </div>
          {/* <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4 mt-0">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "18th March 2025",
      content: (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4">
          <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
            <span className="text-lg md:text-xl font-extrabold block">Venue: Mini-Hall 1</span>
  
            <span className="text-base md:text-lg font-bold block mt-2">1) Concepto Ideathon</span>
            <ul className="ml-4 md:ml-6 list-disc">
              <li>A free event featuring collaborative brainstorming, hackathons, and creative problem-solving to ignite ideas.</li>
            </ul>
          </p>
          <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
            <span className="text-lg md:text-xl font-extrabold block">Venue: Mini-Hall 2</span>
  
            <span className="text-base md:text-lg font-bold block mt-2">1) The A to AI Workshop</span>
            <ul className="ml-4 md:ml-6 list-disc">
              <li>Instructor: Sriram Mandalika</li>
              <li>Coverage: theoretical foundations and practical applications.</li>
              <li>Topics:A comprehensive exploration of AI</li>
            </ul>
          </p>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
    // {
      // title: "17th March 2025",
      // content: (
      //   <div>
      //     <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-8">
      //       Built and launched Aceternity UI and Aceternity UI Pro from scratch
      //     </p>
      //     <div className="grid grid-cols-2 gap-4 ">
      //       <Image
      //         src="https://assets.aceternity.com/templates/startup-1.webp"
      //         alt="startup template"
      //         width={500}
      //         height={500}
      //         className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
      //       />
      //       <Image
      //         src="https://assets.aceternity.com/templates/startup-2.webp"
      //         alt="startup template"
      //         width={500}
      //         height={500}
      //         className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
      //       />
      //       <Image
      //         src="https://assets.aceternity.com/templates/startup-3.webp"
      //         alt="startup template"
      //         width={500}
      //         height={500}
      //         className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
      //       />
      //       <Image
      //         src="https://assets.aceternity.com/templates/startup-4.webp"
      //         alt="startup template"
      //         width={500}
      //         height={500}
      //         className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
      //       />
      //     </div>
      //   </div>
      // ),}
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
