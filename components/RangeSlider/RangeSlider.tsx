import React, { useState } from "react";

export default function RangeSlider({ showComponent }: { showComponent: boolean }) {
  // Estado para almacenar el valor del slider
  const [sliderValue, setSliderValue] = useState<number>(2.5);

  // Función para manejar el cambio en el slider
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Obtén el nuevo valor del slider
    const newValue = Number(event.target.value);

    // Verifica si el nuevo valor está dentro del rango permitido
    if (newValue >= 0 && newValue <= 2.5) {
      // Actualiza el estado con el nuevo valor del slider
      setSliderValue(newValue);
    }
  };

  return (
    // Condición para renderizar el componente
    // showComponent es true y sliderValue > 3.0
    showComponent ? (
      <div>
        <div className="flex justify-between items-center">
          <label
            htmlFor="customRange1"
            className="inline-block text-lg text-black/80 dark:text-neutral-200"
          >
            Segundos
          </label>
          <span className="text-4xl">{sliderValue.toFixed(1)}</span>
        </div>
        <input
          type="range"
          className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-gradient-to-r from-[#6236ff00] to-[#6236FF]"
          id="customRange1"
          value={sliderValue} // Establece el valor del slider
          onChange={handleSliderChange} // Maneja el cambio en el slider
          min={0} // Establece el valor mínimo a 0
          max={2.5} // Establece el valor máximo a 2.5
          step={0.1} // Establece el incremento en 0.1
        />
        <span className="text-xs">*Tiempo de procesamiento en servidor</span>
      </div>
    ) : null // Si showComponent es falso o sliderValue <= 3.0, no se muestra nada
  );
}
