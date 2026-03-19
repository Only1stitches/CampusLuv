export default async function handler(req, res) {
  const { paymentId, txid } = req.body;
  const apiKey = "az4vrfje7tpvc2kmehv2hzrawklj7hlqruirzyarrlpmuhq6jzcspenwu8zoqlqq";

  try {
    const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
      method: 'POST',
      headers: { 
        'Authorization': `Key ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ txid })
    });
    
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
