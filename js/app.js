// js/app.js

document.addEventListener('DOMContentLoaded', () => {
  const npc = document.getElementById('npc');
  const gptResponseText = document.getElementById('gpt-response');

  // Event klik pada NPC
  npc.addEventListener('click', async () => {
    // Tampilkan indikator proses berpikir
    gptResponseText.setAttribute('value', '🤖 AI sedang berpikir...');

    const prompt = "Ceritakan sesuatu yang menarik tentang Metaverse dalam 1 kalimat.";

    try {
      const response = await fetchGPTResponse(prompt);
      gptResponseText.setAttribute('value', response);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      gptResponseText.setAttribute('value', '❌ Gagal mengambil respons dari AI.');
    }
  });
});

// Komponen A-Frame: NPC bergerak bolak-balik (simulasi FSM sederhana)
AFRAME.registerComponent('npc-behaviour', {
  schema: {},
  init: function () {
    this.el.setAttribute('animation', {
      property: 'position',
      to: '1 0.5 -3',       // Titik akhir
      dur: 3000,            // Durasi animasi
      dir: 'alternate',     // Bolak-balik
      loop: true,
      easing: 'easeInOutQuad'
    });
  }
});
