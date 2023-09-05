import Card from "@/components/Card/Card";
import Slider from "@/components/Slider/Slider";
import React from "react";

export default function Productos() {
  const items = [{ title: "Item 1" }, { title: "Item 2" }, { title: "Item 3" }];
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
