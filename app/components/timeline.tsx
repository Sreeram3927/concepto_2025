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
              <span className="text-lg md:text-xl font-extrabold block">9:15 AM - 9:30 AM</span>
              <span className="text-base md:text-lg block mt-2">Inauguration</span>
            </p>
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">9:30 AM - 9:45 AM</span>
              <span className="text-base md:text-lg block mt-2">HOD Speech</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4 mt-4">
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">10:00 AM - 11:30 AM</span>
              <span className="text-base md:text-lg block mt-2">Speaker 1 Session</span>
            </p>
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">11:30 AM - 11:45 AM</span>
              <span className="text-base md:text-lg block mt-2">Refreshments</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4 mt-4">
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">11:45 AM - 1:15 PM</span>
              <span className="text-base md:text-lg block mt-2">Speaker 2 Session</span>
            </p>
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">1:15 PM - 2:15 PM</span>
              <span className="text-base md:text-lg block mt-2">Lunch Break</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4 mt-4">
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">2:30 PM - 3:30 PM</span>
              <span className="text-base md:text-lg block mt-2">Panel Discussion</span>
            </p>
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">3:30 PM - 3:45 PM</span>
              <span className="text-base md:text-lg block mt-2">Questions from Participants</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4 mt-4">
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">3:45 PM - 4:15 PM</span>
              <span className="text-base md:text-lg block mt-2">Day 2 Guideline (Ideathon)</span>
            </p>
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">4:15 PM</span>
              <span className="text-base md:text-lg block mt-2">Day 1 Ends</span>
            </p>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4 mt-0">
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
              <span className="text-lg md:text-xl font-extrabold block">9:00 AM - 9:15 AM</span>
              <span className="text-base md:text-lg block mt-2">Introduce the rules of the Ideathon</span>
            </p>
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">9:15 AM</span>
              <span className="text-base md:text-lg block mt-2">Round 1</span>
              <span className="text-lg md:text-xl font-extrabold block mt-2">10:15 - 11:00 AM</span>
              <span className="text-base md:text-lg block mt-2">Round 1 Mentoring</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4 mt-4">
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">11:00 - 11:30 AM</span>
              <span className="text-base md:text-lg block mt-2">Break</span>
            </p>
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">11:30 PM</span>
              <span className="text-base md:text-lg block mt-2">Round 2 - Participants can work on their ideas and presentation</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4 mt-4">
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">12:30 - 1:15 PM</span>
              <span className="text-base md:text-lg block mt-2">Lunch BreakK</span>
            </p>
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">1:30 PM</span>
              <span className="text-base md:text-lg block mt-2">Round 3</span>
              <span className="text-lg md:text-xl font-extrabold block mt-2">2:00</span>
              <span className="text-base md:text-lg block mt-2">2nd Mentoring Session</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4 mt-4">
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">3:00 PM</span>
              <span className="text-base md:text-lg block mt-2">Final 15 teams announcement</span>
            </p>
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">3:05 PM</span>
              <span className="text-base md:text-lg block mt-2">Presentation Starts</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4 mt-4">
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">4:15</span>
              <span className="text-base md:text-lg block mt-2">Judges will work on results / Icebreaker Activities</span>
            </p>
            <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-0">
              <span className="text-lg md:text-xl font-extrabold block">5:30 PM</span>
              <span className="text-base md:text-lg block mt-2">Event Ends</span>
            </p>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-4 mt-0">
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
    // {
    //   title: "17th March 2025",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 text-white white:text-neutral-200 text-xs md:text-sm font-normal mb-8">
    //         Built and launched Aceternity UI and Aceternity UI Pro from scratch
    //       </p>
    //       <div className="grid grid-cols-2 gap-4 ">
    //         <Image
    //           src="https://assets.aceternity.com/templates/startup-1.webp"
    //           alt="startup template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="https://assets.aceternity.com/templates/startup-2.webp"
    //           alt="startup template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="https://assets.aceternity.com/templates/startup-3.webp"
    //           alt="startup template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="https://assets.aceternity.com/templates/startup-4.webp"
    //           alt="startup template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //     </div>
    //   ),
    // }
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}