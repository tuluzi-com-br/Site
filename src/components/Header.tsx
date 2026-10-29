"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { IconeFechar, IconeInstagram, IconeWhatsApp } from "./Icones";
import { ASSINATURA, INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV, linkWhatsApp } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setAberto(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = aberto ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberto]);

  const ativo = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <a href="#conteudo" className="rotulo sr-only z-[80] bg-tinta px-4 py-3 text-linho focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Pular para o conteúdo
      </a>

      {/* Faixa superior */}
      <div className="rotulo flex h-9 items-center justify-center border-b border-linha bg-papel px-4 text-center text-[0.6rem] text-grafite md:text-[0.625rem]">
        Design autoral em Minas
        <span className="mx-3 inline-block h-px w-5 bg-cinza/60" aria-hidden="true" />
        Pequenas edições
      </div>

      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          rolou ? "bg-linho/90 shadow-[0_1px_0_var(--color-linha)] backdrop-blur-md" : "bg-linho"
        }`}
      >
        <div
          className={`mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-4 transition-[height] duration-500 lg:px-10 ${
            rolou ? "h-16 lg:h-[4.5rem]" : "h-[4.5rem] lg:h-24"
          }`}
        >
          {/* Mobile: menu */}
          <button
            type="button"
            onClick={() => setAberto(true)}
            className="-ml-2 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={aberto}
            aria-controls="menu-mobile"
          >
            <span className="relative block h-3 w-6">
              <span className="absolute left-0 top-0 h-px w-6 bg-tinta" />
              <span className="absolute bottom-0 left-0 h-px w-4 bg-tinta" />
            </span>
          </button>

          {/* Logo */}
          <Link
            href="/"
            aria-label="TULUZI — página inicial"
            className={`justify-self-center transition-[width] duration-500 lg:justify-self-start ${
              rolou ? "w-[112px] lg:w-[150px]" : "w-[124px] lg:w-[178px]"
            }`}
          >
            <Logo priority />
          </Link>

          {/* Navegação desktop */}
          <nav aria-label="Principal" className="hidden lg:col-start-2 lg:row-start-1 lg:block">
            <ul className="flex items-center gap-9 xl:gap-14">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={ativo(item.href) ? "page" : undefined}
                    className="rotulo link-traco whitespace-nowrap text-[0.7rem] text-tinta"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={linkWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rotulo link-traco whitespace-nowrap text-[0.7rem] text-tinta"
                >
                  Fale conosco
                </a>
              </li>
            </ul>
          </nav>

          {/* Direita */}
          <div className="flex items-center justify-end gap-1 lg:col-start-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-11 w-11 items-center justify-center text-tinta transition-opacity hover:opacity-60 lg:flex"
              aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
            >
              <IconeInstagram />
            </a>
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="-mr-2 flex h-11 w-11 items-center justify-center text-tinta transition-opacity hover:opacity-60 lg:mr-0"
              aria-label="Falar com a TULUZI pelo WhatsApp"
            >
              <IconeWhatsApp className="h-[22px] w-[22px]" />
            </a>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!aberto}
        className={`fixed inset-0 z-[70] flex flex-col bg-linho transition-[opacity,visibility] duration-500 lg:hidden ${
          aberto ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="grid h-[4.5rem] grid-cols-[1fr_auto_1fr] items-center px-4">
          <button
            type="button"
            onClick={() => setAberto(false)}
            className="-ml-2 flex h-11 w-11 items-center justify-center"
            aria-label="Fechar menu"
            tabIndex={aberto ? 0 : -1}
          >
            <IconeFechar />
          </button>
          <Link href="/" className="w-[124px]" tabIndex={aberto ? 0 : -1} aria-label="TULUZI — página inicial">
            <Logo />
          </Link>
        </div>

        <nav aria-label="Menu" className="flex flex-1 flex-col justify-center px-8">
          <ul className="space-y-5">
            {NAV.map((item, i) => (
              <li
                key={item.href}
                className="transition-[opacity,transform] duration-700"
                style={{
                  transitionDelay: aberto ? `${120 + i * 70}ms` : "0ms",
                  opacity: aberto ? 1 : 0,
                  transform: aberto ? "none" : "translateY(16px)",
                }}
              >
                <Link href={item.href} tabIndex={aberto ? 0 : -1} className="titulo block text-[2.6rem]">
                  {item.label}
                </Link>
              </li>
            ))}
            <li
              className="transition-[opacity,transform] duration-700"
              style={{
                transitionDelay: aberto ? "400ms" : "0ms",
                opacity: aberto ? 1 : 0,
                transform: aberto ? "none" : "translateY(16px)",
              }}
            >
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={aberto ? 0 : -1}
                className="titulo block text-[2.6rem] italic"
              >
                Fale conosco
              </a>
            </li>
          </ul>
        </nav>

        <div className="border-t border-linha px-8 py-7">
          <p className="titulo text-lg italic text-grafite">{ASSINATURA}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={aberto ? 0 : -1}
            className="rotulo mt-4 inline-flex items-center gap-2 text-cinza"
          >
            <IconeInstagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </>
  );
}
