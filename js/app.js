// js/app.js

document.addEventListener('DOMContentLoaded', () => {
  const npc = document.getElementById('npc');
  const gptResponseText = document.getElementById('gpt-response');

  npc.addEventListener('click', async () => {
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

// NPC animation (simulasi FSM)
AFRAME.registerComponent('npc-behaviour', {
  schema: {},
  init: function () {
    this.el.setAttribute('animation', {
      property: 'position',
      to: '1 0.5 -3',
      dur: 3000,
      dir: 'alternate',
      loop: true,
      easing: 'easeInOutQuad'
    });
  }
});
