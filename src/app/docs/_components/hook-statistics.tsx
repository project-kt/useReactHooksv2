"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";

function HookStatistics({ hookId }: { hookId: number }): React.JSX.Element {
  const [isThumbsUpClicked, setIsThumbsUpClicked] = useState(false);
  const [isThumbsDownClicked, setIsThumbsDownClicked] = useState(false);

  const handleThumbsUpClick = async () => {
    setIsThumbsUpClicked(true);
    setIsThumbsDownClicked(false);

    await axios.get(`/api/hook/statistics/incrementUsefullCount?hookId=${hookId}`);
  };

  const handleThumbsDownClick = async () => {
    setIsThumbsDownClicked(true);
    setIsThumbsUpClicked(false);

    await axios.get(`/api/hook/statistics/incrementUselessCount?hookId=${hookId}`);
  };

  return (
    <div className="absolute right-4 top-16 flex items-center gap-2">
      <Button variant="outline" onClick={handleThumbsUpClick} disabled={isThumbsDownClicked}>
        <ThumbsUp className={cn("size-4", isThumbsUpClicked && "text-green-500")} />
      </Button>
      <Button variant="outline" onClick={handleThumbsDownClick} disabled={isThumbsUpClicked}>
        <ThumbsDown className={cn("size-4", isThumbsDownClicked && "text-red-500")} />
      </Button>
    </div>
  );
}

export default HookStatistics;
