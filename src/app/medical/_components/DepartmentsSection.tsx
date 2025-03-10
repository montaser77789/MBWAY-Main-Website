"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import img1 from "../../../../public/assets/images/portrait-handsome-male-doctor-dressed-uniform (4) 1.png";
import img2 from "../../../../public/assets/images/front-view-man-with-gloves-holding-tape-measurer-social-distancing 1.png";
import img3 from "../../../../public/assets/images/surgeons-wearing-surgical-loupes-while-performing-operation 1.png";
import img4 from "../../../../public/assets/images/male-radiologist-analyzing-mri-scan-results-patient-computer-monitor-control-room 1.png";
import img5 from "../../../../public/assets/images/chiropractor-provides-aid-patient 1.png";
import img6 from "../../../../public/assets/images/smiling-young-man-sitting-dentist-chair-while-doctor-examining-his-teeth 1.png";
import img7 from "../../../../public/assets/images/side-view-athlete-doing-physiotherapy 1.png";

import MainHeading from "@/components/main-heading";

const departments = [
  {
    image: img1,
    title: "Cosmetic",
    description: "For harmonious beauty with confidence and safety",
  },
  {
    image: img2,
    title: "Slimming",
    description: "Achieve your ideal body with safe and effective",
  },
  {
    image: img3,
    title: "Eye surgery",
    description: "Advanced techniques for clear vision and eye health",
  },
  {
    image: img4,
    title: "Oncology",
    description: "Providing advanced cancer care with treatment",
  },
  {
    image: img5,
    title: "Orthopedic",
    description: " Expert care for bone, joint and muscle health",
  },
  {
    image: img6,
    title: "Dental",
    description: "Comprehensive care for a healthy, beautiful smile",
  },
  {
    image: img7,
    title: "Physical therapy",
    description: "Personalized treatments to restore movement",
  },
];

export default function DepartmentsSection() {
  return (
    <section className="py-12 text-center container">
      <div className="container ">
        <div className="text-center">
          <MainHeading
            title="departments"
            subtitle="Offer comprehensive care across specialized departments: eye surgery,
          cosmetic procedures, slimming, oncology, orthopedics, dental care, and
          physical therapy."
            color="text-popover-foreground"
          />
        </div>

        {/* سلايدر */}
        <div className="mt-8 relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            style={{ paddingBottom: "40px" }} /* توفير مساحة للأسفل */
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {departments.map((dept, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[hsl(var(--card))]  rounded-lg shadow-lg overflow-hidden border border-[hsl(var(--border))] relative">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 z-10"></div>
                  <div className="relative">
                    <Image
                      src={dept.image}
                      alt={dept.title}
                      width={500}
                      height={500}
                      className="w-full h-60  object-cover "
                    />
                    <h3 className="text-2xl md:text-3xl  font-semibold text-white absolute bottom-4 left-1/4 transform -translate-x-1/2 z-20">
                      {dept.title}
                    </h3>
                  </div>
                </div>
                  <div className="bg-gradient-to-r rounded-b-lg from-[#FF0000] to-[#990000] z-20 p-1 text-white text-center text-[18px] font-semibold cursor-pointer hover:opacity-80 transition">
                    {dept.description}
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* تخصيص أزرار التنقل */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: -5px !important; /* تنزيلها أكثر */
        }
        .swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          background-color: red !important;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background-color: darkred !important;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
