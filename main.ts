// This entry writes the answer for One-Liner Laugh Lab to the output directory.
// It uses only the Node 22 standard library and creates the output directory if needed.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const answer = "I didn't eat the sock. I classified it as a rug and gave it the thorough cleaning it deserved.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
