import fs from "fs";

/**
 * Used to incrice readability of the code in
 * react component and DOM inspector
 * instead of using inline style.
 * Inline style is now used only for draging.
 * `<div className={'... piece-${x}-${y}'} /> `
 *
 * @param {number} sizeX
 * @param {number} sizeY
 * @return {string}
 */
function generatePositionCSS(sizeX, sizeY) {
  let css = "";
  for (let x = 0; x < sizeX; x++) {
    for (let y = 0; y < sizeY; y++) {
      css += `.cell-${x}-${y} {
    transform: translate(${x * 100}%, ${y * 100}%);
}
`;
    }
  }
  return css;
}

const output = process.argv[2] ?? "src/piece.css";

const sizeX = process.argv[3] ?? 16;
const sizeY = process.argv[4] ?? 12;

const css = generatePositionCSS(sizeX, sizeY);

fs.writeFileSync(output, css);

console.log(`Generated ${output}`);
