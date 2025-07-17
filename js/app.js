document.addEventListener('DOMContentLoaded', () => {
  const npc = document.getElementById('npc');
  const gptResponseText = document.getElementById('gpt-response');

  npc.addEventListener('click', async () => {
    gptResponseText.setAttribute('value', 'AI berpikir...');
    
    const prompt = "Ceritakan sesuatu yang menarik tentang Metaverse dalam 1 kalimat.";
    const response = await fetchGPTResponse(prompt);

    gptResponseText.setAttribute('value', response);
  });
});

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
