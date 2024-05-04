import Image from "next/image";
import type React from "react";
import reactImage from "../../../public/react.png";
import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="sticky top-0 z-10 py-6 backdrop-blur-sm dark:bg-zinc-950/80">
      <div className="container flex items-center">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative h-10 w-10">
            <Image src={reactImage} alt="react" className="origin-center" fill={true} sizes="48px" />
          </div>
          <Link href={"/"}>
            <h3 className="text-gradient whitespace-nowrap text-2xl font-bold">useReactHooks</h3>
          </Link>
        </div>
        <div className="flex items-center">
          <ModeToggle />
          <Link href={"https://github.com"}>
            <Button variant="link" asChild size={"icon"}>
              <Github className="text-main h-8 w-8" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
