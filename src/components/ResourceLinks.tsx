import React from 'react';
import IconButton from './IconButton';
import { BsGithub, BsBookHalf } from 'react-icons/bs';

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
  repo: string;
  docs?: string;
}

const ResourceLinks: React.FC<Props> = (props) => {
  return (
    <div style={{ display: 'flex' }}>
      <a href={props.repo} style={{ marginRight: '0.6rem' }}>
        <IconButton side="left" icon={<BsGithub />}>
          GitHub
        </IconButton>
      </a>
      {props.docs && (
        <a href={props.docs}>
          <IconButton side="left" icon={<BsBookHalf />}>
            Documentation
          </IconButton>
        </a>
      )}
    </div>
  );
};

export default ResourceLinks;
