// js/ai.js — Hybrid GPT: dummy untuk GitHub Pages, asli untuk lokal

async function fetchGPTResponse(message) {
  const isOnline = location.hostname.includes("github.io") || location.hostname.includes("vercel.app");

  if (isOnline || typeof OPENAI_API_KEY === 'undefined' || !OPENAI_API_KEY) {
    // Dummy response untuk GitHub Pages
    const dummyResponses = [
      "Simulasi GPT aktif karena API key tidak tersedia di GitHub Pages.",
      "Ini hanya respons dummy untuk keperluan UAS.",
      "GPT asli tersedia jika dijalankan secara lokal.",
      "GitHub Pages tidak mendukung API key demi keamanan.",
      "Silakan jalankan lokal untuk versi asli AI GPT."
    ];
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi delay
    const randomIndex = Math.floor(Math.random() * dummyResponses.length);
    return dummyResponses[randomIndex];
  }

  // GPT asli (lokal)
  try {
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
  } catch (error) {
    console.error("Gagal mengambil respons dari GPT:", error);
    return "❌ Terjadi kesalahan saat menghubungi AI.";
  }
}
