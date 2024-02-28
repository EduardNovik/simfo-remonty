"use client";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

const MyComponent = ({ customStyles }: { customStyles: string }) => {
  return (
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
      className={`text-xl md:text-lg leading-[130%] pt-10 w-[700px] text-center lg:w-full md:w-full md:px-4 ${customStyles}`}
    >
      Ready to fly high? Join our flock and experience top-tier service infused
      with Filbert&apos;s distinctive wit.
    </motion.p>
  );
};

export default function Home() {
  return (
    <div className={cn("text-teal-700")}>
      HEy
      <MyComponent customStyles={"text-red-400"} />
    </div>
  );
}
