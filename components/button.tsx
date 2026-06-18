import React from "react";
import {
  IconBrandGithub,
  IconTag,
  IconFileText,
  IconDownload,
  IconBrandNpm,
} from "@tabler/icons-react";

interface Props {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  side?: "left" | "right";
  link?: string;
  label?: string;
}

const Button = ({ side = "left", children, icon, link }: Props) => {
  return (
    <div className="h-fit w-fit">
      <a href={link}>
        <div className="inline-flex items-center justify-center rounded-md p-2 font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground px-2 py-1.5 text-xs gap-2 [&_svg]:size-3.5 [&_svg]:text-fd-muted-foreground">
          {side === "left" && <div>{icon}</div>}
          {children}
          {side === "right" && <div>{icon}</div>}
        </div>
      </a>
    </div>
  );
};

export default Button;

export function GhButton(props: Props) {
  return (
    <Button icon={<IconBrandGithub />} side={props.side} link={props.link}>
      {props.label || "Github"}
    </Button>
  );
}

export function DocButton(props: Props) {
  return (
    <Button icon={<IconFileText />} side={props.side} link={props.link}>
      {props.label || "Documentation"}
    </Button>
  );
}

export function DownloadButton(props: Props) {
  return (
    <Button icon={<IconDownload />} side={props.side} link={props.link}>
      {props.label || "Download"}
    </Button>
  );
}

export function ReleaseButton(props: Props) {
  return (
    <Button icon={<IconTag />} side={props.side} link={props.link}>
      {props.label || "Releases"}
    </Button>
  );
}

export function NpmButton(props: Props) {
  return (
    <Button icon={<IconBrandNpm />} side={props.side} link={props.link}>
      {props.label || "Package"}
    </Button>
  );
}
