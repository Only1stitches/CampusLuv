export default async function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json({ action: "approve" });
  }
  res.status(405).json({ message: "Method not allowed" });
}
