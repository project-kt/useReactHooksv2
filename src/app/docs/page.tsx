import React from "react";
import DocHeader from "./_components/doc-header";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Discover how to manage stateful logic and side effects in functional components using built-in hooks like useState and useEffect. Hooks provide a more concise and reusable way to organize your React code, making it easier to share logic across components and avoid class components complexities. Explore the versatility and power of React Hooks to streamline your application development."
};

function DocsIndex() {
  return (
    <div>
      <DocHeader
        title={"Documentation"}
        description={
          "Discover how to manage stateful logic and side effects in functional components using built-in hooks like useState and useEffect. Hooks provide a more concise and reusable way to organize your React code, making it easier to share logic across components and avoid class components complexities. Explore the versatility and power of React Hooks to streamline your application development."
        }
      />
    </div>
  );
}

export default DocsIndex;
