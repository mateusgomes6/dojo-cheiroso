import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export default function HomeHero() {
    return (
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          {/* Imagem de fundo com overlay escuro */}
          <div className="absolute inset-0 bg-black/70">
            {/* Aqui você vai adicionar sua imagem de fundo */}
            <Image
              src="/placeholder.svg?height=600&width=1600"
              alt="Fundo Dojo"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>

          {/* Conteúdo centralizado */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            {/* Logo circular */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-black/40 p-2 mb-6 overflow-hidden flex items-center justify-center">
              <Image
                src="/logo-dojo.jpg"
                alt="Logo Dojo Thiago Cheiroso"
                width={160}
                height={160}
                className="rounded-full"
              />
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Dojo Thiago Cheiroso</h1>

            {/* Endereço */}
            <p className="text-lg text-zinc-200 mb-6">Rua das Artes Marciais, 123, Cidade, Estado</p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 text-lg">
                Comece sua jornada nas artes marciais
              </Button>
              <Link
                href="https://wa.me/5512345678901?text=Olá!%20Gostaria%20de%20informações%20sobre%20as%20aulas%20do%20Dojo%20Thiago%20Cheiroso."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-lg flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Fale conosco
                </Button>
              </Link>
            </div>
          </div>
        </section>
    );
};