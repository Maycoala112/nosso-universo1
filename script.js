function toggleMoonText() {
  const text = document.getElementById('moon-text');
  text.style.display = text.style.display === 'none' ? 'block' : 'none';

  const audio = document.getElementById('bg-music');
  if (audio.paused) {
    audio.play();
  }
}
