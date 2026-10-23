import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFlutuante } from "@/components/WhatsAppFlutuante";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TULUZI — Um jeito de viver que começa pelo vestir",
    template: "%s | TULUZI",
  },
  description:
    "TULUZI é moda feminina autoral: peças feitas à mão, em pequenas edições, para mulheres que encontram beleza nos detalhes.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "TULUZI",
    title: "TULUZI — Um jeito de viver que começa pelo vestir",
    description: "Peças feitas à mão, em pequenas edições, para mulheres que encontram beleza nos detalhes.",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#faf6f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFlutuante />
      </body>
    </html>
  );
}
