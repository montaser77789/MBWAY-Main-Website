"use client";
import { Menu, XIcon } from "lucide-react";
import { Pages, Routes } from "../constants/enums";
import Link from "../link";
import { Button, buttonVariants } from "../ui/button";
import { useState } from "react";
import { ThemeToggle } from "../ui/Them-toggel";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    { id: crypto.randomUUID(), title: "Medical", href: Routes.MEDICAL },
    { id: crypto.randomUUID(), title: "Engineering", href: Routes.ENGINEERING },
    { id: crypto.randomUUID(), title: "Education", href: Routes.EDUCATION },
    { id: crypto.randomUUID(), title: "Tourism", href: Routes.TOURISM },
    { id: crypto.randomUUID(), title: "Commerce", href: Routes.COMMERCE },
    {
      id: crypto.randomUUID(),
      title: "Login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
    {
      id: crypto.randomUUID(),
      title: "Contact",
      href: Routes.CONTACT,
    },
  ];
  return (
    <nav className="flex-1  justify-end lg:justify-center items-center gap-5  flex ">
      <Button
        variant="secondary"
        size="sm"
        className="lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!w-6 !h-6 bg-transparent" />
      </Button>
      <ul
        className={`fixed lg:static flex-1  ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent 
        transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full 
        lg:w-auto flex items-start text-center  lg:items-center gap-10`}
      >
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-4 right-4 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6 bg-transparent" />
        </Button>
        <div className="flex flex-col  lg:flex-row items-center justify-center gap-4 w-full ">
          {links.map((link) => (
            <li className="py-2 " key={link.id}>
              <Link
                className={`${
                  link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                    ? `${buttonVariants({ size: "lg" })} !px-8  `
                    : link.href === Routes.CONTACT
                    ? `${buttonVariants({
                        variant: "outline",
                        size: "lg",
                      })} !px-8 `
                    : " text-foreground duration-200 transition-colors px-4"
                } font-semibold`}
                href={link.href}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </div>
      </ul>
      <div className="order-1">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
