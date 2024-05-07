"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { type NavItem } from "@/config/docs";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HooksSidebarSheet({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <Sheet>
      <SheetTrigger asChild={true}>
        <Button variant="outline">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>React Hooks</SheetTitle>
        </SheetHeader>
        <div className="mt-14 flex flex-col gap-2 self-end">
          {items.map((item) => (
            <SheetClose key={item.title} asChild={true}>
              <Link
                key={item.title}
                href={item.href}
                className={cn("block px-2 py-1 text-sm font-semibold", isActive(item.href) ? "underline" : "")}
              >
                {item.title}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default HooksSidebarSheet;
