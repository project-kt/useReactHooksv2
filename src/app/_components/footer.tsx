"use client";

import React from "react";
import Icons from "./icons";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container bottom-0 mt-5 flex items-center gap-4 py-5">
      <div>
        <Icons />
      </div>
      <p className="ml-auto text-sm text-muted-foreground">
        <span className="text-primary">useReactHooks</span>
        {` | © ${year}`}
      </p>
    </footer>
  );
}
