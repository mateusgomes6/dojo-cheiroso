import Link from 'next/link';
import { MapPin, Phone, Clock} from 'lucide-react';
import { FaInstagram } from "react-icons/fa";

export default function HomeContact() {
    return (
        <section id="contact" className="py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
                    Contato
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Pronto para Começar Sua Jornada?
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed">
                    Entre em contato conosco para agendar uma aula experimental gratuita ou saber mais sobre nossos
                    programas.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-yellow-400" />
                    <p className="text-zinc-300">R. Álvaro de Brito, 946 - Jardins, Aracaju - SE, 49026-030</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-yellow-400" />
                    <p className="text-zinc-300">(79) 9 9922-7222</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-yellow-400" />
                    <div>
                      <p className="text-zinc-300">Segunda - Quinta: 17:10 - 21:30</p>
                      <p className="text-zinc-300">Sexta: 17:10 - 20:00</p>
                      <p className="text-zinc-300">Sábado e Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://wa.me/5512345678901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-zinc-800 p-2 text-white hover:bg-green-500 hover:text-black transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">WhatsApp</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/dojo.tc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="rounded-full bg-zinc-800 p-2 text-white hover:bg-yellow-500 hover:text-black transition-colors">
                    <FaInstagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border border-yellow-500/20 bg-zinc-950 overflow-hidden h-full min-h-[450px]">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 left-0 w-full bg-yellow-500/80 text-black p-3 text-center font-medium z-10">
                    Localização do Dojo Thiago Cheiroso
                  </div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.359111350353!2d-37.0538612!3d-10.9362224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab39307515555%3A0x47faf541584d0e41!2sDoj%C3%B4%20-%20Thiago%20Cheiroso!5e0!3m2!1spt-BR!2sbr!4v1745964444552!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do Dojo Thiago Cheiroso"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};