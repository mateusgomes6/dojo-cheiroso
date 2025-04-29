import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/95">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-dojo.jpg"
              alt="Logo Dojo Thiago Cheiroso"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-neutral-50 text-sm font-medium hover:text-yellow-400 transition-colors">
              Diferenciais
            </Link>
            <Link href="#schedule" className="text-neutral-50 text-sm font-medium hover:text-yellow-400 transition-colors">
              Horários
            </Link>
            <Link href="#teams" className="text-neutral-50 text-sm font-medium hover:text-yellow-400 transition-colors">
              Artes Marciais
            </Link>
            <Link href="#contact" className="text-neutral-50 text-sm font-medium hover:text-yellow-400 transition-colors">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-yellow-300 hover:bg-yellow-600 text-black">Matricule-se</Button>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-neutral-50">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>
    );
};