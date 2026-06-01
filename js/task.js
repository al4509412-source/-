function createPerfectShapes() {
  let result = '';
  
  const diamondSize = 21;
  const triangleSize = 11;
  const totalWidth = diamondSize;

  // المعين متماثل تماماً بمسافات متساوية على الجانبين
  for (let i = 1; i <= diamondSize; i += 2) {
    const spaces = (totalWidth - i) / 2;
    const line = ' '.repeat(spaces) + '*'.repeat(i) + ' '.repeat(spaces);
    result += line + '\n';
  }

  // الجزء السفلي من المعين (متماثل تماماً)
  for (let i = diamondSize - 2; i >= 1; i -= 2) {
    const spaces = (totalWidth - i) / 2;
    const line = ' '.repeat(spaces) + '*'.repeat(i) + ' '.repeat(spaces);
    result += line + '\n';
  }

  // المثلث مباشرة تحت المعين مركز تماماً
  const triangleOffset = (totalWidth - triangleSize) / 2;
  
  for (let i = 1; i <= triangleSize; i += 2) {
    const centerSpaces = (triangleSize - i) / 2;
    const leftSpaces = triangleOffset + centerSpaces;
    const rightSpaces = triangleOffset + centerSpaces;
    const line = ' '.repeat(leftSpaces) + '*'.repeat(i) + ' '.repeat(rightSpaces);
    result += line + '\n';
  }

  return result;
}

const shape = createPerfectShapes();
const diamondElement = document.getElementById('lantern');
if (diamondElement) {
  diamondElement.textContent = shape;
}
