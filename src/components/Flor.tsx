import Image from "next/image";
import branca from "@/assets/editorial/camelia-branca.webp";
import rosa from "@/assets/editorial/camelia-rosa.webp";
import vermelha from "@/assets/editorial/camelia-vermelha.webp";
import papoula from "@/assets/editorial/papoula-branca.webp";

const FLORES = { branca, rosa, vermelha, papoula } as const;

/** Flor decorativa recortada — uso pontual, nunca em excesso. */
export function Flor({
  tipo,
  className = "",
  giro = 0,
  flutuar = true,
  sizes = "240px",
  duracao = 11,
  espera = 0,
}: {
  tipo: keyof typeof FLORES;
  className?: string;
  giro?: number;
  flutuar?: boolean;
  sizes?: string;
  duracao?: number;
  espera?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${flutuar ? "flutuar" : ""} ${className}`}
      style={{
        ["--giro" as string]: `${giro}deg`,
        ["--dur" as string]: `${duracao}s`,
        ["--espera" as string]: `-${espera}s`,
        transform: `rotate(${giro}deg)`,
      }}
    >
      <Image src={FLORES[tipo]} alt="" sizes={sizes} className="h-auto w-full drop-shadow-[0_18px_30px_rgba(60,30,30,0.16)]" />
    </div>
  );
}
