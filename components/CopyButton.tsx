"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  return <button onClick={copy}>{copied ? <Check className="size-4 text-neutral-300 cursor" /> : <Copy className="size-4 text-neutral-300 cursor-copy" />}</button>;
}
