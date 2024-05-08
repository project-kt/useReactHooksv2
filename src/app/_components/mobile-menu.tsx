import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Icons from "./icons";
import Logo from "./logo";
import { type NavBarLink } from "./navbar";
import NavbarMenu from "./navbar-menu";

export default function MobileMenu({ links }: { links: NavBarLink[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full">
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
