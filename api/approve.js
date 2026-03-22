const PI_API_KEY = process.env.PI_API_KEY;

export default async function handler(req, res) {
  // This tells the file to use the key from Vercel
  res.status(200).json({ message: "Approve endpoint active" });
}
