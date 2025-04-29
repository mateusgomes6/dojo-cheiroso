import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-yellow-500/20 bg-black py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo-dojo.jpg"
                  alt="Logo Dojo Thiago Cheiroso"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </Link>
              <p className="text-sm text-zinc-400">
                Capacitando indivíduos através do treinamento em artes marciais e desenvolvimento pessoal desde 2005.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Links Rápidos</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#features" className="text-sm text-zinc-400 hover:text-yellow-400 transition-colors">
                  Diferenciais
                </Link>
                <Link href="#schedule" className="text-sm text-zinc-400 hover:text-yellow-400 transition-colors">
                  Horários
                </Link>
                <Link href="#teams" className="text-sm text-zinc-400 hover:text-yellow-400 transition-colors">
                  Nossas Equipes
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t border-yellow-500/20 pt-8 text-center">
            <p className="text-xs text-zinc-400">
              &copy; {new Date().getFullYear()} Dojo Thiago Cheiroso. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    );
};