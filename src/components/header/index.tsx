import React from "react";
import { Routes } from "../constants/enums";
import Link from "../link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="container py-4 md:py-6 flex items-center  ">
      <Link className="text-2xl text-primary" href={Routes.ROOT}>
        MBWAY
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
