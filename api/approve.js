export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  
  const { paymentId } = req.body;
  const apiKey = "az4vrfje7tpvc2kmehv2hzrawklj7hlqruirzyarrlpmuhq6jzcspenwu8zoqlqq";

  try {
    const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
      method: 'POST',
      headers: { 
        'Authorization': `Key ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
