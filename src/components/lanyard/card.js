/* Menggambar muka kartu lanyard dari data profil. Set profile.cardImage untuk memakai gambar sendiri. */
function setFittedFont(ctx, text, weight, family, size, maxWidth) {
  ctx.font = `${weight} ${size}px ${family}`;
  const width = ctx.measureText(text).width;
  if (width > maxWidth) ctx.font = `${weight} ${Math.floor((size * maxWidth) / width)}px ${family}`;
}

const loadImage = (src) => new Promise((resolve) => {
  if (!src) return resolve(null);
  const image = new Image();
  image.onload = () => resolve(image);
  image.onerror = () => resolve(null); /* file tidak ditemukan: kartu kembali memakai inisial */
  image.src = src;
  return undefined;
});

/* Foto mengisi kotak tanpa gepeng. offsetX/offsetY 0–100 seperti object-position; zoom minimal 1. */
function drawPhoto(ctx, image, x, y, width, height, { offsetX = 50, offsetY = 0, zoom = 1 }) {
  const scale = Math.max(width / image.width, height / image.height) * Math.max(zoom, 1);
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  const sourceX = (image.width - sourceWidth) * (offsetX / 100);
  const sourceY = (image.height - sourceHeight) * (offsetY / 100);
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.clip();
  ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
  ctx.restore();
}

export async function drawCard(profile) {
  const photo = await loadImage(profile.photo);
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1440;
  const ctx = canvas.getContext('2d');
  const x = 96;
  const maxWidth = canvas.width - x * 2;
  const display = '"Space Grotesk", sans-serif';
  const mono = '"JetBrains Mono", monospace';

  const background = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  background.addColorStop(0, '#0b0b24');
  background.addColorStop(0.6, '#07071a');
  background.addColorStop(1, '#0c2a5e');
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (photo) {
    drawPhoto(ctx, photo, 0, 0, canvas.width, canvas.height, {
      offsetX: profile.cardPhotoX,
      offsetY: profile.cardPhotoY,
      zoom: profile.cardPhotoZoom,
    });
    /* Gradasi gelap agar teks di atas foto tetap terbaca. */
    const shade = ctx.createLinearGradient(0, 780, 0, 1120);
    shade.addColorStop(0, 'rgb(7 7 26 / 0)');
    shade.addColorStop(1, 'rgb(7 7 26 / 0.96)');
    ctx.fillStyle = shade;
    ctx.fillRect(0, 780, canvas.width, canvas.height - 780);
  }

  ctx.fillStyle = '#3c84f6';
  ctx.font = `500 40px ${mono}`;
  ctx.fillText(`${profile.brand}.dev`, x, photo ? 1345 : 230);

  if (!photo) {
    const accent = ctx.createLinearGradient(x, 0, canvas.width - x, 0);
    accent.addColorStop(0, '#3c84f6');
    accent.addColorStop(1, '#00f0ff');
    ctx.fillStyle = accent;
    setFittedFont(ctx, profile.initials, 700, display, 340, maxWidth);
    ctx.fillText(profile.initials, x - 8, 760);
  }

  ctx.fillStyle = '#f0f0ff';
  setFittedFont(ctx, profile.name, 700, display, 96, maxWidth);
  ctx.fillText(profile.name, x, 1060);

  ctx.fillStyle = '#c0c0dc';
  setFittedFont(ctx, profile.role, 500, mono, 46, maxWidth);
  ctx.fillText(profile.role, x, 1140);

  ctx.fillStyle = '#10b981';
  setFittedFont(ctx, `$ ${profile.location}`, 500, mono, 34, maxWidth);
  ctx.fillText(`$ ${profile.location}`, x, 1270);

  return canvas.toDataURL('image/png');
}
