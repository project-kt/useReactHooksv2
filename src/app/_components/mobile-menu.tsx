"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { docsConfig } from "@/config/docs";
import { Menu } from "lucide-react";
import { useState } from "react";
import HooksSidebarLinks from "../docs/_components/hooks-sidebar-links";
import Icons from "./icons";
import Logo from "./logo";
import { type NavBarLink } from "./navbar";
import NavbarMenu from "./navbar-menu";
import { Separator } from "@/components/ui/separator";

export default function MobileMenu({ links }: { links: NavBarLink[] }) {
  const [open, setOpen] = useState(false);
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
          <div className="sticky top-0 pb-3">
            <Logo />
          </div>
          <div className="flex h-full flex-1 overflow-y-auto py-3">
            <div className="flex w-full flex-col gap-y-3" onClick={() => setOpen(false)}>
              <NavbarMenu links={links} />
              <HooksSidebarLinks items={docsConfig} />
            </div>
          </div>
          <div className="sticky bottom-0 pt-3">
            <Icons />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
