import Link from "next/link";
import { Logo } from "./Logo";
import { IconeInstagram, IconeWhatsApp } from "./Icones";
import { ASSINATURA, INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV, WHATSAPP_EXIBICAO, linkWhatsApp } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-linha bg-linho">
      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="block w-[180px] md:w-[230px]" aria-label="TULUZI — página inicial">
              <Logo />
            </Link>
            <p className="titulo mt-10 max-w-sm text-[1.7rem] italic leading-snug md:text-[2rem]">{ASSINATURA}</p>
          </div>

          <nav aria-label="Rodapé" className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
            <div>
              <p className="rotulo text-cinza">Navegue</p>
              <ul className="mt-6 space-y-3 text-[0.95rem]">
                <li><Link className="link-traco" href="/tuluzi">A TULUZI</Link></li>
                {NAV.map((n) => (
                  <li key={n.href}><Link className="link-traco" href={n.href}>{n.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="rotulo text-cinza">Contato</p>
              <ul className="mt-6 space-y-3 text-[0.95rem]">
                <li>
                  <a className="link-traco inline-flex items-center gap-2" href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
                    <IconeWhatsApp className="h-4 w-4" /> WhatsApp
                  </a>
                  <span className="mt-1 block text-sm text-cinza">{WHATSAPP_EXIBICAO}</span>
                </li>
                <li>
                  <a className="link-traco inline-flex items-center gap-2" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    <IconeInstagram className="h-4 w-4" /> Instagram
                  </a>
                  <span className="mt-1 block text-sm text-cinza">{INSTAGRAM_HANDLE}</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="rotulo text-cinza">Informações</p>
              <ul className="mt-6 space-y-3 text-[0.95rem]">
                <li><Link className="link-traco" href="/politica-de-privacidade">Política de Privacidade</Link></li>
                <li><Link className="link-traco" href="/termos-de-uso">Termos de Uso</Link></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-linha pt-8 text-sm text-cinza md:flex-row md:items-center md:justify-between">
          <p className="rotulo text-[0.625rem]">Feito à mão em Minas.</p>
          <p className="text-[0.8rem]">© {new Date().getFullYear()} TULUZI</p>
        </div>
      </div>
    </footer>
  );
}
