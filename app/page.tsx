export default function Home() {
  return (
    <>
      <canvas className="orb-canvas"></canvas>
      <main className="overlay flex flex-col width-[616px] gap-[14px] container h-screen items-center justify-center">
        <div className="flex flex-col w-[616px] gap-6 items-center">
          <h1 className="text-[57px] leading-[74px] text-black/80">
            La solución de identidad digital, No. 1 en México.
          </h1>
          <p className="w-full text-3xl text-center text-black/50">
            Te acompañamos en la automatización de procesos de validación de
            identidad en todas las verticales de tu organización.
          </p>
        </div>
        <div className="w-[506px] h-[273px] bg-gray-600"></div>
      </main>
    </>
  );
}



