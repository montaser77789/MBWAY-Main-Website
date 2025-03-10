import { Button } from "@/components/ui/button";
import img1 from "../../../../public/assets/images/5d97434c518c16593fb225faf93486b2.jpg";

function ExploreOurServices() {
  return (
    <section className="mt-5">
      <div
        className="bg-cover bg-center bg-no-repeat py-64 md:py-44 relative "
        style={{ backgroundImage: `url(${img1.src})` }} // إصلاح المشكلة هنا
      >
        <div className="container text-center text-popover-foreground bg-black/50 p-4  absolute  top-0 bottom-0 ">
          <h2 className="text-2xl font-semibold md:text-5xl max-w-screen-lg m-auto">
            Explore our services and special offers now
          </h2>
          <p className="mt-4 text-xl md:text-2xl   max-w-screen-lg m-auto">
            We offer you a comprehensive range of high-quality medical services,
            supported by the latest technologies and exclusive offers, to ensure
            that you receive comprehensive healthcare at competitive prices,
            because your comfort and health are always our priority.
          </p>
          <div className="flex gap-2 w-full mt-4 max-w-screen-lg m-auto">
            <Button size={"lg"} className="w-full">
              Sign up
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="w-full text-black dark:text-white"
            >
              As guest
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreOurServices;
