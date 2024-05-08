import { hooks } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import React from "react";
import "@/styles/mdx.css";

type HookPageProps = {
  params: {
    slug: string[];
  };
};

async function getHookBySlug(params: HookPageProps["params"]) {
  const slug = params.slug.join("/");
  const hook = hooks.find((hook) => hook.slugAsParams === slug);

  return hook;
}

export async function generateStaticParams(): Promise<HookPageProps["params"][]> {
  return hooks.map((hook) => ({ slug: hook.slugAsParams.split("/") }));
}

async function HookDocsIndex({ params }: HookPageProps): Promise<React.JSX.Element> {
  const hook = await getHookBySlug(params);

  if (!hook || !hook.published) {
    notFound();
  }

  return (
    <article>
      <h1>{hook.title}</h1>
      <p>{hook.description}</p>
      <MDXContent code={hook.body} />
    </article>
  );
}

export default HookDocsIndex;