"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import RangeSlider from "../RangeSlider/RangeSlider";
import AnimatedRangeSlider from "../RangeSlider/AnimatedRangeSlider";

export default function Slide({
  title,
  description,
  buttons,
  path,
}: {
  title: string;
  description: string;
  buttons: any[];
  path: string;
}) {
  return (
    <div className="flex flex-col gap-[45px]">
      <div className="flex flex-col gap-[12px]">
        <h2 className="text-6xl">{title}</h2>
        <p className="text-2xl text-black/50">{description}</p>
      </div>
      <div className="flex flex-col gap-[60px]">
       <AnimatedRangeSlider showComponent={true}/>

        <div className="group flex gap-[10px]">
          {/* <Link href={path}> */}
            {buttons?.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                size={button.size}
                onClick={button.onClick}
                className={button.className}
              >
                {button.title}
              </Button>
            ))}
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
