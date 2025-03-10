"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Copyright,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname  = usePathname()
  return (
    <footer className={pathname.startsWith("/medical") ? "container relative bg-[#EDEDED]  dark:bg-[#353535]  py-10 mt-0" : "mt-28 container relative bg-[#EDEDED]  dark:bg-[#353535]  py-10"} >
      <div className="  w-full mx-auto px-6"> 
        {/* Newsletter Section */}
        <Card className="bg-[#FF0000] absolute w-full -top-20 left-1/2 -translate-x-1/2 max-w-3xl text-white p-6 rounded-2xl shadow-xl">
          <CardContent className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 w-full">
            <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className="flex flex-col w-full md:w-auto space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="w-full md:w-72 px-4 py-2 rounded-lg bg-white text-black"
              />
              <Button className="bg-black text-white px-6 py-2 rounded-lg w-full md:w-auto">
                Subscribe to Newsletter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-32 lg:mt-12">
          <div>
            <h3 className="text-lg font-bold">MBWAY</h3>
            <p className="text-sm  mt-2">
              We believe in innovation and excellence, striving to deliver
              cutting-edge solutions tailored to our clients&apos; needs.
            </p>
            <div className="flex space-x-4 mt-4 ">
              <Facebook className="w-5 h-5 cursor-pointer" />
              <Instagram className="w-5 h-5 cursor-pointer" />
              <Twitter className="w-5 h-5 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">COMPANY</h3>
            <ul className=" mt-2 space-y-2">
              <li>About</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">HELP</h3>
            <ul className="y mt-2 space-y-2">
              <li>Customer Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">CONTACT US</h3>
            <ul className=" mt-2 space-y-2">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" /> mbway156@gmail.com
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" /> 01247866542
              </li>
              <li>Working Hours: Mon - Fri (9:00 AM - 6:00 PM)</li>
              <li>Saturday - Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 text-center text-primary text-sm border-t pt-4">
          <p className="flex items-center justify-center">
            <Copyright className="mr-1" /> MMA © 2025, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
