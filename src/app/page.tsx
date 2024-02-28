"use client";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import SimpleSlider from "@/components/slider";

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
      className={`text-xl  text-center w-full ${customStyles}`}
    >
      Ready to fly high? Join our flock and experience top-tier service infused
      with Filbert&apos;s distinctive wit. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sapiente consequuntur, ducimus iste magni
      soluta nostrum nulla numquam velit, maxime alias obcaecati nisi earum
      voluptatibus vel odio fuga excepturi at autem? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Dolor illum ad quam provident. Voluptatem
      doloribus nostrum ex magnam beatae deserunt, similique totam animi
      corrupti, quaerat esse eligendi unde nemo facilis? Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Aut debitis mollitia eos. Aut facilis
      vitae asperiores corporis perferendis numquam, eum nesciunt dicta
      veritatis pariatur molestias laboriosam possimus dolor ipsa modi! Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Eligendi eveniet
      aliquid quo! Repellendus possimus, sapiente culpa deleniti enim quasi
      sequi cum tenetur quae doloremque similique ipsum nam harum incidunt
      maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
      quibusdam error velit voluptatum quis, modi suscipit distinctio beatae
      accusamus necessitatibus! Non quos praesentium numquam velit expedita
      deserunt, alias adipisci quasi. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Minima quis obcaecati omnis rerum, ut maxime similique,
      cumque sed veniam, molestiae non quisquam corporis nam? Molestias minus
      similique exercitationem doloribus. Officiis. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Fugiat aperiam dicta laudantium eligendi
      quia eos sunt quisquam, nemo minus fuga! Maiores aspernatur odit, ex
      ratione commodi enim inventore saepe totam. Lorem ipsum dolor sit, amet
      consectetur adipisicing elit. Itaque impedit perspiciatis, reprehenderit
      sed eos omnis illo officia. Perspiciatis alias tempora ipsa nihil
      assumenda veniam sed, vero itaque modi obcaecati consequuntur! Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ducimus natus consectetur,
      eaque nam ad, laudantium vitae assumenda, quos voluptate rem fugit
      praesentium quas eius rerum labore. Aperiam odio et omnis. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Quibusdam ab reiciendis
      magnam consequatur dolorum maiores voluptates quam quod incidunt cumque
      saepe, perferendis tempora sed doloremque! Consectetur architecto officia
      officiis esse?
    </motion.p>
  );
};

export default function Home() {
  return (
    <>
      <MyComponent customStyles={"text-white"} />
      <div className="w-[400px] mx-auto mt-10">
        <SimpleSlider />
      </div>
    </>
  );
}
