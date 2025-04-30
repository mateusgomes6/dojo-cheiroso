import Image from "next/image";

export default function HomeTeams() {
  return (
    <section id="teams" className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
              Artes Marciais
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Conheça nossas Artes Marciais
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
          <section id="MuayThai" className="py-20 bg-black">
            <div className="group relative flex flex-col h-[500px] rounded-lg border border-yellow-500/20 overflow-hidden bg-zinc-900">
              <div className="relative flex-1 min-h-0">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80 z-10"></div>
                <Image
                  src="/foto1-dojo.png"
                  alt="Equipe de Muay Thai"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-none h-[25%] bg-zinc-900 p-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-1.5">
                  Muay Thai
                </h3>
                <p className="text-sm text-yellow-400/90 leading-snug">
                  Arte marcial tailandesa conhecida como a "Arte das Oito
                  Armas", utilizando punhos, cotovelos, joelhos e canelas.
                </p>
              </div>
            </div>
          </section>
          <section id="JiuJitsu" className="py-20 bg-black">
            <div className="group relative flex flex-col h-[500px] rounded-lg border border-yellow-500/20 overflow-hidden bg-zinc-900">
              <div className="relative flex-1 min-h-0">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-transparent to-transparent opacity-80 z-10"></div>
                <Image
                  src="/foto3-dojo.jpeg"
                  alt="Equipe de Jiu Jitsu"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover object-[center_top] transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-none h-[25%] bg-zinc-900 p-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-1.5">
                  Jiu Jitsu
                </h3>
                <p className="text-sm text-yellow-400/90 leading-snug">
                  Arte marcial brasileira focada em técnicas de solo, alavancas
                  e finalizações, onde o menor pode vencer o maior.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
