"use client";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/header";
import Layout from "@/components/layout";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Layout>
            <Header />
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
