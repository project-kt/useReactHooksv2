"use client";

import { type NavItem } from "@/config/docs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HooksSidebarLinks({ items }: { items: NavItem[] }): React.JSX.Element {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn("block px-2 py-1 text-sm font-semibold", isActive(item.href) ? "underline" : "")}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}

export default HooksSidebarLinks;
