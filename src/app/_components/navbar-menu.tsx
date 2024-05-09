import { Button } from "@/components/ui/button";
import React from "react";
import { type NavBarLink } from "./navbar";
import Link from "next/link";

export default function NavbarMenu({ links }: { links: NavBarLink[] }) {
  return (
    <>
      {links.map((link: NavBarLink, index: number) => (
        <Button key={index} variant={"ghost"} asChild>
          <Link href={link.href}>{link.title}</Link>
        </Button>
      ))}
    </>
  );
}
