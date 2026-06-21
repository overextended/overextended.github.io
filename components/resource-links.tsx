import React from "react";
import { GhButton, DownloadButton, NpmButton } from "./button";

interface Props {
  children?: React.ReactNode;
  repo: string;
  npm?: boolean;
}

const ResourceLinks = ({ repo, npm }: Props) => {
  const github = `https://github.com/overextended/${repo}`;
  const download = `${github}/releases/latest/download/${repo}.zip`;
  const npmjs = `https://www.npmjs.com/package/@overextended/${repo}`;

  return (
    <div className="flex flex-row gap-2">
      <GhButton link={github} />
      <DownloadButton link={download} />
      {npm && <NpmButton link={npmjs} />}
    </div>
  );
};

export default ResourceLinks;
