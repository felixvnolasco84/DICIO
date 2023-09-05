import { PlusCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Card({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex flex-col max-w-[270px] min-h-[519px] justify-between">
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[50px] ">
          <Image src={image} width={100} height={100} alt="" />
          <div className="flex flex-col gap-[10px]">
            <h4 className="text-3xl">{title}</h4>
            <hr className="border-2 border-purple w-[40px]" />
          </div>
        </div>
        <p className="text-lg text-black/50">{description}</p>
      </div>
      <div className="group-hover:flex hidden justify-center">
        <PlusCircle className="h-[40px] w-[40px] cursor-pointer" />
      </div>
    </div>
  );
}
