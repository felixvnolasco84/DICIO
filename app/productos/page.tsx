"use client"


import Card from "@/components/Card/Card";
import Slider from "@/components/Slider/Slider";
import React from "react";


export default function Productos() {

  const items = [
    {
      title: "OCR",
      description:
        "Nuestro módulo de reconocimiento de caracteres reconoce, extrae y procesa el texto de tus documentos con hasta un 98% de efectividad.",
      buttons: [
        {
          title: "Prueba nuestro OCR",
          variant: "default",
          size: "sm",
          onClick: () => console.log("clicked"),          
          path: "/productos/OCR"
        },
        {
          title: "Video demo",
          variant: "outline",
          size: "sm",
          onClick: () => console.log("clicked"),
          className: "text-[#6D7278]",
          path: "/productos"
        },
        {
          title: "Video comercial",
          variant: "outline",
          size: "sm",
          onClick: () => console.log("clicked"),
          className: "text-[#6D7278]",
          path: "/productos"
        },
      ],
    },
    {
      title: "Comparación facial",
      description:
        "Nuestro motor de reconocimiento facial captura, analiza y compara el rostro de un usuario en dos dimensiones: 1 a 1, cotejando dos fotografías del mismo individuo, o 1 a N, contrastando una imagen con múltiples fotografías de usuarios en milisegundos.",
      buttons: [
        {
          title: "Haz una prueba",
          variant: "default",
          size: "sm",
          onClick: () => console.log("clicked"),    
          path: "/productos/comparacion-facial"
        },
        {
          title: "Video demo",
          variant: "outline",
          size: "sm",
          onClick: () => console.log("clicked"),
          className: "text-[#6D7278]",
          path: "/productos"
        },
        {
          title: "Video comercial",
          variant: "outline",
          size: "sm",
          onClick: () => console.log("clicked"),
          className: "text-[#6D7278]",
          path: "/productos"
        },
      ],        
    },
    {
      title: "Item 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus possimus beatae voluptas cumque autem saepe.",
    },
  ];

  const components: { title: string; image: string; description: string }[] = [
    {
      image: "/images/alert-dialog.svg",
      title: "Suite de identidad",
      description:
        "Nuestra suite de identidad incluye todas las herramientas de nuestro stock para el uso en cualquier proyecto de tu negocio, aligerando el proceso de desarrollo tecnológico para tu equipo.",
    },
    {
      image: "/images/hover-card.svg",
      title: "Onboarding",
      description:
        "Verifica la Identidad de tus clientes y colaboradores en procesos remotos o presenciales, captura y valida su documentación, ayudando a mantener un expediente digital actualizado y confiable.",
    },
    {
      image: "/images/progress.svg",
      title: "Validación",
      description:
        "Ponemos a tu alcance soluciones totalmente seguras de Identidad Digital con Biometría, IA y Blockchain. Con certificaciones de nivel internacional y soporte personalizado uno a uno.",
    },
  ];

  return (
    <>
      <main className="flex container h-screen items-center justify-center">
        <div className="flex gap-[80px] items-center">
          {components.map(({ image, title, description }) => (
            <Card
              key={title}
              image={image}
              title={title}
              description={description}
            />
          ))}
        </div>
      </main>
      <Slider items={items} />
    </>
  );
}
