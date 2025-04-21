import "./globals.css";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

export const montserrat = Montserrat({ subsets: ["latin"] });

export const Metadata = {
  title: "Taller LEAR",
  description: "Servicio de mecánica integral y GNC en Buenos Aires",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={cn(montserrat.className, "bg-[#1a1a1a] text-black")}>
      <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50 px-6 py-4 flex justify-between items-center">
      <div className="h-12 w-auto flex items-center">
  <img
    src="/logo.png"
    alt="Taller LEAR"
    className="max-h-full object-contain"
  />
</div>


<nav className="space-x-6 hidden md:flex text-[#ff5c02] font-bold">
  <a href="/todos-los-servicios" className="hover:underline hover:opacity-90 transition">Servicios</a>
  <a href="#nosotros" className="hover:underline hover:opacity-90 transition">Nosotros</a>
  <a href="#contacto" className="hover:underline hover:opacity-90 transition">Contacto</a>
</nav>

</header>

        {children}
        
        <a
          href="https://wa.me/5491133473337"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50"
        >
          <img
            src="/whatsapp-icon.png"
            alt="WhatsApp"
            className="w-15 h-15 hover:scale-110 transition-transform duration-300"
          />
        </a>
      </body>
    </html>
  );
}
