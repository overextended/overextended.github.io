import { IconCoffee } from '@tabler/icons-react';

const DonateLink: React.FC<{ image: string; name: string; kofiName: string }> = ({ image, name, kofiName }) => {
  return (
    <div className="flex w-32 flex-col items-center justify-center gap-2">
      <p>{name}</p>
      <img src={image} alt={`${name}-image`} className="rounded-md bg-neutral-100 shadow-md dark:bg-neutral-900" />
      <a href={`https://ko-fi.com/${kofiName}`} target="_blank" className="w-full">
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-sky-500/20 p-2 text-sky-500 hover:bg-sky-500/30">
          <IconCoffee />
          Support
        </button>
      </a>
    </div>
  );
};

export default DonateLink;
