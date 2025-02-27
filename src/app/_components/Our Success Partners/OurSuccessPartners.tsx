import MainHeading from "@/components/main-heading";
import {
  Cloud,
  Apple,
  ShoppingCart,
  Database,
  Server,
  Layers,
  BarChart3,
  LineChart,
  Code,
  Globe,
  Settings,
} from "lucide-react";

function OurSuccessPartners() {
  const partners = [
    { icon: Cloud, name: "Cloud Services" },
    { icon: Apple, name: "Apple" },
    { icon: ShoppingCart, name: "E-Commerce" },
    { icon: Database, name: "Database Management" },
    { icon: Server, name: "Server Hosting" },
    { icon: Layers, name: "Software Solutions" },
    { icon: BarChart3, name: "Analytics" },
    { icon: LineChart, name: "Market Insights" },
    { icon: Code, name: "Development" },
    { icon: Globe, name: "Global Networks" },
    { icon: Settings, name: "Tech Support" },
  ];

  return (
    <section>
      <div className="mx-auto text-center">
        <div className="container">
          <MainHeading
            title="Our Success Partners"
            subtitle="We take pride in partnering with industry leaders, building trust-based relationships for sustainable achievements."
          />
        </div>
        <div className="bg-gradient-to-r from-red-300 to-white py-4">
          <div className="">
            <div className="relative overflow-hidden w-full mt-8">
              <div className="flex space-x-8 whitespace-nowrap animate-scroll">
                {[...partners, ...partners].map((partner, index) => {
                  const nextPartner = partners[(index + 1) % partners.length]; // جلب أيقونة مختلفة للصف الثاني
                  return (
                    <div key={index} className={`grid grid-rows-2 gap-4  ${index % 2 == 0 ? "mt-5" : "mt-2" }`}>
                      <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-2xl w-20 h-20">
                        <partner.icon className="w-10 h-10 text-gray-700" />
                        <span className="sr-only">{partner.name}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-2xl w-20 h-20">
                        <nextPartner.icon className="w-10 h-10 text-gray-700" />
                        <span className="sr-only">{nextPartner.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSuccessPartners;
