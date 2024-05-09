"use client";

import { type Hook } from "@/server/db/schema";
import axios from "axios";
import { Atom, CheckCheck, CircleX, Copy, LoaderCircle, Rabbit } from "lucide-react";
import Link from "next/link";
import React from "react";
import useHoverOutside from "./hooks/useHoverOutside";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

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
    <Card ref={cardRef} className="group relative w-full hover:border-primary">
      <CardHeader>
        <CardTitle className="mb-2 text-primary">{hook.name}</CardTitle>
        <CardDescription className="line-clamp-2">{hook.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex">
        <Link href={hook.source!} className="flex items-center">
          Discover <Atom className="ml-1 h-4 w-4" color="#52ddfd" />
        </Link>
        <CardCopyAction isPending={isPending} fileContent={fileContent} />
      </CardFooter>
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
      <>
        <HoverCard>
          <HoverCardTrigger asChild={true}>
            <Button size={"sm"} variant="ghost" className="ml-auto">
              Fast copy code
              <Rabbit className="ml-1 h-4 w-4" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent side="right" className="w-[32rem]">
            ss
          </HoverCardContent>
        </HoverCard>
        <Copy className="absolute right-8 top-4 hidden size-4 transition delay-150 duration-300 ease-in-out group-hover:block" />
      </>
    );
  }
};
