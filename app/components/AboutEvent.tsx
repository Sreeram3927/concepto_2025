"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content: { title: string; description: string | React.JSX.Element; content: React.JSX.Element; }[] = [
  {
    
    title: "Concepto'24",
    description:
      "The Concepto ’24 Designathon is an exciting event aimed at encouraging creativity and innovation in design. Hosted by IEEE SRM Student Branch, the event invites participants to showcase their skills, collaborate, and elevate their design abilities. Scheduled for October 28-29, 2024, from 9:00 AM to 4:30 PM, the Designathon promises to be a hands-on experience for all attendees.",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-white">
        <Image
          src="/img/concepto-image.png"
          width={300}
          height={300}
          className="h-auto w-auto object-cover mb-4"
          alt="Concepto '24"
        />

      </div>
    ),
  },
  {
    title: "Tracks",
    description: (
      <>
        <ul className="mt-4 list-disc list-inside">
          <li>UI/UX Design</li>
          <li>PCB Design</li>
          <li>Concepts for Industrial Applications</li>
          <li>3D Modelling and Prototyping</li>
        </ul>
      </>
    ),
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-white">
        <Image
          src="/img/tracks-image.png"
          width={300}
          height={300}
          className="h-auto w-auto object-cover mb-4"
          alt="Tracks"
        />
      </div>
    ),
  },
  {
    title: "About Speaker",
    description:
      "Muthulakshmi Mahesh, the guest speaker for Concepto ’24 Designathon, is an accomplished UX Designer currently working at Lollypop Design Studio, she brings valuable industry experience in creating user-friendly digital interfaces. Known for her focus on user-centered design, she has worked on a variety of projects that emphasize functionality and aesthetics. At the event, she will share insights on UX design, offering practical advice and inspiration for aspiring designers.",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-white">
        <Image
          src="/img/speaker-image.png"
          width={300}
          height={300}
          className="h-auto w-auto object-cover mb-4"
          alt="Speaker"
        />
      </div>
    ),
  },
  {
    title: <div style={{ visibility: 'hidden' }}> . </div>, // Title with hidden visibility
    description: " ",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-white">
        <Image
          src="/img/content-image.png"
          width={300}
          height={300}
          className="h-auto w-auto object-cover mb-4"
          alt="Running out of content"
        />
        <p>  </p>
      </div>
    ),
  },
    {
    title: <div style={{ visibility: 'hidden' }}> . </div>, // Title with hidden visibility
    description: " ",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-white">
        <Image
          src="/img/content-image.png"
          width={300}
          height={300}
          className="h-auto w-auto object-cover mb-4"
          alt="Running out of content"
        />
        <p>  </p>
      </div>
    ),
  },
  {
    title: <div style={{ visibility: 'hidden' }}> . </div>, // Title with hidden visibility
    description: " ",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-white">
        <Image
          src="/img/content-image.png"
          width={300}
          height={300}
          className="h-auto w-auto object-cover mb-4"
          alt="Running out of content"
        />
        <p>  </p>
      </div>
    ),
  },
];

export function AboutEvent() {
  return (
    <div className="w-full"> 
      <StickyScroll content={content} />
    </div>
  );
}