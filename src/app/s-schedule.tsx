export default function HomeSchedule() {
    return (
        <section id="schedule" className="py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
                  Horários
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Grade de Horários</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Confira nossos horários de aulas e encontre o melhor momento para seu treinamento.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-yellow-500/20">
                      <th className="p-4 text-left text-yellow-400">Horário</th>
                      <th className="p-4 text-center text-yellow-400">Segunda</th>
                      <th className="p-4 text-center text-yellow-400">Terça</th>
                      <th className="p-4 text-center text-yellow-400">Quarta</th>
                      <th className="p-4 text-center text-yellow-400">Quinta</th>
                      <th className="p-4 text-center text-yellow-400">Sexta</th>
                      <th className="p-4 text-center text-yellow-400">Sábado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-yellow-500/10">
                      <td className="p-4 text-left font-medium">06:00 - 07:00</td>
                      <td className="p-4 text-center">Adultos Iniciante</td>
                      <td className="p-4 text-center">Adultos Avançado</td>
                      <td className="p-4 text-center">Adultos Iniciante</td>
                      <td className="p-4 text-center">Adultos Avançado</td>
                      <td className="p-4 text-center">Adultos Iniciante</td>
                      <td className="p-4 text-center">-</td>
                    </tr>
                    <tr className="border-b border-yellow-500/10">
                      <td className="p-4 text-left font-medium">09:00 - 10:00</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">Infantil</td>
                    </tr>
                    <tr className="border-b border-yellow-500/10">
                      <td className="p-4 text-left font-medium">10:00 - 11:00</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">Adultos Misto</td>
                    </tr>
                    <tr className="border-b border-yellow-500/10">
                      <td className="p-4 text-left font-medium">17:00 - 18:00</td>
                      <td className="p-4 text-center">Infantil</td>
                      <td className="p-4 text-center">Infantil</td>
                      <td className="p-4 text-center">Infantil</td>
                      <td className="p-4 text-center">Infantil</td>
                      <td className="p-4 text-center">Infantil</td>
                      <td className="p-4 text-center">-</td>
                    </tr>
                    <tr className="border-b border-yellow-500/10">
                      <td className="p-4 text-left font-medium">18:30 - 19:30</td>
                      <td className="p-4 text-center">Adultos Iniciante</td>
                      <td className="p-4 text-center">Adultos Avançado</td>
                      <td className="p-4 text-center">Adultos Iniciante</td>
                      <td className="p-4 text-center">Adultos Avançado</td>
                      <td className="p-4 text-center">Adultos Misto</td>
                      <td className="p-4 text-center">-</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-left font-medium">20:00 - 21:30</td>
                      <td className="p-4 text-center">Equipe Competição</td>
                      <td className="p-4 text-center">Equipe Competição</td>
                      <td className="p-4 text-center">Equipe Competição</td>
                      <td className="p-4 text-center">Equipe Competição</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 rounded-lg border border-yellow-500/20 bg-zinc-950 p-4">
                <h4 className="mb-2 text-lg font-bold text-yellow-400">Observações:</h4>
                <ul className="list-disc pl-5 text-zinc-400 space-y-1">
                  <li>Aulas com duração de 1 hora (exceto treino de competição)</li>
                  <li>Chegar com 10 minutos de antecedência</li>
                  <li>Uso de kimono obrigatório</li>
                  <li>Agende uma aula experimental gratuita pelo WhatsApp</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    );
};