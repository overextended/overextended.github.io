import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <title>Overextended</title>
      <div className="flex justify-center text-center prose mt-6">
        <div className="w-2/3">
          <h1 className="text-2xl font-bold">Welcome to Overextended</h1>
          <Link href="/docs">Continue to Documentation →</Link>

          <p className="text-left">
            Overextended was founded in 2021 as a collaborative effort between three developers to create secure, high-quality, free, and open-source resources for FiveM.
            <br /><br />
            Our first project was a complete rewrite of <b>linden_inventory</b>, aimed at addressing major design flaws and replacing its poorly written UI. As part of the rewrite, we moved from jQuery to React and began looking for a more stable, secure, and performant solution for querying MySQL databases.
            <br /><br />
            At the time, both <b>mysql-async</b> and <b>ghmattimysql</b> were effectively abandonware and lacked several important features, most notably prepared statements. To address these limitations, we created <b>oxmysql</b> to meet the needs of our own projects. It quickly grew beyond its original purpose and became the de facto standard MySQL resource for FiveM.
            <br /><br />
            As the number and complexity of our resources grew, we found ourselves repeatedly developing the same utilities and functionality. We wanted a way to share this code between projects without tying it to a particular framework or ecosystem. This led to <b>ox_lib</b>, a general-purpose library designed to provide reusable functionality without requiring developers to adopt ESX, QBCore, or any other framework.
            <br /><br />
            Rather than building around the assumptions and conventions of a single framework, ox_lib provided common building blocks that could be used independently by any resource. This allowed functionality to be shared across projects while keeping individual resources flexible and framework-agnostic. ox_lib eventually became a foundation for much of the Overextended ecosystem, providing common functionality for everything from user interfaces and callbacks to utilities, networking, and other systems.
            <br /><br />
            What began as an effort to improve a single inventory resource ultimately grew into a broader collection of open-source resources focused on reusability, performance, security, and maintainability.
          </p>

          <a href="https://ko-fi.com/thelindat">
            <img src="/static/kofi.png" className="w-32" />
          </a>
        </div>
      </div>
    </>
  );
}
