"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CalendarDays, Circle } from "lucide-react";
import MainHeading from "@/components/main-heading";

const consultations = [
  {
    title: "Trusted Medical Consultations for Better Care",
    description:
      "We offer specialized medical consultations for accurate diagnoses and tailored treatment plans, backed by expert professionals and the latest medical advancements",
    image: "/assets/images/Rectangle 2770.png",
    listItems: ["Just 0$ – Don’t miss out", "Book now before the offer ends"],
  },
  {
    title: "Our Expertise , Your Engineering Precision",
    description:
      "We offer specialized engineering consultations to ensure efficient and precise project execution, using the latest technologies and industry standards",
    image: "/assets/images/Rectangle 277000.png",
    listItems: ["Just 0$ – Don’t miss out", "Book now before the offer ends"],
  },
  {
    title: "Guiding You Towards a Successful Educational Future",
    description:
      "We provide specialized educational consultations to help you choose the best academic and training path, backed by certified experts and the latest learning methodologies",
    image: "/assets/images/Rectangle 2770111.png",
    listItems: ["Just 0$ – Don’t miss out", "Book now before the offer ends"],
  },
];

export default function ConsultationSlider() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن بالمللي ثانية
      once: true, // تشغيل الأنيميشن مرة واحدة فقط عند التمرير
    });
  }, []);

  return (
    <section className="container relative overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center p-6 relative">
        <div className="text-center">
          <MainHeading title="Consultations" />
        </div>
        <Carousel className="w-full relative h-auto pb-16">
          <CarouselContent>
            {consultations.map((item, index) => (
              <CarouselItem
                key={index}
                className="p-4"
                data-aos="fade-up" // ✨ إضافة الأنيميشن هنا
              >
                <div className="flex flex-col lg:flex-row items-center h-full">
                  {/* Left Content */}
                  <div
                    className="lg:w-1/2 p-6 text-left bg-gray-50 dark:bg-white h-full flex items-stretch order-2 md:order-1"
                    data-aos="fade-right" // ✨ النص يتحرك من اليمين
                  >
                    <div className="w-full flex flex-col justify-center space-y-2 md:space-y-7">
                      <h3 className="text-[#FF0000] text-[24px] md:text-[30px] font-bold">
                        {item.title}
                      </h3>
                      <p className="text-black text-[16px] md:text-[20px] font-medium">
                        {item.description}
                      </p>

                      <ul className="flex-col md:flex-row items-center gap-6 text-[16px] text-[#FF0000]">
                        {item.listItems?.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 py-0 md:py-1"
                          >
                            <Circle className="w-3 h-3 bg-[#FF0000] rounded-full" />{" "}
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Button className="w-full !rounded-full text-[16px]">
                        <CalendarDays className="mr-2" /> Book now
                      </Button>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div
                    className="lg:w-1/2 h-full w-full order-1 md:order-2"
                    data-aos="fade-left" // ✨ الصورة تتحرك من اليسار
                  >
                    <Image
                      src={item.image}
                      alt="Medical Consultation"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* ✅ أزرار التنقل في الأسفل */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-evenly w-[90%] gap-4 p-5">
            <CarouselPrevious
              className="text-[#FF0000] border-none w-[50px] h-[50px] flex
             items-center justify-center rounded-full cursor-pointer transition bg-transparent hover:bg-transparent shadow-none scale-[2]"
            />
            <CarouselNext
              className="text-[#FF0000] border-none w-[50px] h-[50px] flex 
            items-center justify-center rounded-full cursor-pointer transition bg-transparent hover:bg-transparent shadow-none scale-[2]"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
