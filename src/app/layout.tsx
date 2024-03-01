"use client";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { cn } from "@/lib/cn";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <main
            className={cn(
              "min-h-screen bg-[url('/bg-1.png')] dark:bg-[url('/bg-1-invert.png')]"
            )}
          >
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
