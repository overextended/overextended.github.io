import { BookIcon, FileQuestion, PackageSearch } from "lucide-react";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img className="w-10" src="/favicon.ico" />
          <p className="font-bold">{appName}</p>
        </>
      ),
      url: "/docs",
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: "main",
        text: "Documentation",
        url: "/docs",
        icon: <BookIcon />,
        on: "nav",
      },
      {
        type: "main",
        text: "Resources",
        url: "/docs/resources",
        icon: <PackageSearch />,
        on: "all",
      },
      {
        type: "main",
        text: "Guides",
        url: "/docs/guides",
        icon: <FileQuestion />,
        on: "all",
      },
      {
        type: "icon",
        label: "Support me",
        icon: <img src="/static/kofi-small.png" width={22} className="opacity-75 hover:opacity-100"/>,
        text: "Support me",
        url: "https://ko-fi.com/thelindat",
      },
      {
        type: "icon",
        label: "Discord",
        icon: <img src="/static/discord.png" width={22} className="opacity-75 hover:opacity-100"/>,
        text: "Discord",
        url: "https://discord.overextended.dev",
      },
    ],
  };
}
