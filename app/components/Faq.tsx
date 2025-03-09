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

  const questions = [
    {
      title: "Who can participate in Concepto 2025?",
      description:
        "Concepto 2025 is open to all students and tech enthusiasts! Whether you're a beginner or an experienced innovator, you are welcome to join!",
    },
    {
      title: "Is there a registration fee?",
      description:
        "Yes, this is a paid event: INR 90 for IEEE members and INR 100 for non-members. The fee covers access to all speaker sessions and the ideathon pitching event on Day 2.",
    },
    {
      title: "What should I bring to the event?",
      description:
        "Bring a notebook, laptop, charger, and any other materials you might need for brainstorming and pitching your idea. Ensure you have any required presentation materials prepared beforehand.",
    },
    {
      title: "What is the structure of the event?",
      description:
        "Day 1 will consist of speaker sessions, while Day 2 will focus on the ideathon pitching event. Participants will have the opportunity to present their ideas to a panel of judges.",
    },
    {
      title: "Can I pitch an idea that I've worked on before?",
      description:
        "Yes, you can pitch a previously worked-on idea. However, originality and innovation will be key judging criteria.",
    },
    {
      title: "Are there prizes or awards?",
      description:
        "Yes, participants have the chance to win exciting prizes and recognition for outstanding ideas. Details on prizes will be announced during the event.",
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
    // {
    //   title: "What is the cancellation/refund policy?",
    //   description:
    //     "Unfortunately, registration fees are non-refundable. However, if there are unforeseen circumstances, we will notify participants and explore potential alternatives.",
    // },
  ];

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
            Have questions about Concepto'25? We're here to help! Whether you're curious about event details, participation guidelines, or anything in between, our FAQ section has you covered. Let's clear up any doubts and ensure you're ready to dive into the Designathon experience with confidence!
          </h4>
          <div className="max-w-5xl mx-auto">
            <HoverEffect items={questions} />
          </div>
        </div>
        
      </motion.div>
    </section>
  );
}
