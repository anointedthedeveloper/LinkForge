function Robots() {}

export function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/plain");
  res.write(`User-agent: *\nAllow: /\nSitemap: https://linkforge.vercel.app/sitemap.xml`);
  res.end();
  return { props: {} };
}

export default Robots;
