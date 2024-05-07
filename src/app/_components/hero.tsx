import { Button } from "@/components/ui/button";
import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Hero(): React.JSX.Element {
  return (
    <section className="flex flex-col gap-y-5 py-20 text-center">
      <h1 className="text-gradient font-extrabold md:text-7xl">Collection of React Hooks</h1>
      <h2 className="font-bold text-neutral-400 md:text-5xl">
        Find and copy expertly crafted custom hooks with clear documentation, usage examples, and tips for optimization.
      </h2>
      <div className="flex flex-row items-center justify-center gap-x-3">
        <Link href={"/docs"}>
          <Button className="bg-gradient text-black" variant={"outline"} size={"lg"}>
            Documentation <ArrowUpRight className="h-6 w-6" />
          </Button>
        </Link>
        <Link href={"https://github.com"}>
          <Button className="flex items-center" variant={"outline"} size={"lg"}>
            Github
            <ArrowUpRight className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
