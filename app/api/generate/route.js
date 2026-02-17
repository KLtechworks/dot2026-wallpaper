import { createCanvas } from 'canvas';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  let dotColor = searchParams.get('dotColor') || 'FF8000';
  let bgColor = searchParams.get('bgColor') || '4A4A4A';
  
  if (!dotColor.startsWith('#')) dotColor = '#' + dotColor;
  if (!bgColor.startsWith('#')) bgColor = '#' + bgColor;

  const today = new Date();
  const yearStart = new Date(2026, 0, 1);
  const totalDays = 365;

  const msPerDay = 1000 * 60 * 60 * 24;
  let daysPassed = Math.floor((today - yearStart) / msPerDay) + 1;
  if (daysPassed < 1) daysPassed = 0;
  if (daysPassed > totalDays) daysPassed = totalDays;

  const percent = Math.round((daysPassed / totalDays) * 100);
  const daysLeft = totalDays - daysPassed;

  const width = 1290;
  const height = 2796;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  const cols = 17;
  const rows = Math.ceil(totalDays / cols);
  const dotSize = 22;
  const spacing = 38;
  const gridWidth = cols * spacing;
  const gridHeight = rows * spacing;

  const offsetX = (width - gridWidth) / 2;
  const offsetY = (height - gridHeight) / 2 - 200; 

  for (let i = 0; i < totalDays; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = offsetX + col * spacing;
    const y = offsetY + row * spacing;

    if (i < daysPassed) {
      ctx.fillStyle = dotColor;
    } else if (i === daysPassed) {
      ctx.fillStyle = '#FFFF00';
    } else {
      ctx.fillStyle = '#555555';
    }

    ctx.beginPath();
    ctx.arc(x + dotSize / 2, y + dotSize / 2, dotSize / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.font = 'bold 100px Arial';         

  const text = `${daysLeft}d left ${percent}%`;  
  ctx.fillText(text, width / 2, offsetY + gridHeight + 140);  
  const buffer = canvas.toBuffer('image/png');
  return new Response(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': 'inline',
    },
  });
}