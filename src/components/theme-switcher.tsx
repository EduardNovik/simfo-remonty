"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import React from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        startContent={<Moon />}
        endContent={<Sun />}
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      />
    </div>
  );
};

export default ThemeSwitcher;