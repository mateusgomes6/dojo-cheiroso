import Image from 'next/image';

export default function HomeTeams() {
    return (
        <section id="teams" className="py-20 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
                  Artes Marciais
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Conheça nossas Artes Marciais</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <div className="bg-yellow-400 group relative overflow-hidden rounded-lg border border-yellow-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <Image
                  src="/foto1-dojo.png"
                  alt="Equipe de Muay Thai"
                  width={600}
                  height={400}
                  className="h-100 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Muay Thai</h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Arte marcial tailandesa conhecida como a "Arte das Oito Armas", utilizando punhos, cotovelos,
                    joelhos e canelas.
                  </p>
                </div>
              </div>
              <div className="bg-yellow-400 group relative overflow-hidden rounded-lg border border-yellow-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <Image
                  src="/foto3-dojo.jpeg"
                  alt="Equipe de Jiu Jitsu"
                  width={600}
                  height={400}
                  className="h-100 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Jiu Jitsu</h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Arte marcial brasileira focada em técnicas de solo, alavancas e finalizações, onde o menor pode
                    vencer o maior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};