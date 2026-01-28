import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Ikore - Sustainable Social and Enterprise Development",
  description: "Ikore is an international development and consulting firm that designs and delivers innovative, market-led solutions to drive sustainable social and enterprise development across Africa.",
  keywords: "sustainable development, agrifood systems, market development, value chain, livestock, crop, nutrition, Nigeria, Africa",
  authors: [{ name: "Ikore International Development Limited" }],
  openGraph: {
    title: "Ikore - Sustainable Social and Enterprise Development",
    description: "Ikore is an international development and consulting firm that designs and delivers innovative, market-led solutions to drive sustainable social and enterprise development across Africa.",
    url: "https://ikore.org",
    siteName: "Ikore",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikore - Sustainable Social and Enterprise Development",
    description: "Innovative solutions for sustainable development across Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${poppins.variable} ${roboto.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
