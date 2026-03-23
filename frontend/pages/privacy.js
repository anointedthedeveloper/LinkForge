import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – LinkForge</title>
        <meta name="description" content="LinkForge privacy policy. We store only the URLs you shorten. No personal data collected." />
      </Head>
      <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full space-y-6">
          <h1 className="text-3xl font-bold text-indigo-400">Privacy Policy</h1>
          <div className="text-gray-400 text-sm space-y-4 leading-relaxed">
            <p>LinkForge stores only the URLs you submit in order to generate short links. We do not collect any personal information, track clicks, or use cookies.</p>
            <p>Short links and their original URLs are stored in a database solely to enable redirects. We do not sell or share this data with any third party.</p>
            <p>By using LinkForge, you agree not to shorten links to illegal, harmful, or malicious content.</p>
          </div>
          <Link href="/" className="text-indigo-400 text-sm hover:underline">← Back to shortener</Link>
        </div>
      </div>
    </>
  );
}
