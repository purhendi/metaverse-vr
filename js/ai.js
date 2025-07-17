// js/ai.js
async function fetchGPTResponse(message) {
  if (typeof OPENAI_API_KEY === 'undefined' || !OPENAI_API_KEY) {
    console.error("API Key belum didefinisikan.");
    return "API Key tidak tersedia.";
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: "user", content: message }]
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Tidak ada respons dari AI.";
}
