// Minimal behavior: handle fallback for /distinto link and basic accessibility
document.addEventListener('DOMContentLoaded', () => {
  // if /distinto exists, do nothing; otherwise fallback to Spotify search
  const listen = document.querySelector('.btn.primary');
  if (!listen) return;
  // only run if listen points to relativo
  const href = listen.getAttribute('href') || '';
  if (href && href.startsWith('distinto')) {
    fetch(href, { method: 'HEAD' }).then(res => {
      if (!res.ok) listen.href = "https://open.spotify.com/search/falodi%20distinto";
    }).catch(() => {
      listen.href = "https://open.spotify.com/search/falodi%20distinto";
    });
  }

  // small enhancement: allow Enter key to open primary button when focused
  listen.addEventListener && listen.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') listen.click();
  });
});