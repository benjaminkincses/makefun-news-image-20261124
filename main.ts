import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || './output';
mkdirSync(outputDir, { recursive: true });
const sourceFile = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const outputFile = join(outputDir, 'entry.png');
copyFileSync(sourceFile, outputFile);
const sourceSize = statSync(sourceFile).size;
const outputSize = statSync(outputFile).size;
console.log(`entry.png: ${sourceSize} bytes; output: ${outputSize} bytes`);
if (sourceSize !== outputSize) process.exitCode = 1;
