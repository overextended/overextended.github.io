import React from "react";
import { GhButton, DocButton, ReleaseButton } from "./button";

interface Props {
  children?: React.ReactNode;
  repo: string;
  docs?: string;
}

const ResourceLinks = ({ repo, docs }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <GhButton link={repo} />
      <ReleaseButton link={`${repo}/releases`} />
      {docs && <DocButton link={docs} />}
    </div>
  );
};

export default ResourceLinks;
