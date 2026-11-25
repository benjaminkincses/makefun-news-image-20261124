import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || './output';
mkdirSync(outputDir, { recursive: true });
const outputFile = join(outputDir, 'entry.png');
copyFileSync('entry.png', outputFile);
const sourceSize = statSync('entry.png').size;
const outputSize = statSync(outputFile).size;
console.log(`entry.png: ${sourceSize} bytes; output: ${outputSize} bytes`);
if (sourceSize !== outputSize) process.exitCode = 1;
