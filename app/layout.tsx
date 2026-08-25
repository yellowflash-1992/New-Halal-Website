import type { Metadata, Viewport } from "next";
import "./globals.css";
import CharityFloatingWidget from "./components/common/CharityFloatingWidget";

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
    <html lang="en" className="bg-page" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Nunito+Sans:ital,opsz,wght@0,6..12,300..800;1,6..12,300..800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <CharityFloatingWidget />
      </body>
    </html>
  );
}

