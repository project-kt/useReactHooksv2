import React from "react";
import DocHeader from "./_components/doc-header";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Discover how to manage stateful logic and side effects in functional components using built-in hooks like useState and useEffect. Hooks provide a more concise and reusable way to organize your React code, making it easier to share logic across components and avoid class components complexities. Explore the versatility and power of React Hooks to streamline your application development."
};

function DocsIndex(): React.JSX.Element {
  return (
    <div>
      <DocHeader
        title={"Documentation"}
        description={
          "Discover how to manage stateful logic and side effects in functional components using built-in hooks like useState and useEffect. Hooks provide a more concise and reusable way to organize your React code, making it easier to share logic across components and avoid class components complexities. Explore the versatility and power of React Hooks to streamline your application development."
        }
      />
      <p>
        In the ever-evolving landscape of React development, custom hooks have emerged as a powerful tool for
        abstracting complex component logic into reusable functions. Custom hooks allow developers to encapsulate
        stateful logic and side effects in a clean, modular way, enhancing code maintainability and reusability across
        projects.
      </p>
      <h3>What is a react hook?</h3>
      <p>
        A React Hook is a special function that allows you to hook into React features and lifecycle capabilities from
        within functional components. Hooks enable state and other React features to be managed without writing a class.
        Introduced in React 16.8, they provide a more direct API to the React concepts you already know: props, state,
        context, refs, and lifecycle. This allows for cleaner and more modular code, facilitating easier reuse of
        stateful logic across components.
      </p>
      <h3>What does this documentaion provide?</h3>
      <p>
        This documentation is designed to guide you through the process of creating and utilizing custom React hooks. It
        will cover the fundamentals of custom hooks, best practices for designing them, and practical examples to
        demonstrate how they can solve common problems in application development. Whether you are a beginner looking to
        understand the basics or an experienced developer aiming to refine your skills, this guide will provide the
        insights needed to effectively leverage custom hooks in your React applications.
      </p>
    </div>
  );
}

export default DocsIndex;
