"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Icons from "./icons";
import Logo from "./logo";
import { type NavBarLink } from "./navbar";
import NavbarMenu from "./navbar-menu";
import { useState } from "react";

export default function MobileMenu({ links }: { links: NavBarLink[] }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full bg-background/80 backdrop-blur-sm">
        <div className="flex h-full flex-col">
          <div>
            <Logo />
          </div>
          <div className="flex flex-1">
            <div className="my-auto flex w-full flex-col gap-y-4">
              <NavbarMenu links={links} />
            </div>
          </div>
          <Icons />
        </div>
      </SheetContent>
    </Sheet>
  );
}
