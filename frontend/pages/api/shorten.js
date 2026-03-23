const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const response = await fetch(`${BACKEND_URL}/shorten`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch {
    res.status(502).json({ detail: "Backend unavailable" });
  }
}
