import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const products = [
  {
    title: "OCR",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores labore, nam quas laborum tenetur hic.",
    disclaimer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    qrImage: "/images/qr.svg",
    qrText:
      "Escanea el código para vivir la experiencia en tu dispositivo móvil.",
    buttons: [
      {
        title: "Sube una imagen",
        variant: "default",
        size: "sm",
        onClick: () => console.log("clicked"),
        path: "/",
      },
    ],
  },
];