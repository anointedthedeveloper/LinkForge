const DOMAIN = "https://linkforge.vercel.app";

const pages = ["/", "/about", "/how-it-works", "/privacy"];

function Sitemap() {}

export function getServerSideProps({ res }) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${DOMAIN}${p}</loc><changefreq>monthly</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(xml);
  res.end();
  return { props: {} };
}

export default Sitemap;
