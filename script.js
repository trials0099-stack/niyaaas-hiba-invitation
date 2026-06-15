function openInvite() {
  document.getElementById('content').classList.remove('hidden');
  document.querySelector('.hero button').style.display = 'none';
  const music = document.getElementById('music');
  music.play().catch(() => {});
}

const weddingDate = new Date("2027-10-10T11:00:00");

setInterval(() => {
  const now = new Date();
  const diff = weddingDate - now;
  if (diff <= 0) {
    document.getElementById("countdown").innerText = "It's Wedding Time!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById("countdown").innerText =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}, 1000);

function shareWhatsApp() {
  const url = window.location.href;
  window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank");
}
