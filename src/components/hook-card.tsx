"use client";

import { addHookToCookies } from "@/lib/cookies";
import { copyToClipboard } from "@/lib/utils";
import { type Hook } from "@/server/db/schema";
import axios from "axios";
import { Atom, Check, Rabbit } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

function HookCard({ hook }: { hook: Hook }) {
  return (
    <Card className="hover:border-gradient group relative w-full">
      <CardHeader>
        <CardTitle className="text-gradient mb-2">{hook.name}</CardTitle>
        <CardDescription className="line-clamp-2">{hook.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex">
        <Link href={`/docs/${hook.name}`} className="flex items-center">
          Discover
          <Atom className="ml-2 h-4 w-4" color="#52ddfd" />
        </Link>
        <CardCopyAction hook={hook} />
      </CardFooter>
    </Card>
  );
}

export default HookCard;

const CardCopyAction = ({ hook }: { hook: Hook }): React.JSX.Element => {
  const [fileContent, setFileContent] = React.useState<string | null>(null);

  const fetchFileContent = async (fileSource: string) => {
    try {
      const response = await axios.get<string>(fileSource, {
        responseType: "arraybuffer"
      });
      const decodedContent = Buffer.from(response.data, "base64").toString("utf-8");

      setFileContent(decodedContent);
      await copyToClipboard(decodedContent);
      addHookToCookies(hook.id);
    } catch (error) {
      console.error("Error fetching file content:", error);
      setFileContent(null);
    }
  };

  const handleCopyHook = async () => {
    await fetchFileContent(hook.source!);

    setTimeout(() => {
      setFileContent(null);
    }, 1000);
  };

  return (
    <Button size={"sm"} variant="ghost" className="ml-auto" onClick={handleCopyHook}>
      {fileContent ? (
        <div className="flex items-center">
          Copied
          <Check className="ml-2 h-4 w-4" />
        </div>
      ) : (
        <div className="flex items-center">
          Fast copy code
          <Rabbit className="ml-2 h-4 w-4" />
        </div>
      )}
    </Button>
  );
};
