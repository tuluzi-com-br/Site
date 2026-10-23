export function IconeWhatsApp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M3.6 20.4l1.2-4.3A8.6 8.6 0 1 1 8 19.3l-4.4 1.1z" strokeLinejoin="round" />
      <path d="M9 8.3c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .5-.1.6l-.5.6c-.1.2-.2.4 0 .6.6 1 1.5 1.9 2.6 2.5.2.1.4.1.6-.1l.6-.6c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5v.5c0 .4-.2.7-.6.9-.5.3-1.3.5-2.2.2-1.6-.5-3.2-1.8-4.3-3.4-.8-1.2-1.2-2.4-.6-3.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function IconeInstagram({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function Seta({ className = "h-3 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 10" className={`seta ${className}`} fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M0 5h20M16 1l4 4-4 4" />
    </svg>
  );
}
export function SetaCarrossel({ direcao, className = "h-5 w-5" }: { direcao: "esq" | "dir"; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true">
      {direcao === "esq" ? <path d="M15 4l-8 8 8 8" /> : <path d="M9 4l8 8-8 8" />}
    </svg>
  );
}
export function IconeFechar({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}
export function IconeLupa({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5l5 5M10.5 7.5v6M7.5 10.5h6" />
    </svg>
  );
}
