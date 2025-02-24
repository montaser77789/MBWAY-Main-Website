'use client';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import img from "../../../../public/assets/images/Photo Frame.png";
import img2 from "../../../../public/assets/images/Photo Frame (1).png";
import img3 from "../../../../public/assets/images/Photo Frame (2).png";
import img4 from "../../../../public/assets/images/Photo Frame 4.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const images = [img, img2, img3, img4, img2, img3, img4];

  return (
    <div className="container">
      <h1  className="text-[40px] lg:text-[80px] leading-10 lg:leading-[70px] font-bold mt-1 lg:mt-3" data-aos="fade-down">
        Your life is our responsibility
      </h1>
      <p
        className="text-[24px] lg:text-[40px] pt-4 font-medium leading-[33px] lg:leading-[56px]"
        data-aos="fade-up"
      >
        We provide everything you need with excellence - Medical and Engineering
        solutions, Business solutions, Commerce Real Estate, Tourism, and
        Education
      </p>

      <div className="flex w-full items-center space-x-2 pt-4" data-aos="fade-up">
        <Input type="text" className="flex-1 !py-6" placeholder="What do you need ?" />
        <Button className="lg:px-14 !py-6" type="submit">
          Get now
        </Button>
      </div>

      <div className="pt-4 mt-2" data-aos="zoom-in">
        <Carousel>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-1/1 md:basis-1/4">
                <Image src={image} alt="" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
