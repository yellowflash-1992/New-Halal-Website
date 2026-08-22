import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-dancing-script",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Halal Fit-Sis — Empowering Muslim Women Through Fitness",
  description:
    "Halal Fit-Sis — Empowering Muslim women through fitness. Get fit, healthy, and strong in a supportive sisterhood.",
};

export const viewport: Viewport = {
  themeColor: "#f6ecec",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-page ${nunitoSans.variable} ${dancingScript.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
