import { type NavItem } from "@/config/docs";
import Link from "next/link";
import React from "react";
import HooksSidebarLinks from "./hooks-sidebar-links";
import HooksSidebarSheet from "./hooks-sidebar-sheet";

function HooksSidebar({ items }: { items: NavItem[] }): React.JSX.Element | undefined {
  return (
    <div className="w-full">
      <div className="lg:hidden">
        <HooksSidebarSheet items={items} />
      </div>
      <div className="hidden flex-col gap-2 lg:flex">
        <Link href="/docs" className="text-primary text-lg font-semibold">
          React Hooks
        </Link>
        <HooksSidebarLinks items={items} />
      </div>
    </div>
  );
}

export default HooksSidebar;
