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
        className="max-w-screen-2xl mx-auto bg-black px-4 py-6 md:px-8 md:py-10"
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
  // {
  //   title: "What is Concepto 2024?",
  //   description:
  //     "Concepto 2024 is a two-day event packed with exciting hackathons, designathons, workshops, and challenges aimed at helping participants enhance their tech and design skills. Whether you’re a seasoned developer, designer, or just getting started, Concepto 2024 is a great platform to learn, collaborate, and innovate.",
  // },
  {
    title: "Who can participate in Concepto 2024?",
    description:
      "Concepto 2024 is open to all students and tech enthusiasts! Whether you're a beginner or an experienced coder/designer.",
  },
  {
    title: "Is there a registration fee?",
    description:
      "Yes, there is a registration fee: INR 170 for IEEE members and INR 199 for non-members. The fee covers access to all events, workshops, and resources provided during the two days.",
  },
  // {
  //   title: "How do I register for the event?",
  //   description:
  //     "You can register for the event by clicking on the Register button on our official Concepto 2024 webpage. Make sure to complete the registration process and pay the required fees to secure your spot.",
  // },
  {
    title: "What should I bring to the event?",
    description:
      "Bring a laptop, charger, and any other equipment you might need for coding or designing. Make sure your development environment is set up beforehand to maximize your productivity.",
  },
  {
    title: "Will there be mentorship or guidance during the event?",
    description:
      "Yes, we will have mentors available throughout the event to help guide participants through the workshops and the hackathon.",
  },
  // {
  //   title: "What is the structure of the event?",
  //   description:
  //     "The event is divided into two main parts: Day 1 focuses on learning, with workshops on UI/UX design, coding best practices, and design principles. Day 2 features a hackathon and designathon where participants can apply the knowledge gained from Day 1 to create projects, prototypes, or designs.",
  // },
  {
    title: "Are there prizes or awards?",
    description:
      "Yes, participants have the chance to win exciting prizes and recognition for outstanding projects. Details on prizes will be announced during the event.",
  },
  {
    title: "Do I need to have a team?",
    description:
      "You can participate solo or in teams. If you don't have a team, you will have the opportunity to connect with other participants at the event to form teams.",
  },
  {
    title: "Where will the event be held?",
    description:
      "The event will take place at Mini Hall 2 (T P Ganesan). More specific instructions regarding the venue will be shared with registered participants closer to the event.",
  },
  {
    title: "Will I receive a certificate for participating?",
    description:
      "Yes, all participants will receive a certificate of participation. Special awards will also be given to standout teams or individuals.",
  },
  {
    title: "What is the cancellation/refund policy?",
    description:
      "Unfortunately, registration fees are non-refundable. However, if there are unforeseen circumstances, we will notify participants and explore potential alternatives.",
  },
];

