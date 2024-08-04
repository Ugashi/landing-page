import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import localFont from "next/font/local";

const nuku = localFont({
  src: "../../public/fonts/nuku1.ttf",
  variable: "--font-nuku",
  display: "swap",
});

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Usagi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} ${nuku.variable}`}>{children}</body>
    </html>
  );
}
