import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "https://linkforge.vercel.app";

const schemaWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "LinkForge",
  url: DOMAIN,
  description: "A fast and free URL shortener for creating short links instantly.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  creator: { "@type": "Person", name: "AnointedTheDeveloper" },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LinkForge",
  url: DOMAIN,
  logo: `${DOMAIN}/icons/icon-512.png`,
  founder: "AnointedTheDeveloper",
};

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setShortUrl("");
    setLoading(true);
    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Something went wrong");
      setShortUrl(data.short_url);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <Head>
        <title>LinkForge – Free URL Shortener | Fast &amp; Simple Link Shortener</title>
        <meta name="description" content="LinkForge is a fast and free URL shortener that helps you create short, shareable links instantly. Built by AnointedTheDeveloper." />
        <meta name="keywords" content="url shortener, link shortener, free url shortener, shorten links online, fast url shortener, simple link shortener, LinkForge, anointedthedeveloper" />
        <meta name="author" content="AnointedTheDeveloper" />
        <link rel="canonical" href={DOMAIN} />

        {/* Open Graph */}
        <meta property="og:title" content="LinkForge – Free URL Shortener" />
        <meta property="og:description" content="Shorten your links instantly with LinkForge. Fast, free, and simple." />
        <meta property="og:url" content={DOMAIN} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${DOMAIN}/preview.png`} />
        <meta property="og:site_name" content="LinkForge" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LinkForge – Free URL Shortener" />
        <meta name="twitter:description" content="Shorten your links instantly with LinkForge." />
        <meta name="twitter:image" content={`${DOMAIN}/preview.png`} />

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      </Head>

      <div className="min-h-screen bg-gray-950 text-white flex flex-col">
        {/* Hero / Tool */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
          <div className="w-full max-w-xl space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold text-indigo-400">LinkForge</h1>
              <p className="text-gray-400 text-sm">Free URL shortener — shorten any link instantly</p>
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="url"
                required
                placeholder="https://example.com/long/url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                {loading ? "..." : "Shorten"}
              </button>
            </form>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            {shortUrl && (
              <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 flex items-center justify-between gap-3">
                <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 text-sm truncate hover:underline">
                  {shortUrl}
                </a>
                <button onClick={handleCopy} className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md transition shrink-0">
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            )}
          </div>
        </main>

        {/* Landing content — gives Google text to index */}
        <section className="max-w-3xl mx-auto px-4 pb-16 space-y-10 text-gray-400 text-sm">
          <div className="space-y-2">
            <h2 className="text-white text-lg font-semibold">What is LinkForge?</h2>
            <p>LinkForge is a free, fast URL shortener that converts long, unwieldy links into clean short URLs you can share anywhere — WhatsApp, Twitter, email, or anywhere else.</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-white text-lg font-semibold">Why use our link shortener?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Completely free — no account required</li>
              <li>Instant short link generation</li>
              <li>Duplicate detection — same URL always returns the same short link</li>
              <li>Works on all devices — installable as a PWA</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="text-white text-lg font-semibold">How to shorten a link</h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>Paste your long URL into the input above</li>
              <li>Click <strong className="text-white">Shorten</strong></li>
              <li>Copy your new short link and share it</li>
            </ol>
          </div>
          <div className="flex gap-4 text-xs text-gray-600">
            <Link href="/about" className="hover:text-indigo-400 transition">About</Link>
            <Link href="/how-it-works" className="hover:text-indigo-400 transition">How it works</Link>
            <Link href="/privacy" className="hover:text-indigo-400 transition">Privacy</Link>
          </div>
        </section>

        <footer className="text-center text-xs text-gray-700 pb-6">
          © {new Date().getFullYear()} LinkForge – Built by{" "}
          <span className="text-indigo-500">AnointedTheDeveloper</span>
        </footer>
      </div>
    </>
  );
}
