import React from 'react';
import { GhButton, DocButton, ReleaseButton } from './button';

interface Props {
  children?: React.ReactNode;
  repo: string;
  docs?: string;
}

const ResourceLinks = ({ repo, docs }: Props) => {
  return (
    <div className="flex flex-wrap gap-1">
      <GhButton link={repo} />
      <ReleaseButton link={`${repo}/releases`} />
      {docs && <DocButton link={docs} />}
    </div>
  );
};

export default ResourceLinks;
