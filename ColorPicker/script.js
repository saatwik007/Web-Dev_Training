const imageInput = document.getElementById('imageInput');
const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');
const colorSwatch = document.getElementById('colorSwatch');
const colorValue = document.getElementById('colorValue');
const colorName = document.getElementById('colorName');
const copyBtn = document.getElementById('copyBtn');
const saveBtn = document.getElementById('saveBtn');
const paletteList = document.getElementById('paletteList');
const dominantColorSwatch = document.getElementById('dominantColorSwatch');
const dominantColorValue = document.getElementById('dominantColorValue');
const uploadLabel = document.querySelector('.custom-upload');

let currentHex = "#FFFFFF";
let palette = [];
const targetWidth = 300;
const targetHeight = 200;

// Custom styled upload button
uploadLabel.addEventListener("click", () => {
  imageInput.click();
});

imageInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    const img = new Image();
    img.onload = function() {
      // Scale image to fit the target area
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Keep image aspect ratio
      let scale = Math.min(targetWidth / img.width, targetHeight / img.height);
      let x = (targetWidth - img.width * scale) / 2;
      let y = (targetHeight - img.height * scale) / 2;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

      // After drawing, extract and show dominant color
      const domColor = getDominantColor(ctx, targetWidth, targetHeight, 5);
      dominantColorSwatch.style.background = domColor;
      dominantColorValue.textContent = domColor;
    }
    img.src = ev.target.result;
  }
  reader.readAsDataURL(file);
});

canvas.addEventListener('click', function(e) {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor(e.clientX - rect.left);
  const y = Math.floor(e.clientY - rect.top);
  const pixel = ctx.getImageData(x, y, 1, 1).data;
  const rgb = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
  const hex = rgbToHex(pixel[0], pixel[1], pixel[2]);
  currentHex = hex;
  colorSwatch.style.background = hex;
  colorValue.textContent = `${hex} | ${rgb}`;
  colorName.textContent = " (" + getColorName(pixel[0], pixel[1], pixel[2]) + ")";
});

copyBtn.addEventListener('click', function() {
  navigator.clipboard.writeText(currentHex)
    .then(() => { 
      copyBtn.textContent = "Copied!"; 
      setTimeout(()=>copyBtn.textContent="Copy HEX", 1200); 
    });
});

saveBtn.addEventListener('click', function() {
  if (!palette.includes(currentHex)) {
    palette.push(currentHex);
    renderPalette();
  }
});

function renderPalette() {
  paletteList.innerHTML = '';
  palette.forEach(hex => {
    const div = document.createElement('div');
    div.className = 'palette-color';
    div.style.background = hex;
    div.title = hex;
    const span = document.createElement('span');
    span.textContent = hex;
    div.appendChild(span);
    div.onclick = () => {
      navigator.clipboard.writeText(hex);
      div.style.border = '2px solid #252525';
      setTimeout(()=>div.style.border='1.7px solid #e0e0e0',600);
    };
    paletteList.appendChild(div);
  });
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16).slice(1).toUpperCase();
}

// Simple color name lookup for demo
function getColorName(r, g, b) {
  const namedColors = [
    {name:"Black", rgb:[0,0,0]},
    {name:"White", rgb:[255,255,255]},
    {name:"Red", rgb:[255,0,0]},
    {name:"Lime", rgb:[0,255,0]},
    {name:"Blue", rgb:[0,0,255]},
    {name:"Yellow", rgb:[255,255,0]},
    {name:"Cyan", rgb:[0,255,255]},
    {name:"Magenta", rgb:[255,0,255]},
    {name:"Silver", rgb:[192,192,192]},
    {name:"Gray", rgb:[128,128,128]},
    {name:"Maroon", rgb:[128,0,0]},
    {name:"Olive", rgb:[128,128,0]},
    {name:"Green", rgb:[0,128,0]},
    {name:"Purple", rgb:[128,0,128]},
    {name:"Teal", rgb:[0,128,128]},
    {name:"Navy", rgb:[0,0,128]}
  ];
  let minDist = Infinity, closest = "Unknown";
  for (const c of namedColors) {
    let dist = Math.sqrt(
      Math.pow(r-c.rgb[0],2) + Math.pow(g-c.rgb[1],2) + Math.pow(b-c.rgb[2],2)
    );
    if (dist < minDist) { minDist = dist; closest = c.name; }
  }
  return closest;
}

// Dominant color extraction
function getDominantColor(ctx, width, height, step = 5) {
  const data = ctx.getImageData(0, 0, width, height).data;
  const colorCount = {};
  let maxCount = 0, dominantColor = "#000000";

  for (let i = 0; i < data.length; i += 4 * step) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const hex = rgbToHex(r, g, b);
    colorCount[hex] = (colorCount[hex] || 0) + 1;
    if (colorCount[hex] > maxCount) {
      maxCount = colorCount[hex];
      dominantColor = hex;
    }
  }
  return dominantColor;
}