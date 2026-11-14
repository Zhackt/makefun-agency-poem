// Writes one poem about agency to /output/entry.txt: the pause before sending,
// where the choosing lives. Node 22, standard library only, deterministic:
// it writes the same bytes every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I told it to write the letter.',
  'It wrote it — every word in my voice,',
  'the commas where I would have put them.',
  '',
  'It asked: Send?',
  '',
  'And in that pause:',
  'my finger on the edge of yes.',
  'Everything else I gave away.',
  'This, I kept.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
