import Image from "next/image";
import { Button } from "@/components/ui/button";
import "aos/dist/aos.css"; // استيراد AOS CSS فقط بدون `AOS.init()`

const features = [
  "Get Ready New Innovative Experience",
  "Quality, Innovation, and Excellence",
  "A New Success Journey Begins Soon",
];

export default function ComingSoon() {
  return (
    <section className="bg-[#f5f5f5]  dark:bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-0 p-1 md:p-9 rounded-lg flex-wrap">
          {/* Left Section */}
          <div
            className="lg:w-1/2 flex flex-col items-center text-center px-2 md:px-10 order-2 lg:order-1"
            data-aos="fade-right"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Coming Soon
            </h2>
            <p className="text-7xl py-3 font-extrabold mt-2" data-aos="zoom-in">
              70%
            </p>
            <p
              className="text-3xl md:text-5xl mt-2 text-primary"
              data-aos="fade-up"
            >
              Sale something amazing is coming … Stay tuned
            </p>
            <ul className="mt-4 space-y-0 md:space-y-2">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-[16px] md:text-[20px] before:content-['•'] before:text-primary before:text-6xl before:mr-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              className="px-6 py-3 mt-6 rounded-full w-full"
              data-aos="flip-up"
            >
              Stay tuned
            </Button>
          </div>

          {/* Right Section (Images) */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-3 mt-6 lg:mt-0 order-1 lg:order-2">
            <Image
              src="/assets/images/Frame 1000004901.jpg"
              alt="Shoe 1"
              width={220}
              height={200}
              className="rounded-lg object-cover"
              data-aos="fade-left"
            />
            <Image
              src="/assets/images/Frame 1000004903.png"
              alt="Shoe 2"
              width={220}
              height={200}
              className="rounded-lg object-cover"
              data-aos="fade-left"
              data-aos-delay="200"
            />
            <Image
              src="/assets/images/Frame 1000004902.png"
              alt="Shoe 3"
              width={220}
              height={200}
              className="rounded-lg object-cover"
              data-aos="fade-left"
              data-aos-delay="400"
            />
            <Image
              src="/assets/images/Frame 1000004904.png"
              alt="Shoe 4"
              width={220}
              height={200}
              className="rounded-lg object-cover"
              data-aos="fade-left"
              data-aos-delay="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
