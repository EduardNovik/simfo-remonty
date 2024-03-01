"use client";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import SimpleSlider from "@/components/slider";
import Card from "@/components/card";
import type { SliderContentType } from "@/models/index";
import Layout from "@/components/layout";

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const sliderContent: SliderContentType[] = [
  {
    url: "/slider-img/flat1.jpeg",
    title: "First flat",
    description: "this is the first flat",
  },
  {
    url: "/slider-img/flat2.jpeg",
    title: "Second flat",
    description: "this is the first flat",
  },
  {
    url: "/slider-img/flat3.jpeg",
    title: "Third flat",
    description: "this is the first flat",
  },
  {
    url: "/slider-img/flat4.jpeg",
    title: "Fourth flat",
    description: "this is the first flat",
  },
  {
    url: "/slider-img/flat5.jpeg",
    title: "Fifth flat",
    description: "this is the first flat",
  },
  {
    url: "/slider-img/flat6.jpeg",
    title: "Sixth flat",
    description: "this is the sixth flat",
  },
];
const Home = () => {
  return (
    <>
      <SimpleSlider />
      <Layout customStyles="flex flex-col gap-8">
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
          className="text-xl text-center w-full text-white"
        >
          Ready to fly high? Join our flock and experience top-tier service
          infused with Filbert&apos;s distinctive wit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Sapiente consequuntur, ducimus iste
          magni soluta nostrum nulla numquam velit, maxime alias obcaecati nisi
          earum voluptatibus vel odio fuga excepturi at autem? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dolor illum ad quam provident.
          Voluptatem doloribus nostrum ex magnam beatae deserunt, similique
          totam animi corrupti, quaerat esse eligendi unde nemo facilis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aut debitis
          mollitia eos. Aut facilis vitae asperiores corporis perferendis
          numquam, eum nesciunt dicta veritatis pariatur molestias laboriosam
          possimus dolor ipsa modi! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Eligendi eveniet aliquid quo! Repellendus possimus,
          sapiente culpa deleniti enim quasi sequi cum tenetur quae doloremque
          similique ipsum nam harum incidunt maiores! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Porro quibusdam error velit voluptatum
          quis, modi suscipit distinctio beatae accusamus necessitatibus! Non
          quos praesentium numquam velit expedita deserunt, alias adipisci
          quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          quis obcaecati omnis rerum, ut maxime similique, cumque sed veniam,
          molestiae non quisquam corporis nam? Molestias minus similique
          exercitationem doloribus. Officiis. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Fugiat aperiam dicta laudantium
          eligendi quia eos sunt quisquam, nemo minus fuga! Maiores aspernatur
          odit, ex ratione commodi enim inventore saepe totam. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Itaque impedit perspiciatis,
          reprehenderit sed eos omnis illo officia. Perspiciatis alias tempora
          ipsa nihil assumenda veniam sed, vero itaque modi obcaecati
          consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus natus consectetur, eaque nam ad, laudantium vitae assumenda,
          quos voluptate rem fugit praesentium quas eius rerum labore. Aperiam
          odio et omnis. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quibusdam ab reiciendis magnam consequatur dolorum maiores
          voluptates quam quod incidunt cumque saepe, perferendis tempora
        </motion.p>
        <motion.div
          className="gap-4 grid grid-cols-3 items-center"
          variants={containerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          {sliderContent.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card item={item} />
            </motion.div>
          ))}
        </motion.div>
      </Layout>
    </>
  );
};
export default Home;
