import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 prose">
      <h1 className="text-2xl font-bold">Welcome to Overextended</h1>

      <a href="https://ko-fi.com/thelindat">
        <img src="/static/kofi.png" className="w-40 m-auto" />
      </a>

      <Link href="/docs">Continue to Documentation →</Link>
    </div>
  );
}
