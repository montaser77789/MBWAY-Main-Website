import MainHeading from "@/components/main-heading";
import React from "react";
import Image from "next/image"; // إذا كنت تستخدم Next.js
import img1 from "../../../../public/assets/images/67625ccbc341cfa72bb66160fc165de8.jpg";
import { Button } from "@/components/ui/button";

function TheBestOffers() {
  const doctors = Array(9).fill({
    name: "Dr. Carter Kenter",
    jop: "Physical Therapy",
    over: "50%",
    specialty:
      "Special discount on all bookings and consultations – seize the opportunity now!",
    image: img1,
  });

  return (
    <section>
      <div className="container">
        <div className="text-center">
          <MainHeading
            title="The best offers for our doctors"
            subtitle="Enjoy the best exclusive offers from our top doctors, providing you with outstanding medical services,
             including check-ups, home visits, and remote consultations, all at the most competitive prices"
            color="text-popover-foreground"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="flex rounded-xl  shadow-lg overflow-hidden"
            >
              <div className="w-1/2 relative">
                <Image
                  src={doctor.image}
                  className="w-full h-full object-cover"
                  alt={doctor.name}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

                <div className="absolute bottom-4 left-4 text-popover">
                  <h2 className=" font-bold text-2xl">{doctor.name}</h2>
                  <p className="text-lg">{doctor.jop}</p>
                </div>
              </div>

              <div className="w-1/2 bg-popover flex flex-col items-center justify-center space-y-3 ">
                <p className="text-foreground font-bold text-4xl">
                  {doctor.over}
                </p>
                <p className="text-popover-foreground text-[18px] font-medium text-center">
                  {doctor.specialty}
                </p>
                <Button className="rounded-none w-full bg-popover-foreground text-popover">
                  Book now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TheBestOffers;
