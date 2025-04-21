export default function TodosLosServiciosPage() {
    const servicios = [
      { titulo: "Mecánica General", desc: "Revisión y reparación integral de tu vehículo." },
      { titulo: "Instalación y Mantenimiento de GNC", desc: "Montaje y control de equipos GNC." },
      { titulo: "Alineación y Balanceo", desc: "Mayor seguridad y confort en el manejo." },
      { titulo: "Cambio de Aceite y Filtros", desc: "Servicio rápido para mantener tu motor en óptimas condiciones." },
      { titulo: "Frenos", desc: "Inspección, mantenimiento y reparación de frenos." },
      { titulo: "Suspensión y Tren Delantero", desc: "Diagnóstico y solución para un andar estable." },
      { titulo: "Escaneo Computarizado", desc: "Diagnóstico electrónico preciso y actualizado." },
      { titulo: "Baterías y Electricidad", desc: "Revisión y recambio de sistemas eléctricos." },
      { titulo: "Embrague y Caja", desc: "Reparación de sistema de transmisión y embrague." },
    ];
  
    return (
      <section className="relative min-h-screen overflow-hidden">
        {/* Video de fondo */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videoauto.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
  
        {/* Contenido */}
        <main className="relative z-10 py-20 px-4 bg-[#171717]/40 text-white">
          
        <h1 className="text-4xl font-bold text-[#ff5c02] mb-12 w-full text-center">Todos los Servicios</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {servicios.map((servicio, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition duration-300 bg-[#171717]/80"
                >
                  <h3 className="text-xl font-bold text-[#ff5c02] mb-2">{servicio.titulo}</h3>
                  <p className="text-white">{servicio.desc}</p>
                </div>
              ))}
            </div>
          
        </main>
      </section>
    );
  }
  