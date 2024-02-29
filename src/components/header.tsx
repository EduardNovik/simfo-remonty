import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { Sun } from "lucide-react";
import ThemeSwitcher from "@/components/theme-switcher";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import type { MenuItemType } from "@/models/index";

const menuItems: MenuItemType[] = [
  { name: "Home", url: "/" },
  { name: "Contacts", url: "/contacts" },
  { name: "Design", url: "/design" },
  { name: "Pricing", url: "/pricing" },
  { name: "About", url: "/about" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Sun />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item: MenuItemType) => (
            <NavbarItem key={item.name} isActive={pathname === item.url}>
              <Link color="foreground" href={item.url} aria-current="page">
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarMenu
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "100%",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 0.5,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.5,
                },
              },
            },
            exit: {
              y: 0,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <motion.div
              initial={{
                opacity: 0,
                x: "100%",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.2,
                  delay: index * 0.2,
                },
              }}
              viewport={{ once: true }}
            >
              <Link
                className="w-full"
                color="foreground"
                href={item.url}
                size="lg"
              >
                {item.name}
              </Link>
            </motion.div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
