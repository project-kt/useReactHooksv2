"use client";

import { type Hook } from "@/server/db/schema";
import axios from "axios";
import { ArrowUpRight, CheckCheck, CircleX, Copy, LoaderCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import useHoverOutside from "./hooks/useHoverOutside";

function HookCard({ hook, children }: { hook: Hook; children?: React.ReactNode }) {
  const [isPending, startTransition] = React.useTransition();
  const [fileContent, setFileContent] = React.useState<string | null>(null);
  const cardRef = React.useRef<HTMLDivElement | null>(null);

  const fetchFileContent = async (fileSource: string) => {
    try {
      const response = await axios.get<string>(fileSource, {
        responseType: "arraybuffer"
      });
      const decodedContent = Buffer.from(response.data, "base64").toString("utf-8");

      setFileContent(decodedContent);
    } catch (error) {
      console.error("Error fetching file content:", error);
      setFileContent("");
    }
  };

  const handleCopyHook = () => {
    startTransition(async () => {
      await fetchFileContent(hook.source!);
    });
  };

  useHoverOutside(cardRef, () => setFileContent(null));

  return (
    <Card ref={cardRef} className="group relative w-full hover:border-cyan-500" onClick={handleCopyHook}>
      <CardHeader>
        <CardTitle className="text-gradient mb-2">{hook.name}</CardTitle>
        <CardDescription className="line-clamp-2">{hook.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex">
        <Link href={hook.source!} className="text-gradient">
          Discover
        </Link>
      </CardFooter>
      <CardCopyAction isPending={isPending} fileContent={fileContent} />
      {children}
    </Card>
  );
}

export default HookCard;

const CardCopyAction = ({
  isPending,
  fileContent
}: {
  isPending: boolean;
  fileContent: string | null;
}): React.JSX.Element => {
  if (isPending) {
    return <LoaderCircle className="absolute right-8 top-4 size-4" />;
  }

  if (fileContent) {
    if (fileContent.length > 0) {
      return <CheckCheck className="absolute right-8 top-4 size-4 text-green-500" />;
    } else {
      return <CircleX className="absolute right-8 top-4 size-4 text-red-500" />;
    }
  } else {
    return (
      <Copy className="absolute right-8 top-4 hidden size-4 transition delay-150 duration-300 ease-in-out group-hover:block" />
    );
  }
};
