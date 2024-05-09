"use client";

import { getHooksFromLocalStorage } from "@/lib/localStorage";
import React from "react";

function StorageHooks({ children }: { children: React.ReactNode }): React.JSX.Element | undefined {
  const [data, setData] = React.useState<number[]>([]);

  const getHooks = () => {
    const localStorageHooks = getHooksFromLocalStorage();

    setData(localStorageHooks);
  };

  React.useEffect(() => {
    getHooks();
  }, []);

  if (data && data.length > 0) {
    return <>{children}</>;
  }
}

export default StorageHooks;
