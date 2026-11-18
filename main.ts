// news-image-20261117 entry: a newspaper front page summing up Tuesday, November 17, 2026.
// The poster (entry.png) was composed for this competition: three AI-generated editorial
// illustrations (Gulf strikes, Kerch Bridge, Shenzhen skyline) with all text rendered in
// PIL, so no letter is ever AI-garbled. The program itself only copies that image to
// /output/entry.png, deterministically, with no network and no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
