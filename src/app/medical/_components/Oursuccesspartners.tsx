import MainHeading from "@/components/main-heading";
import { Facebook, Instagram, Twitter } from "lucide-react";
import img1 from "../../../../public/assets/images/Rectangle 20.png";

import Image from "next/image";
import { Button } from "@/components/ui/button";
const doctors = Array(9).fill({
  name: "Dr. Ahmed Khaled",
  specialty: "ORTHOPEDIC SPECIALIST",
  image: img1, // استبدل بالرابط الحقيقي
});

const Oursuccesspartners = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <MainHeading
            title="success partners"
            subtitle="ur team of highly skilled and experienced doctors is 
            dedicated to providing top-quality medical care with professionalism, 
            compassion, and the latest advancements in healthcare to ensure the
             best outcomes for our patients"
            color="text-popover-foreground"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-background">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-card  rounded-2xl shadow-lg text-center max-w-xs"
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                className="w-full rounded-t-xl"
              />
              <div className="space-y-2  bg-gradient-to-b dark:from-white from-[#FF0000] to-[#990000] dark:to-[#B9B3B3] p-1">
                <h2 className="text-lg font-bold  mt-2  tracking-[3.84px] break-words text-popover">
                  {doctor.name}
                </h2>
                <p className="text-sm  tracking-[3.84px] break-word text-popover">
                  {doctor.specialty}
                </p>
                <div className="flex justify-center gap-3 text-primary mt-3">
                  <Facebook className="cursor-pointer bg-popover text-popover-foreground rounded-full w-9 h-9 p-1" />
                  <Twitter className="cursor-pointer bg-popover text-popover-foreground rounded-full w-9 h-9 p-1" />
                  <Instagram className="cursor-pointer bg-popover text-popover-foreground rounded-full w-9 h-9 p-1" />
                </div>
              </div>
              <Button className="w-full bg-popover-foreground text-popover  dark:hover:bg-popover-foreground rounded-b-2xl rounded-t-none">
                View Profile
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Oursuccesspartners;
