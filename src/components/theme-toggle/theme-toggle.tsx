"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    />
  );
}
