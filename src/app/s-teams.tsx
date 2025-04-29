import Image from 'next/image';

export default function HomeTeams() {
    return (
        <section id="teams" className="py-20 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
                  Nossas Equipes
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Conheça Nossas Equipes</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Equipes de alto rendimento representando nosso dojo em competições nacionais e internacionais.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg border border-yellow-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Equipe de Muay Thai"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Muay Thai</h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Arte marcial tailandesa conhecida como a "Arte das Oito Armas", utilizando punhos, cotovelos,
                    joelhos e canelas.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-yellow-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Equipe de Jiu Jitsu"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
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