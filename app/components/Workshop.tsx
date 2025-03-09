"use client";
import { Speakers } from "./Speakers";


export function Workshop() {
  const speakersData = [
    {
      name: "Mayil Vaganan Pandiyan",
      role: "AI Researcher",
      description: "An expert in artificial intelligence and machine learning, specializing in autonomous systems.",
      imagePath: "/img/speakers/mayil_vagan_pandayan.jpg",
    },
    {
      name: "Harish",
      role: "Software Engineer",
      description: "A full-stack developer with a passion for building scalable and efficient web applications.",
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
        <div className="flex space-x-12">
          {speakersData.map((speaker, index) => (
            <Speakers key={index} speaker={speaker} />
          ))}
        </div>
      </div>
    </div>
  );
}

