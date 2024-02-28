import React from "react";
import { cn } from "@/lib/cn";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main
      className={cn(
        "min-h-screen flex flex-col items-center bg-[url('/bg-1.png')] dark:bg-[url('/bg-1-invert.png')]"
      )}
    >
      {children}
    </main>
  );
};

export default Layout;
