"use client";
import MainHeading from "@/components/main-heading";
import {
  Users,
  Briefcase,
  GraduationCap,
  Phone,
  ShoppingBag,
  Plane,
  Building,
  Settings,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const achievements = [
  {
    icon: Users,
    number: "250,000",
    label: "Customers",
    description: "Trusted by our valued clients to achieve success",
  },
  {
    icon: Briefcase,
    number: "150",
    label: "Employees",
    description: "Our dedicated team continues to grow and excel",
  },
  {
    icon: GraduationCap,
    number: "12,000",
    label: "Students",
    description: "Empowering our students for success and growth",
  },
  {
    icon: Phone,
    number: "15,000",
    label: "Consultation",
    description: "Providing expert consultations to drive success and growth",
  },
  {
    icon: ShoppingBag,
    number: "450,000",
    label: "Sold out",
    description: "Trusted for quality products by our customers",
  },
  {
    icon: Plane,
    number: "200",
    label: "Tourist trips",
    description: "Delivering exceptional travel experiences every time",
  },
  {
    icon: Building,
    number: "150",
    label: "Company",
    description: "Building strong partnerships for mutual success",
  },
  {
    icon: Settings,
    number: "2,000",
    label: "Engineering Sales",
    description: "Trusted for high-quality engineering equipment",
  },
  {
    icon: Wrench,
    number: "5,000",
    label: "Maintenance",
    description: "Reliable engineering maintenance for lasting performance",
  },
];

const OurAchievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="py-12 my-12  container">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <MainHeading
            title="Achievements"
            subtitle="We take pride in our success in serving clients, providing consultations, selling equipment, maintenance, organizing trips and building partnerships"
            color="text-popover-foreground"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-popover p-6 rounded-xl text-center relative border border-popover-foreground "
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-popover-foreground p-3 rounded-full">
                <item.icon className="w-8 h-8 text-popover" />
              </div>
              <h3
               
                className="text-3xl font-bold mt-6 text-popover-foreground"
              >
                + {item.number}
              </h3>
              <h4
                
                className="text-[32px] md:text-[40px] font-semibold mt-2 text-popover-foreground"
              >
                {item.label}
              </h4>
              <p
                
                className="text-[24px] md:text-[32px] mt-2 text-popover-foreground"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
