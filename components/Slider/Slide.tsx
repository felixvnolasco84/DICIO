"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

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
        <div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="customRange1"
              className="inline-block text-lg text-black/80 dark:text-neutral-200"
            >
              Segundos
            </label>
            <span className="text-4xl">2.5</span>
          </div>
          <input
            type="range"
            className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-gradient-to-r from-[#6236ff00] to-[#6236FF]"
            id="customRange1"
          />
          <span className="text-xs">*Tiempo de procesamiento en servidor</span>
        </div>

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
