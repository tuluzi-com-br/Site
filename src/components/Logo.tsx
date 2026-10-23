import Image from "next/image";
import logo from "@/assets/tuluzi-logo.webp";

/** Logomarca oficial — arquivo original, proporção preservada. */
export function Logo({
  className = "",
  claro = false,
  priority = false,
}: {
  className?: string;
  claro?: boolean;
  priority?: boolean;
}) {
  return (
    <Image
      src={logo}
      alt="TULUZI"
      className={`h-auto w-full select-none ${claro ? "invert-[0.96]" : ""} ${className}`}
      priority={priority}
      sizes="(min-width: 768px) 220px, 140px"
    />
  );
}
