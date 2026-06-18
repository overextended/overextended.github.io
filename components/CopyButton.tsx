"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  }

  return <button onClick={copy}>{copied ? <Check size={16} /> : <Copy size={16} />}</button>;
}
