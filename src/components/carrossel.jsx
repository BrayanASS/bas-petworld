import "../app/globals.css";

import image29 from "../../public/marcas/image29.png";
import image30 from "../../public/marcas/image30.png";
import image31 from "../../public/marcas/image31.png";
import image32 from "../../public/marcas/image32.png";
import image33 from "../../public/marcas/image33.png";
import image34 from "../../public/marcas/image34.png";
import image35 from "../../public/marcas/image35.png";
import image36 from "../../public/marcas/image36.png";
import image37 from "../../public/marcas/image37.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import Banner from "@/components/banner";

import Image from "next/image";

export default function Carrossel() {
  return (
    <div className="w-[100vw] flex items-center justify-center mt-[3rem]">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-[80%] "
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1 h-auto">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image src={image29} className="w-[7rem] h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1 h-auto">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image src={image30} className="w-[7rem] h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1 h-auto">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image src={image31} className="w-[7rem] h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1 h-auto">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image src={image32} className="w-[7rem] h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1 h-auto">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image src={image33} className="w-[7rem] h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1 h-auto">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image src={image34} className="w-[7rem] h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1 h-auto">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image src={image35} className="w-[7rem] h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1 h-auto">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image src={image36} className="w-[7rem] h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1 h-auto">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image src={image37} className="w-[7rem] h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
