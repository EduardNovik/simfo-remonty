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

// import React from "react";
// import {
//   Switch,
//   useSwitch,
//   VisuallyHidden,
//   SwitchProps,
// } from "@nextui-org/react";
// import { useTheme } from "next-themes";
// import { Sun, Moon } from "lucide-react";

// const ThemeSwitcher = (props: SwitchProps) => {
//   const {
//     Component,
//     slots,
//     isSelected,
//     getBaseProps,
//     getInputProps,
//     getWrapperProps,
//   } = useSwitch(props);

//   const { theme, setTheme } = useTheme();

//   return (
//     <Component {...getBaseProps()}>
//       <VisuallyHidden>
//         <input {...getInputProps()} />
//       </VisuallyHidden>
//       <div
//         {...getWrapperProps()}
//         onClick={() =>
//           theme === "light" ? setTheme("dark") : setTheme("light")
//         }
//         className={slots.wrapper({
//           class: [
//             "w-8 h-8",
//             "flex items-center justify-center",
//             "rounded-lg bg-default-100 hover:bg-default-200",
//           ],
//         })}
//       >
//         {isSelected ? <Sun /> : <Moon />}
//       </div>
//     </Component>
//   );
// };

// export default ThemeSwitcher;
