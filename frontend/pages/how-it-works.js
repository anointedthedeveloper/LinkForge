import Head from "next/head";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How LinkForge Works – URL Shortener Explained</title>
        <meta name="description" content="Learn how LinkForge shortens URLs. Paste a long link, get a short one instantly. Built on FastAPI and Next.js." />
      </Head>
      <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full space-y-6">
          <h1 className="text-3xl font-bold text-indigo-400">How It Works</h1>
          <ol className="text-gray-400 text-sm space-y-4 list-decimal list-inside">
            <li><strong className="text-white">Paste your URL</strong> — enter any long link into the input field on the homepage.</li>
            <li><strong className="text-white">We generate a short code</strong> — our backend creates a unique 6-character code and stores the mapping in a database.</li>
            <li><strong className="text-white">Share your short link</strong> — copy the generated link and share it anywhere.</li>
            <li><strong className="text-white">Instant redirect</strong> — anyone who visits your short link is immediately redirected to the original URL.</li>
          </ol>
          <p className="text-gray-600 text-xs">Duplicate URLs always return the same short link — no clutter.</p>
          <Link href="/" className="text-indigo-400 text-sm hover:underline">← Try it now</Link>
        </div>
      </div>
    </>
  );
}
