"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

type Speaker = {
  name: string;
  role: string;
  description: string;
  imagePath: string;
};

export function Speakers({ speaker }: { speaker: Speaker }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card bg-white/10 border border-white/20 transition-all duration-300 ease-in-out hover:bg-white/20 hover:border-white/30 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto max-w-[15rem] sm:max-w-[30rem] sm:w-[30rem] h-auto rounded-xl p-6">
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-white dark:text-white"
        >
          {speaker.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm sm:text-base max-w-full mt-2 dark:text-neutral-300"
        >
          {speaker.role}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-500 text-justify text-sm sm:text-base max-w-full mt-2 dark:text-neutral-300"
        >
          {speaker.description}
        </CardItem>
        <CardItem 
          translateZ="100" 
          className="w-full mt-4 flex justify-center items-center"
        >
          <Image
            src={speaker.imagePath}
            height={250}
            width={250}
            className="w-full max-w-[250px] sm:max-w-[300px] object-cover rounded-xl group-hover/card:shadow-xl"
            alt={speaker.name}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
