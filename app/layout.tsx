import { Nunito } from "next/font/google";
const font = Nunito({
  subsets: ["latin"],
});

import "./globals.css";
import type { Metadata } from "next";

import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Model from "./components/Models/Model";

export const metadata: Metadata = {
  title: "Clone AirB&B App",
  description: "Practicing Cloning Airb&B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Model />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
