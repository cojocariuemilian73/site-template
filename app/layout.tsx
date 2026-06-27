import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Serif_Display } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700", "800", "900"], variable: "--font-playfair" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], variable: "--font-dm-serif" });

export const metadata: Metadata = {
  title: "ProliDent Clinic | Stomatologie Cluj-Napoca | Dr. Paul Prodan",
  description:
    "ProliDent Clinic — 20 ani de stomatologie de calitate în centrul Clujului. Dr. Paul Prodan și Dr. Aurelia Prodan. Programări online, urgențe, implanturi, albire. Str. Memorandumului 8, Cluj-Napoca.",
  keywords: [
    "stomatolog Cluj-Napoca",
    "cabinet dentar Cluj centru",
    "ProliDent",
    "Dr Paul Prodan",
    "implant dentar Cluj",
    "albire dinti Cluj",
    "stomatologie Cluj",
  ],
  openGraph: {
    title: "ProliDent Clinic Cluj-Napoca",
    description: "20 ani de îngrijire stomatologică de calitate în centrul Clujului",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable} ${dmSerif.variable}`}>
      <body className="relative flex min-h-screen flex-col bg-bg-deep font-sans text-text-primary antialiased">
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
          <ChatWidget />
        </MotionConfig>
      </body>
    </html>
  );
}
