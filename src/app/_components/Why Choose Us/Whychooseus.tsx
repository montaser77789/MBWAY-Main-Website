import { SquareCheck } from "lucide-react";
import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Proven Expertise",
    description:
      "A team of specialists ensuring top-quality consultations and solutions",
  },
  {
    number: "02",
    title: "Cutting-Edge Technology",
    description:
      "We utilize the latest standards and innovations for optimal results",
  },
  {
    number: "03",
    title: "Guaranteed Success",
    description: "Helping you achieve your goals efficiently and effectively",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="container ">
      <div className="px-2  py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-popover-foreground text-[28px] md:text-[36px] font-bold mb-6">
            Why choose us ?
          </h2>
          <div className="space-y-6">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-center gap-4 p-1 md:p-4 rounded-lg
        ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* الرقم */}
                <span className="text-popover-foreground text-[40px] md:text-[100px] font-bold">
                  {item.number}
                </span>

                {/* الكارد */}
                <div>
                  <div className="bg-popover p-4 rounded-xl">
                    <div className="flex items-center gap-2">
                      {/* الأيقونة داخل دائرة */}
                      <div className="w-12 h-12 rounded-[50%] flex items-center justify-center bg-popover-foreground">
                        <SquareCheck className="text-popover" />
                      </div>
                      {/* العنوان والوصف */}
                      <p className="flex-1 font-bold text-[16px] md:text-[24px] leading-[33.60px]">
                        {item.title}:
                        <span className="font-medium text-[16px] md:text-[20px]">
                          {item.description}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <Image
              src="/assets/images/Photo.png"
              alt="Consultation Image"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <Image
              src="/assets/images/Photo (1).png"
              alt="Consultation Image"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
