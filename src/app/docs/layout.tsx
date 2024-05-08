import { docsConfig } from "@/config/docs";
import HooksSidebar from "./_components/hooks-sidebar";
import ResizableDocs from "./_components/resizable-docs";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full px-10 py-10 sm:px-32">
      <div className="lg:hidden">
        <HooksSidebar items={docsConfig} />
        {children}
      </div>
      <div className="hidden h-full lg:block">
        <ResizableDocs>{children}</ResizableDocs>
      </div>
    </main>
  );
}
