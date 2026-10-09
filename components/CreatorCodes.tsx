import CreatorCode from "@/components/CreatorCode";

function CreatorCodes(data: [string, string, string, number, string][]) {
  return (
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 mt-4 gap-4">
      {data.sort(() => Math.random() - 0.5).map((creator) => CreatorCode(creator))}
    </div>
  );
}

export default CreatorCodes;
