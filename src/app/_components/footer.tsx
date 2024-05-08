"use client";

import React from "react";
import Icons from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container h-24">
      <div className="mt-5 flex h-24 items-center justify-between gap-4">
        <div>
          <Icons />
        </div>
        <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
          <span className="text-gradient">useReactHooks</span>
          {` | © ${year}`}
        </p>
      </div>
    </footer>
  );
}
