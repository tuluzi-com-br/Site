"use client";

import { usePathname } from "next/navigation";
import { IconeWhatsApp } from "./Icones";
import { linkWhatsApp } from "@/lib/site";

/** Atalho discreto, sempre à mão — escondido na página de produto, que tem CTA próprio. */
export function WhatsAppFlutuante() {
  const pathname = usePathname();
  if (pathname.startsWith("/pecas/")) return null;
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a TULUZI pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center bg-tinta text-linho shadow-[0_10px_30px_-10px_rgba(22,20,19,0.5)] transition-transform duration-500 hover:-translate-y-1 md:bottom-8 md:right-8"
    >
      <IconeWhatsApp className="h-6 w-6" />
      <span className="rotulo pointer-events-none absolute right-full mr-3 whitespace-nowrap bg-tinta px-4 py-3 text-[0.6rem] text-linho opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-md:hidden">
        Falar com a TULUZI
      </span>
    </a>
  );
}
