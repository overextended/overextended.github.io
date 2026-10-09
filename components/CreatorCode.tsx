import CopyButton from "./CopyButton";

const CreatorCode = ([storeName, storeLink, code, percentOff, storeImage]: [
  string,
  string,
  string,
  number,
  string,
]) => {
  return (
    <div
      key={storeName}
      className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-md relative max-w-[260px]"
    >
      <a
        href={storeLink}
        target="_blank"
        className="h-[128px] flex items-center justify-center bg-neutral-800 dark:hover:bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-900 rounded-none rounded-tl-lg rounded-tr-lg"
      >
        <img className="self-center w-[120px]" src={storeImage} alt={storeName} />
      </a>
      <p className="text-sm self-end text-red-400 font-bold absolute mr-1 p-0.5 pointer-events-none rounded-sm bg-neutral-800">{percentOff}% off</p>
      <div className="flex items-center flex-col">
        <span className="font-bold text-lg pointer-events-none">{storeName}</span>
        <p className="text-sm border border-neutral-200 dark:border-neutral-700 rounded-lg">
          <code className="font-bold p-1.5 flex gap-1.5">{code} <CopyButton code={code} /></code>
        </p>
      </div>
    </div>
  );
};

export default CreatorCode;
