function createLantern(size) {
  let result = '';

  // الجزء العلوي من الماسة
  for (let i = 1; i <= size; i += 2) {
    const spaces = (size - i) / 2;
    result += ' '.repeat(spaces) + '*'.repeat(i) + '\n';
  }

  // الجزء السفلي من الماسة
  for (let i = size - 2; i >= 1; i -= 2) {
    const spaces = (size - i) / 2;
    result += ' '.repeat(spaces) + '*'.repeat(i) + '\n';
  }

  // المثلث الصغير تحت الماسة
  const triangleWidth = 7;
  const centerSpace = (size - triangleWidth) / 2;
  for (let i = 1; i <= triangleWidth; i += 2) {
    const spaces = centerSpace + (triangleWidth - i) / 2;
    result += ' '.repeat(spaces) + '*'.repeat(i) + '\n';
  }

  return result;
}

const lanternSize = 21;
const lantern = createLantern(lanternSize);
const pre = document.createElement('pre');
pre.style.textAlign = 'center';
pre.style.fontFamily = 'monospace';
pre.style.fontSize = '18px';
pre.style.lineHeight = '1';
pre.textContent = lantern;

document.body.style.margin = '0';
document.body.style.minHeight = '100vh';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.background = '#f7f7f7';
document.body.appendChild(pre);
