let counter = 0;

export default function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

  // Preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Main logic
  counter++;
  res.status(200).json({ order_number: counter });
}