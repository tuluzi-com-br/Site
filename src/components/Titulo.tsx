import type { ReactNode } from "react";

export function Rotulo({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`rotulo flex items-center gap-4 text-cinza ${className}`}>
      <span className="inline-block h-px w-8 bg-current opacity-60" aria-hidden="true" />
      {children}
    </p>
  );
}
