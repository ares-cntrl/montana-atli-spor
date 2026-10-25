const video = document.querySelector('#hero-video');
const toggle = document.querySelector('#video-toggle');
const icon = document.querySelector('#video-icon');
const label = document.querySelector('#video-label');
function updateVideoControl() {
  const text = video.paused ? 'Videoyu oynat' : 'Videoyu duraklat';
  toggle.setAttribute('aria-label', text);
  toggle.title = text;
  label.textContent = text;
  icon.textContent = video.paused ? '▷' : 'Ⅱ';
}
toggle.addEventListener('click', async () => {
  if (video.paused) { try { await video.play(); } catch { label.textContent = 'Video oynatılamadı'; } }
  else video.pause();
  updateVideoControl();
});
video.addEventListener('play', updateVideoControl);
video.addEventListener('pause', updateVideoControl);
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  video.autoplay = false;
  video.pause();
}
updateVideoControl();
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); menuButton.focus(); } });
