import { Award, Calendar, Users } from 'lucide-react';

export default function HomeFeatures() {
    return (
        <section id="features" className="py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
                  Nossos Diferenciais
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Por Que Escolher Nosso Dojo
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos uma experiência completa em artes marciais com instrução especializada e instalações
                  modernas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-yellow-500/20 bg-zinc-950 p-6 text-center h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Instrução Especializada</h3>
                <p className="text-zinc-400">
                  Aprenda com o Mestre Thiago Cheiroso e sua equipe de instrutores certificados com décadas de
                  experiência.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-yellow-500/20 bg-zinc-950 p-6 text-center h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20">
                  <Users className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Comunidade</h3>
                <p className="text-zinc-400">
                  Junte-se a uma comunidade de praticantes dedicados ao crescimento mútuo e ao respeito.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-yellow-500/20 bg-zinc-950 p-6 text-center h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20">
                  <Calendar className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Horários Flexíveis</h3>
                <p className="text-zinc-400">
                  Escolha entre vários horários de aulas durante a semana para se adequar ao seu estilo de vida.
                </p>
              </div>
            </div>
          </div>
        </section>
    );
};