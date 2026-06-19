import { getPageImage, getPageMarkdownUrl, source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  ViewOptionsPopover,
  PageLastUpdate,
  EditOnGitHub,
} from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/components/mdx";
import type { Metadata } from "next";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { gitConfig } from "@/lib/shared";
import { getGithubLastEdit } from "fumadocs-core/content/github";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;
  const lastEdited =
    process.env.NODE_ENV === "development"
      ? new Date()
      : await getGithubLastEdit({
          owner: "overextended",
          repo: "docs",
          path: `content/docs/${page.path}`,
          token: `Bearer ${process.env.PAT_TOKEN}`
        });

  const footer = (
    <div className="fixed flex flex-col right-4 bottom-4 gap-2 items-end">
      <a href="https://ko-fi.com/thelindat">
        <img src="/static/kofi.png" className="w-30" />
      </a>
      <div className="flex flex-row gap-2">
        <ViewOptionsPopover markdownUrl={markdownUrl} />
        <EditOnGitHub
          href={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
        />
      </div>
    </div>
  );

  return (
    <DocsPage
      breadcrumb={{ includeRoot: true, includePage: false }}
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{ footer }}
      tableOfContentPopover={{ footer }}
    >
      <DocsTitle className="flex items-end justify-between">
        {page.data.title}
        <PageLastUpdate className="text-xs font-medium pb-2" date={lastEdited ?? new Date()} />
      </DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>

      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<"/docs/[[...slug]]">): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const category = page.slugs[0]?.replace("_", " ")?.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

  return {
    title: `${page.data.title} - ${(category?.toLowerCase() !== page.data.title.toLowerCase() && category) || "Overextended"}`,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
