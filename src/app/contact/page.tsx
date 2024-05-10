"use client";

import React, { useState } from "react";
import BreadcrumbMenu from "@/components/breadcrumb-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Send } from "lucide-react";
import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us!"
};

export default function Contact() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const email = "moisatedy@gmail.com";

  const copyText = async () => {
    await navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="mt-5">
      <BreadcrumbMenu pageName={"Contact"} />
      <div className="py-3">
        <h2 className="mb-2 text-2xl font-semibold lg:text-4xl">Contact</h2>
        <p className="text-muted-foreground">For every problem you can contact us!</p>
      </div>
      <div className="flex max-w-sm gap-x-2">
        <div className="grow">
          <Input value={!isCopied ? email : "Copied!"} readOnly />
        </div>
        <div className="flex-none">
          <Button variant="secondary" size={"icon"} onClick={() => copyText()}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-none">
          <Button size={"icon"} asChild>
            <Link href={`mailto:${email}`}>
              <Send className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
