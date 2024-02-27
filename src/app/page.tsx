"use client";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";

const MyComponent = () => (
  <motion.p
    initial={{
      opacity: 0,
      x: -100,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    }}
    viewport={{ once: true }}
    className="text-xl md:text-lg leading-[130%] pt-10 w-[700px] text-center lg:w-full md:w-full md:px-4"
  >
    Ready to fly high? Join our flock and experience top-tier service infused
    with Filbert&apos;s distinctive wit.
  </motion.p>
);

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col flex gap-10">
        <Button>Press me</Button>
        <ThemeToggle />
        <MyComponent />
      </div>
    </main>
  );
}
