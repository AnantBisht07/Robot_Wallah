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

const CarouselLoader = () => {
  const images = [
    {
      image: "/c1.webp",
    },
    {
      image: "/c2.webp",
    },
    {
      image: "/c3.webp",
    },
    {
      image: "/c4.webp",
    },
    {
      image: "/c5.webp",
    },
    {
      image: "/c6.webp",
    },
    {
      image: "/c7.webp",
    },
    {
      image: "/c8.webp",
    },
    {
      image: "/c9.webp",
    },
    {
      image: "/c10.webp",
    },
    {
      image: "/c11.webp",
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
