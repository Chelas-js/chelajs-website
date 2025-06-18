import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@components/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Chela.js – La comunidad de desarrolladores que conecta, comparte y crea 🚀",
  description:
    "Únete a Chela.js, el espacio donde los desarrolladores se reúnen para hablar de tecnología, compartir conocimientos y construir juntos. Eventos, networking y buena conversación en un ambiente relajado. ¡Grandes cosas están por venir! 🍻",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
