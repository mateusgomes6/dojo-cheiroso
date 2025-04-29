import type React from "react"
import "@/app/globals.css"
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Dojo Thiago Cheiroso - Treinamento de Artes Marciais",
  description:
    "Junte-se ao Dojo Thiago Cheiroso e embarque em uma jornada de disciplina, força e crescimento pessoal através do treinamento em artes marciais.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}

