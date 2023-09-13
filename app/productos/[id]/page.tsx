"use client";

import React from "react";
import Image from "next/image";
import { products } from "@/lib/utils";
import SVGIMG from "../../../lib/images/qr-code-svgrepo-com.svg";
import ImageUploader from "@/components/ImageUploader/ImageUploader";

export default function page({ params }: any) {
  const { id } = params;
  const product: any = products.find((product: any) => product.title === id);

  const { title, description, disclaimer, qrImage, qrText } = product;

  console.log(product);

  return (
    <div className="flex container h-screen items-center justify-start">
      <div className="flex flex-col gap-10 text-2xl max-w-[640px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-6xl text-black/80">{title}</h2>
          <p>{description}</p>
          <span className="text-xs text-black/50">{disclaimer}</span>
        </div>

        <div className="flex gap-24">
          <ImageUploader />
          <div className="flex flex-col gap-4 max-w-[120px]">
            <Image src={SVGIMG} width={120} height={120} alt="" />
            <span className="text-xs text-black/50">{qrText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
