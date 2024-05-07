"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import useHasMounted from "public/hooks/useHasMounted";

export function ModeToggle(): React.JSX.Element | undefined {
  const { theme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  const handleChamgeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (hasMounted) {
    return (
      <Button onClick={handleChamgeTheme} variant="link">
        {theme === "dark" ? <Sun className="text-main h-8 w-8" /> : <Moon className="text-main h-8 w-8" />}
      </Button>
    );
  }
}
