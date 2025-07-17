// js/ai.js — Hybrid: GPT asli (lokal) & Dummy (GitHub Pages)

async function fetchGPTResponse(message) {
  const isOnlineHost = location.hostname.includes("github.io") || location.hostname.includes("vercel.app");

  // Jika dijalankan di GitHub Pages atau tanpa API Key → Gunakan dummy
  if (isOnlineHost || typeof OPENAI_API_KEY === 'undefined' || !OPENAI_API_KEY) {
    const dummyResponses = [
      "Simulasi GPT aktif karena API key tidak tersedia di GitHub Pages.",
      "Ini hanya respons dummy untuk keperluan UAS.",
      "GPT asli tersedia jika dijalankan secara lokal.",
      "GitHub Pages tidak mendukung API key demi keamanan.",
      "Silakan jalankan secara lokal untuk versi AI GPT asli."
    ];
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi delay
    return dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
  }

  // Jika dijalankan secara lokal dengan API Key → Gunakan OpenAI
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
    return "Terjadi kesalahan saat menghubungi AI.";
  }
}
