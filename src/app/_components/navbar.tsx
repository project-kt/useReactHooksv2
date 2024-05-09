import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import type React from "react";
import Logo from "./logo";
import NavbarMenu from "./navbar-menu";
import Icons from "./icons";
import MobileMenu from "./mobile-menu";

export type NavBarLink = {
  title: string;
  href: string;
};

export default function Navbar(): React.JSX.Element {
  const navbarLinks: NavBarLink[] = [
    {
      title: "Homepage",
      href: "/"
    },
    {
      title: "Documentation",
      href: "/docs"
    },
    {
      title: "Contact",
      href: "/contact"
    }
  ];

  return (
    <nav className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 py-6 backdrop-blur-sm md:px-6">
      <div className="hidden w-full items-center lg:flex">
        <Logo />
        <div className="flex gap-x-3">
          <NavbarMenu links={navbarLinks} />
        </div>
        <div className="ml-auto">
          <Icons />
        </div>
      </div>
      <div className="flex w-full gap-x-2 lg:hidden">
        <Logo />
        <div className="ml-auto">
          <ModeToggle />
        </div>
        <div className="ml-auto">
          <MobileMenu links={navbarLinks} />
        </div>
      </div>
    </nav>
  );
}
