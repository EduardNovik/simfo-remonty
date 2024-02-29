"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { SliderContentType } from "@/models/index";

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

const titleAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const descriptionAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <ChevronRight className="size-20 text-white opacity-50 hover:opacity-100 transition-all delay-200 hover:scale-105" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <ChevronRight className="size-20 text-white rotate-180 opacity-50 hover:opacity-100 transition-all delay-100 hover:scale-105" />
    </div>
  );
}

const SimpleSlider = () => {
  const [animate, setAnimate] = useState(false);
  const settings: Settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow className="before:hidden" />,
    beforeChange: () => setAnimate(false),
    afterChange: () => setAnimate(true),
  };
  return (
    <Slider {...settings} className="w-screen h-screen top-[-64px]">
      {sliderContent.map((item: SliderContentType, index: number) => (
        <div key={index} className="relative">
          <Image
            src={item.url}
            alt={item.title}
            width={90000}
            height={90000}
            objectFit="fill"
            className="w-screen h-screen object-cover"
          />
          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2">
            <motion.h3
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
              variants={titleAnimation}
              className="leading-10 text-4xl"
            >
              {item.title}
            </motion.h3>
            <motion.p
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
              variants={descriptionAnimation}
              className="text-xl"
            >
              {item.description}
            </motion.p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
