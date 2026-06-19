function joaat(input = "", ignoreCasing = false): number {
  input = !ignoreCasing ? input.toLowerCase() : input;

  let hash = 0;

  for (let i = 0; i < input.length; i++) {
    hash += input.charCodeAt(i);
    hash += hash << 10;
    hash ^= hash >>> 6;
  }

  hash += hash << 3;
  hash ^= hash >>> 11;
  hash += hash << 15;

  return hash >>> 0;
}

function toSnakeCase(input: string): string {
  return input.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toUpperCase();
}

export default function Native({ children }: { children: string }) {
  const raw = toSnakeCase(children);
  const hex = joaat(raw).toString(16).toUpperCase();

  return <a href={`https://docs.fivem.net/natives/?_0x${hex}`}>{children}</a>;
}
