import ComingSoon from "./_components/Coming Soon/ComingSoon";
import Hero from "./_components/hero/Hero";
import OurAchievements from "./_components/Our Achievements/OurAchievements";
import ConsultationSlider from "./_components/Our consultations/OurConsultations";
import OurDepartments from "./_components/our departments/OurDepartments";
import OurSuccessPartners from "./_components/Our Success Partners/OurSuccessPartners";
import WhyChooseUs from "./_components/Why Choose Us/Whychooseus";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <OurDepartments />
      <OurAchievements />
      <ComingSoon />
      <ConsultationSlider />
      <WhyChooseUs />
      <OurSuccessPartners />
    </main>
  );
}
