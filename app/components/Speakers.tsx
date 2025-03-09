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

export function Speakers({ speaker } : { speaker: Speaker }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {speaker.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {speaker.role}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={speaker.imagePath}
            height={300}
            width={300}
            className="object-cover rounded-xl group-hover/card:shadow-xl"
            alt={speaker.name}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
