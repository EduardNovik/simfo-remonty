"use client";
import React from "react";
import { cn } from "@/lib/cn";

const Layout = ({
  children,
  customStyles,
}: {
  children: React.ReactNode;
  customStyles?: string;
}) => {
  return (
    <div className={cn(`container mx-auto p-4 ${customStyles}`)}>
      {children}
    </div>
  );
};

export default Layout;
