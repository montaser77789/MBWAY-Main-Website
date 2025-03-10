import React from "react";

const MainHeading = ({
  title,
  subtitle,
  color
}: {
  title: string;
  subtitle?: string;
  color?: string;
}) => {
  return (
    <div>
      <h2 className={`text-[30px] font-semibold md:font-bold md:text-[50px] ${color}`} >
        <span className="text-foreground">Our</span> {title}
      </h2>
      <p className={`mt-2 text-[18px] font-semibold md:font-medium md:text-[32px] ${color}`}>{subtitle}</p>
    </div>
  );
};

export default MainHeading;
