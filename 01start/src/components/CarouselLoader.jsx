import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import c1Webp from "../assets/c1.webp";
import c2Webp from "../assets/c2.webp";
import c3Webp from "../assets/c3.webp";
import c4Webp from "../assets/c4.webp";
import c5Webp from "../assets/c5.webp";
import c6Webp from "../assets/c6.webp";
import c7Webp from "../assets/c7.webp";
import c8Webp from "../assets/c8.webp";
import c9Webp from "../assets/c9.webp";
import c10Webp from "../assets/c10.webp";
import c11Webp from "../assets/c11.webp";


const CarouselLoader = () => {
  const images = [
    {
      image: c1Webp,
    },
    {
      image: c2Webp,
    },
    {
      image: c3Webp,
    },
    {
      image: c4Webp,
    },
    {
      image: c5Webp,
    },
    {
      image: c6Webp,
    },
    {
      image: c7Webp,
    },
    {
      image: c8Webp,
    },
    {
      image: c9Webp,
    },
    {
      image: c10Webp,
    },
    {
      image: c11Webp,
    },
  ];

  return (
    <div>
      <Carousel 
      plugins={[Autoplay({ delay: 1000 })]}
      className="w-full max-w-5xl bg-black p-20 rounded-lg">
        <CarouselContent className="-ml-1">
          {images.map((item, idx) => (
            <CarouselItem key={idx} className="pl-1 md:basis-1/3 lg:basis-1/2">
              <div className="p-10">
                <Card className='bg-black'>
                  <CardContent className="flex aspect-square items-center justify-center p-6 ">
                    <img
                      src={item.image}
                      alt="carousel image"
                      className="w-full h-auto max-h-[450px] object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselLoader;
