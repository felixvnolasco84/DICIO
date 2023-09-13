import React, { useState, DragEvent, ChangeEvent } from "react";
import Image from "next/image";
import SVGIMG from "../../lib/images/upload-svgrepo-com.svg";

function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const preventDefault = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="flex items-center min-w-[320px] min-h-[223px] border-dashed border-[3px] border-[#B1B4B7] rounded-lg"
      onDrop={handleDrop}
      onDragOver={preventDefault}
    >
      <div className="w-full">
        <div className="mt-12 mb-12 mv flex flex-col gap-6 items-center">
          <Image src={SVGIMG} width={84} height={84} alt="" />
          <label
            htmlFor="image-input"
            className="text-base text-center text-[#6D7278]"
          >
            Arrastra una imagen aquí *
          </label>
        </div>
        <input
          type="file"
          accept="image/*"
          id="image-input"
          style={{ display: "none" }}
          onChange={handleFileInput}
        />
        {image && (
          <div className="p-4">
            <span className="mt-4 text-base font-bold text-black/50">
              Imagen Seleccionada:
            </span>
            <img
              src={image}
              alt="Imagen seleccionada"
              className="uploaded-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUploader;
