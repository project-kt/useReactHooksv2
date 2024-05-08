import { Button } from "@/components/ui/button";
import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Hero(): React.JSX.Element {
  return (
    <section className="flex flex-col gap-y-8 py-20 text-center">
      <h1 className="text-gradient text-3xl font-extrabold md:text-7xl">Collection of React Hooks</h1>
      <h2 className="text-neutral-400 md:text-3xl">
        Find and copy expertly crafted custom hooks with <span className="text-gradient">clear documentation</span>,
        usage <span className="text-gradient">examples</span>, and tips for optimization.
      </h2>
      <div className="flex flex-row items-center justify-center gap-x-3">
        <Button className="bg-gradient text-black" variant={"outline"} size={"lg"} asChild>
          <Link href={"/docs"}>
            Documentation <ArrowUpRight className="ml-1 h-5 w-5" />
          </Link>
        </Button>
        <Button variant={"outline"} size={"lg"} asChild>
          <Link href={"https://github.com"}>
            Github
            <ArrowUpRight className="ml-1 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
