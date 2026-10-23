import type { ReactNode } from "react";
import { Rotulo } from "./Titulo";

/** Abertura editorial das páginas internas. */
export function Abertura({ rotulo, titulo, children }: { rotulo: string; titulo: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
      <div className="relative mx-auto max-w-[1400px]">
        <Rotulo>{rotulo}</Rotulo>
        <h1 className="titulo mt-7 max-w-4xl text-[2.3rem] leading-[1.14] sm:text-[3rem] lg:text-[3.9rem]">{titulo}</h1>
        {children && <div className="mt-9 max-w-xl md:ml-[40%]">{children}</div>}
      </div>
    </section>
  );
}
