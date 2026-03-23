import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About LinkForge – Free URL Shortener by AnointedTheDeveloper</title>
        <meta name="description" content="Learn about LinkForge, a free and fast URL shortener built by AnointedTheDeveloper using FastAPI and Next.js." />
      </Head>
      <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full space-y-6">
          <h1 className="text-3xl font-bold text-indigo-400">About LinkForge</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            LinkForge is a lightweight, open-source URL shortener built with <strong className="text-white">FastAPI</strong> and <strong className="text-white">Next.js</strong>. It was created by <strong className="text-indigo-400">AnointedTheDeveloper</strong> as a clean, no-nonsense tool for shortening links instantly — no sign-up, no tracking, no bloat.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            The goal is simple: paste a long URL, get a short one. That&apos;s it.
          </p>
          <Link href="/" className="text-indigo-400 text-sm hover:underline">← Back to shortener</Link>
        </div>
      </div>
    </>
  );
}
