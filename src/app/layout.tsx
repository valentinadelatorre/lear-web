import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
      <body className={cn(inter.className, "bg-white text-black")}>
        {children}
        <a
  href="https://wa.me/5491133473337" // cambiá este número por el de tu taller
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50"
>
  <img
    src="/whatsapp-icon.png" // asegurate de tener este ícono en la carpeta public
    alt="WhatsApp"
    className="w-30 h-30 hover:scale-110 transition-transform duration-300"
  />
</a>

      </body>
    </html>
  );
}
