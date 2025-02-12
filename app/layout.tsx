import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Le Délice - Restaurant Gastronomique Congolais à Brazzaville",
  description: "Le Délice vous invite à un voyage culinaire exceptionnel au cœur de la gastronomie congolaise. Plats raffinés, ingrédients frais et ambiance chaleureuse vous attendent à Brazzaville.",
  keywords: "restaurant congolais, gastronomie congolaise, plats traditionnels, Brazzaville, cuisine africaine, spécialités congolaises",
  openGraph: {
    title: "Le Délice - Restaurant Gastronomique Congolais à Brazzaville",
    description: "Venez savourer des plats authentiques et raffinés au restaurant Le Délice, une référence en cuisine congolaise à Brazzaville.",
    url: "https://www.restaurant-ledelice.cg",
    type: "website",
    images: [
      {
        url: "https://www.canva.com/design/DAGe35DdKLk/jFBda2Zr3OqpxC5XCyciBA/view?utm_content=DAGe35DdKLk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h55f8bcb828",
        width: 1200,
        height: 630,
        alt: "Restaurant Le Délice - Plats Congolais raffinés",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
