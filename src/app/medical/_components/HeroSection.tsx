"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import img2 from "../../../../public/assets/images/Frame 1000004960.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  const [examination, setExamination] = useState(0);
  const [consultation, setConsultation] = useState(0);
  const [surgeries, setSurgeries] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // عداد الأرقام التدريجي
    const animateNumbers = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      target: number
    ) => {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setter(start);
        if (start >= target) clearInterval(interval);
      }, 30); // سرعة التحديث
    };

    animateNumbers(setExamination, 99);
    animateNumbers(setConsultation, 250);
    animateNumbers(setSurgeries, 50);
  }, []);

  return (
    <section className="bg-background text-foreground mt-5">
      <div className="container mx-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
          {/* النصوص */}
          <div className="max-w-lg text-center md:text-left">
            <h1
              className="text-3xl md:text-6xl font-bold leading-tight text-primary w-full"
              data-aos="fade-right"
            >
              Your Health Our Responsibility
            </h1>
            <p
              className="mt-4 text-2xl md:text-3xl text-muted-foreground"
              data-aos="fade-left"
            >
              We&apos;re here to support you every step of the way to better
              health
            </p>
            <div
              className="mt-6 flex items-center gap-2 w-full"
              data-aos="zoom-in"
            >
              <Input
                type="text"
                placeholder="Doctor name's"
                className="w-full border border-border px-4 py-3 rounded-md"
              />
              <Button className="bg-ring text-primary-foreground px-6 py-2 font-medium">
                Get now
              </Button>
            </div>
          </div>

          {/* صورة الأطباء */}
          <div className="flex justify-center" data-aos="fade-up">
            <Image
              src={img2}
              alt="Doctors team"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* الإحصائيات مع التدرج اللوني */}
      <div className="bg-gradient-to-r from-[#FF0000] to-[#990000] text-primary-foreground py-6">
        <div className="container mx-auto flex flex-wrap justify-around text-center">
          <div className="text-xl font-semibold">
            <span className="text-3xl font-bold">{examination}+</span> <br />{" "}
            Examination
          </div>
          <div className="text-xl font-semibold">
            <span className="text-3xl font-bold">{consultation}+</span> <br />{" "}
            Consultation
          </div>
          <div className="text-xl font-semibold">
            <span className="text-3xl font-bold">{surgeries}+</span> <br />{" "}
            Surgeries
          </div>
        </div>
      </div>
    </section>
  );
}
