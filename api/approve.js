export default async function handler(req, res) {
  const { paymentId } = req.body;
  
  // This is your specific API Key from the screenshot
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
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
