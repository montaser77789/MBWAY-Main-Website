import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import React from "react";
import img from "../../../../public/assets/images/Photo Frame.png";
import img2 from "../../../../public/assets/images/Photo Frame (1).png";
import img3 from "../../../../public/assets/images/Photo Frame (2).png";
import img4 from "../../../../public/assets/images/Photo Frame 4.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <h1 className="text-[40px] lg:text-[80px]  font-bold">
        Your life is our responsibility
      </h1>
      <p className="text-[24px] lg:text-[40px] pt-4  font-medium leading-[33px] lg:leading-[56px] ">
        We provide everything you need with excellence - Medical and Engineering
        solutions, Business solutions , Commerce Real Estate , Tourism , and
        Education
      </p>
      <div className="flex w-full items-center space-x-2 pt-4">
        <Input
          type="text"
          className="flex-1 !py-6"
          placeholder="What do you need ?"
        />
        <Button className="lg:px-14 !py-6" type="submit">
          Get now
        </Button>
      </div>
      <div className="pt-4 mt-2">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/1 md:basis-1/4">
              <Image src={img} alt="" />
            </CarouselItem>
            <CarouselItem className="basis-1/1 md:basis-1/4">
              <Image src={img2} alt="" />
            </CarouselItem>
            <CarouselItem className="basis-1/1 md:basis-1/4">
              <Image src={img3} alt="" />
            </CarouselItem>
            <CarouselItem className="basis-1/1 md:basis-1/4">
              <Image src={img4} alt="" />
            </CarouselItem>
            <CarouselItem className="basis-1/1 md:basis-1/4">
              <Image src={img} alt="" />
            </CarouselItem>
            <CarouselItem className="basis-1/1 md:basis-1/4">
              <Image src={img} alt="" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
