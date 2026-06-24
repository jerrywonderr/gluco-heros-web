import type { Metadata } from "next";
import { Comic_Neue, Fredoka } from "next/font/google";
import "./globals.css";

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-comic-neue",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "GlucoHeros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${comicNeue.variable} ${fredoka.variable}`}>
      <body>{children}</body>
    </html>
  );
}
