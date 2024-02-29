import React from "react";
import {
  Card as CardUI,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";

import type { SliderContentType } from "@/models/index";

const Card = ({ item }: { item: SliderContentType }) => {
  return (
    <div className="max-w-1/5 px-8">
      <CardUI
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
        isPressable
        onPress={() => console.log("item pressed")}
        shadow="sm"
      >
        <CardBody className="overflow-visible p-0">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={item.url}
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night sleep.
                </p>
              </div>
            </div>
          </CardFooter>
        </CardBody>
      </CardUI>
    </div>
  );
};
export default Card;
