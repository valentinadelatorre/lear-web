"use client";

import { useEffect, useRef, useState } from 'react';
import { montserrat } from "@/app/layout";

function useCounter(end: number, duration: number) {
  const [count, setCount] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.floor(duration / end);

    ref.current = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end && ref.current) {
        clearInterval(ref.current);
        ref.current = null;
      }
    }, incrementTime);

    return () => {
      if (ref.current !== null) {
        clearInterval(ref.current);
      }
    };
  }, [end, duration]);

  return count;
}




import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" text-black font-sans scroll-smooth">
     
     
     
     
      {/* HEADER */}
 




<section className="py-32 px-14 bg-[#1a1a1a]">
<video
          className="absolute top-0 left-0 w-full h-full opacity-40 object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videoauto.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
  <div className="max-w-7xl relative w-full grid md:grid-cols-2 gap-6 items-center">
    
    {/* Columna izquierda - Texto centrado */}
    <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left pt-8 md:pl-15">


      <h1 className={`${montserrat.className} text-5xl  text-[#ff5c02] font-extrabold mb-6`}>
        Expertos en Mecánica Integral y GNC
      </h1>
      

      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
        <a href="#contacto">
          <Button className="bg-[#ff5c02] hover:bg-[#ff5c02] text-white px-6 py-3 rounded-xl text-base font-semibold">
            Solicitá Asesoría
          </Button>
        </a>
        <a href="/todos-los-servicios" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="text-[#ff5c02] border-[#ff5c02] hover:bg-[#1a1a1a]/10 px-6 py-3 rounded-xl text-base font-semibold">
            Todos los servicios
          </Button>
        </a>
      </div>
    </div>

    {/* Columna derecha - Tarjeta alineada a la derecha */}
    <div className="flex justify-center md:justify-end pl-4 pt-6 mt-8">

      <div className="relative w-full max-w-[500px] h-[240px] bg-cover bg-center rounded-2xl shadow-xl overflow-hidden"
           style={{ backgroundImage: "url('https://i.postimg.cc/k4DbDdjM/Screenshot-2025-04-20-at-11-31-22-PM.png')" }}>
        
        <div className="relative z-10 text-white p-6 flex flex-col justify-between h-full">
          <div className="flex justify-between items-start w-full">
            <div className="inline-block bg-[#ff5c02] text-white text-xs font-bold px-4 py-1 rounded-full">
              MECÁNICA AVANZADA
            </div>
            <div className="text-right">
              <div className="text-sm tracking-wide">ACCESO</div>
              <div className="font-mono text-lg text-[#ff5c02] font-bold">ZONA OESTE</div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#ff5c02] rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-[#ff5c02] rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-[#ff5c02] rounded-full inline-block"></span>
            </div>
            <button className="bg-[#ff5c02] text-white px-5 py-2 rounded-full font-semibold">
              VÁLIDO
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>



 






      {/* SERVICIOS */}
<section id="servicios" className="relative py-0 px-6 text-center overflow-hidden bg-[#1a1a1a]">
<div className="h-0.5 w-full overflow-hidden">
  <div className="h-full w-full bg-[#ff5c02] animate-slide" />
</div>
  <div className="relative z-10 max-w-7xl mx-auto">
    <h2 className={` ${montserrat.className} text-4xl font-semibold mb-16 text-[#ff5c02] mt-10`}>Servicios Destacados </h2>
    <div className="grid gap-12 md:grid-cols-3">
      <div className="p-8 border rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-md">
        <h3 className="text-2xl font-semibold mb-4">Mecánica Integral</h3>
        <p className="text-gray-600 leading-relaxed">
          Reparación, mantenimiento general, frenos, tren delantero, suspensión y más.
        </p>
      </div>
      <div className="p-8 border rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-md">
        <h3 className="text-2xl font-semibold mb-4">Colocación y prueba de GNC</h3>
        <p className="text-gray-600 leading-relaxed">
          Instalación de equipos, prueba hidráulica, mantenimiento y renovación de obleas.
        </p>
      </div>
      <div className="p-8 border rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-md">
        <h3 className="text-2xl font-semibold mb-4">Diagnóstico Computarizado</h3>
        <p className="text-gray-600 leading-relaxed">
          Análisis electrónico para detectar fallas con herramientas de última generación.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* CONTACTO */}
      <section id="contacto" className="py-15 px-6 bg-[#1a1a1a] text-center">
      <div className="h-0.5 w-full overflow-hidden mb-12">
  <div className="h-full w-full bg-[#ff5c02] animate-slide" />
</div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-[#ff5c02]">Formulario de Contacto</h2>
          <form className="space-y-6 text-left bg-white p-8 rounded-2xl shadow-md">
            <div>
              <label className="block mb-1 font-medium">Nombre y Apellido</label>
              <input type="text" placeholder="Juan Pérez" className="w-full px-4 py-2 border rounded-md" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" placeholder="tu@email.com" className="w-full px-4 py-2 border rounded-md" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Mensaje</label>
              <textarea rows={4} placeholder="Escribí tu consulta..." className="w-full px-4 py-2 border rounded-md" required></textarea>
            </div>
            <div>
  <label className="block mb-2 font-medium">¿Deseás subir archivos o imágenes? <span className="text-sm font-normal text-gray-500">(opcional)</span></label>
  
  <label htmlFor="fileUpload" className="block w-full cursor-pointer text-center border border-dashed border-gray-400 rounded-md py-4 text-sm text-gray-600 hover:bg-gray-50 transition">
    Tocá para seleccionar desde tu dispositivo
  </label>
  
  <input
    id="fileUpload"
    type="file"
    multiple
    accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    className="hidden"
  />

  <p className="text-xs text-gray-500 mt-2">Podés subir imágenes o archivos relacionados desde tu galería, cámara o computadora.</p>
</div>

            <Button className="bg-[#ff5c02] hover:bg-[#ff5c02] text-white w-full">Enviar consulta</Button>
          </form>
        </div>
        
      </section>


  


      {/* VENTAJAS */}
<section id="nosotros" className="py-12 px-4 bg-[#1a1a1a] text-center">
  {/* LÍNEA ANIMADA SUPERIOR */}
  <div className="h-0.5 w-full overflow-hidden mb-12">
  <div className="h-full w-full bg-[#ff5c02] animate-slide" />
</div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-[#ff5c02]">¿Por qué elegir LEAR?</h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="p-8 border bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl text-black font-semibold mb-3">Atención Personalizada</h3>
              <p className="text-black">Nos tomamos el tiempo para escucharte y brindarte la mejor solución para tu vehículo.</p>
            </div>
            <div className="p-8 border bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl text-black font-semibold mb-3">Tecnología de Punta</h3>
              <p className="text-black">Contamos con equipos modernos para diagnóstico, prueba y mantenimiento profesional.</p>
            </div>
            <div className="p-8 border bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl text-black font-semibold mb-3">Garantía y Confianza</h3>
              <p className="text-black">Ofrecemos garantía sobre nuestros trabajos y te acompañamos en cada paso.</p>
            </div>
          </div>
        </div>
        {/* LÍNEA ANIMADA SUPERIOR */}
        <div className="h-0.5 w-full overflow-hidden mt-12">
  <div className="h-full w-full bg-[#ff5c02] animate-slide" />
</div>

      </section>




      {/* FOOTER */}
<footer className="bg-[#1a1a1a] text-white pb-8 px-6 w-full ">
  
<div className="max-w-7xl mx-auto gap-8 w-full items-start flex flex-center justify-around text-center">


    {/* Ubicación a la izquierda */}
    <div className="flex flex-col items-center md:items-start text-white space-y-3">
      <h4 className="text-[#ff5c02] font-bold text-lg">Ubicación</h4>
      <a href="https://www.google.com/maps?q=Av.+Mosconi+193,+Lomas+del+Mirador,+Buenos+Aires" target="_blank" rel="noopener noreferrer">
        <img src="/ubicacion.png" alt="Ubicación Taller LEAR" className="w-85 h-auto rounded-md shadow-md hover:opacity-90 transition" />
      </a>
      <p className="text-sm">📍 Av. Mosconi 193 - Lomas del Mirador</p>
    </div>

    {/* Contacto en el centro */}
    <div className="flex flex-col items-center md:items-start w-48 text-white space-y-3">
      <h4 className="text-[#ff5c02] font-bold text-lg">Contacto</h4>
      <p className="text-sm">info@leargnc.com.ar</p>
      <p className="text-sm">+54 11 3347 3337</p>
      <p className="text-sm">Lunes a Viernes de 9 a 18 hs</p>
    </div>

    {/* Redes sociales a la derecha */}
    <div className="flex flex-col items-center md:items-start w-48 text-white space-y-3">
      <h4 className="text-[#ff5c02] font-bold text-lg">Redes Sociales</h4>
      <p className="text-sm hover:underline cursor-pointer">Instagram</p>
      <p className="text-sm hover:underline cursor-pointer">Facebook</p>
      <p className="text-sm hover:underline cursor-pointer">WhatsApp</p>
    </div>
  </div>

  {/* Línea inferior */}
  <div className="mt-8 text-center text-sm text-gray-400">
    © 2025 Taller LEAR. Todos los derechos reservados.
  </div>
</footer>

<section>
<div className="h-0.5 w-full overflow-hidden mb-0">
  <div className="h-full w-full bg-[#ff5c02] animate-slide" />
</div>
</section>
    </main>
  );
}
