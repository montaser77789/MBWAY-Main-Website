"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MainHeading from "@/components/main-heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const slidesData = [
  {
    image: "/assets/images/Photo Frame.png",
    imageSection: "/assets/images/blond-man-with-hat-looking-camera 1.png",
    title: "MBWAY Trusted Source for Products",
    description:
      "We provide a wide selection of high-quality products at competitive prices, ensuring the best value and customer satisfaction.",
    listItems: [
      "A wide range of high-quality products",
      "Competitive prices for all customers",
      "Reliable services with product warranties",
    ],
  },

  {
    image: "/assets/images/Photo Frame.png",
    imageSection: "/assets/images/blond-man-with-hat-looking-camera 1.png",

    title: "Tourism in MBWAY is different",
    description:
      "Discover the world with our company, where every journey becomes an unforgettable experience",
    listItems: [
      "Customized travel packages to suit all needs",
      "Luxury hotel bookings at competitive prices",
      "Guided tours with professional experts",
    ],
  },

  {
    image: "/assets/images/Photo Frame.png",
    imageSection: "/assets/images/two-colleagues-factory 1.png",

    title: "MBWAY solutions Your Business",
    description:
      "We provide maintenance , customs clearance, recruitment, and consultancy to ensure your success at every step",
    listItems: [
      "Maintenance and development of engineering equipment",
      "Free and paid engineering consultations",
      "Free and paid engineering consultations",
    ],
  },
  {
    image: "/assets/images/Photo Frame.png",
    imageSection:
      "/assets/images/graduation-concept-with-portrait-happy-man 1.png",

    title: "MBWAY - Path to Success ",
    description:
      "Embark on an exceptional learning experience that combines knowledge and practice, paving the way for limitless opportunities",
    listItems: [
      "Customized educational programs",
      "Practical training for the job market",
      "Globally recognized certificates",
    ],
  },
  {
    image: "/assets/images/Photo Frame.png",
    imageSection:
      "/assets/images/young-handsome-physician-medical-robe-with-stethoscope 2.png",

    title: "Medical sector in MBWAY",
    description:
      "Discover the world with our company, where every journey becomes an unforgettable experience ",
    listItems: [
      "Customized travel packages to suit all needs",
      "Luxury hotel bookings at competitive prices",
      "Guided tours with professional experts",
    ],
  },
];
const OurDepartments = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // استدعاء onSelect عند التحميل الأولي
    onSelect();

    // إضافة Listener لحدث "select"
    emblaApi.on("select", onSelect);

    // دالة التنظيف: إزالة Listener عند إلغاء التثبيت
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="py-12 my-12 bg-[#f5f5f5]  dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center container">
          <MainHeading
            title="Departments"
            subtitle="A diverse range of specialized departments to meet all your needs efficiently and professionally"
          />
        </div>

        <div className="relative pt-4 mt-4 w-full container">
          <ScrollArea className="w-full">
            <div className="embla w-full overflow-hidden" ref={emblaRef}>
              <div className="embla__container">
                {slidesData.map((slide, index) => (
                  <div key={index} className="embla__slide">
                    <div
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="py-4 px-2 md:px-4 h-[660px] md:h-[500px] bg-cover bg-center bg-no-repeat rounded-xl relative !text-white"
                      style={{ backgroundImage: `url("${slide.image}")` }}
                    >
                      {/* Overlay Layer */}
                      <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

                      <div
                        data-aos="fade-up"
                        className="grid grid-cols-1 md:grid-cols-[3fr_1fr] w-full h-full relative z-10"
                      >
                        <div className="w-full md:w-3/4 lg:w-2/3 space-y-1 md:space-y-4 flex-1 text-white">
                          <h2 className="text-[30px] md:text-[40px] font-bold mt-0 p-0 leading-7 lg:leading-10">
                            {slide.title}
                          </h2>
                          <p className="text-[16px] md:text-[20px]">
                            {slide.description}
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            {slide.listItems.map((item, i) => (
                              <li key={i} className="py-0 md:py-1">
                                {item}
                              </li>
                            ))}
                          </ul>
                          <div>
                            <Button className="px-10 py-3 w-full !rounded-full">
                              Explore now
                            </Button>
                          </div>
                        </div>
                        <div>
                          <Image
                            src={slide.imageSection}
                            alt=""
                            className="h-full"
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>

          {/* Pagination Dots */}
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-primary scale-125"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDepartments;
