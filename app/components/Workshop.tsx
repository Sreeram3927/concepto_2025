"use client";
import { Speakers } from "./Speakers";

export function Workshop() {
  const speakersData = [
    {
      name: "Mayil Vaganan Pandiyan",
      role: "FOUNDER CEO-Ellar Metal Parts",
      description: "Indian Air Force veteran with over 30 years of experience in Quality Management Systems and Manufacturing. Manufacturer of Automotive and Aviation metallic parts. Motivational Speaker and Trainer.",
      imagePath: "/img/speakers/mayil_vagan_pandayan.jpg",
    },
    {
      name: "Harish",
      role: "Financial Consultant",
      description: "Finance and investment expert with a passion for empowering individuals to achieve financial freedom. Motivational speaker and educator dedicated to simplifying complex financial concepts for everyone.",
      imagePath: "/img/speakers/harish.jpeg",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white px-10 pt-8">

      {/* Speakers Section */}
      <div className="w-full max-w-screen-lg">
        <h2 className="text-3xl font-bold text-left">Our Speakers</h2>
        <p className="text-lg text-neutral-300 mt-2">
          Meet our expert speakers who are leaders in their respective fields, bringing years of
          experience and insights to share with you.
        </p>

        {/* Responsive Layout for Speakers with Tight Spacing in Column Mode */}
        <div className="flex flex-col sm:flex-row flex-wrap mt-6 justify-start sm:justify-center items-center sm:items-center -space-y-4 sm:space-y-0 sm:gap-8">
          {speakersData.map((speaker, index) => (
            <Speakers key={index} speaker={speaker} />
          ))}
        </div>
      </div>
    </div>
  );
}
