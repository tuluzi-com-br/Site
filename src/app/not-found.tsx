import Link from "next/link";
import { Flor } from "@/components/Flor";
import { Seta } from "@/components/Icones";

export default function NaoEncontrado() {
  return (
    <section className="flex min-h-[70svh] flex-col items-center justify-center px-6 py-24 text-center">
      <Flor tipo="rosa" sizes="140px" className="mb-10 w-[100px]" />
      <h1 className="titulo text-[2.6rem] md:text-[3.6rem]">Esta página <em className="italic">não existe.</em></h1>
      <p className="texto mt-6">Mas as peças continuam por aqui.</p>
      <Link href="/pecas" className="btn btn-tinta mt-10">Conheça as peças <Seta /></Link>
    </section>
  );
}
