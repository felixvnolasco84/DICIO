import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const products = [
  {
    title: "OCR",
    description:
      "Utiliza esta DEMO para extraer los datos de tus identificaciones, aquí puedes subir tu INE o pasaporte.",
    disclaimer:
      "*Formato: Imagen .jpg, .png 900x1500 max.",
    qrImage: "/lib/images/qr-code-svgrepo-com",
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