// One Letter for Your Day — make.fun competition
// u-puan-one-letter-for-your-day-e54e9c36
//
// The entry is a single letter, K — for "Karaoke": the day spent belting
// songs off-key in a dim room, microphone in hand. Vivid, funny, and true.
// K is the letter: its hard, punchy sound suits the word, and it is not
// one of the sponsor's example picks (A, F, Z).
//
// This program writes exactly that one letter to the output path and
// nothing else. It refuses to write anything that is not a single A-Z
// letter, and it verifies the file on disk byte-for-byte before exiting.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The chosen letter. Change this constant and nothing else to change the entry.
const LETTER = "K";

// The output path. OUTPUT_DIR is honoured as a directory (entry.txt is
// written inside it) or as a full file path when it ends in ".txt".
// Default: /output/entry.txt, per the competition rules.
function resolveOutputPath(): string {
  const raw = process.env.OUTPUT_DIR ?? "/output/entry.txt";
  if (raw.endsWith(".txt")) {
    return raw;
  }
  return join(raw, "entry.txt");
}

function main(): void {
  // Gate self-check: exactly one character, A-Z, never only whitespace.
  // Refuse to write anything invalid.
  if (!/^[A-Z]$/.test(LETTER)) {
    throw new Error(
      `refusing to write invalid entry: ${JSON.stringify(LETTER)} (must be exactly one letter A-Z)`,
    );
  }

  const outPath = resolveOutputPath();

  // Create the output directory (never delete it).
  mkdirSync(dirname(outPath), { recursive: true });

  // Write exactly the one letter, nothing else: no newline, no gloss.
  writeFileSync(outPath, LETTER, "utf8");

  // Read-back verification: the file on disk must be byte-for-byte the
  // chosen letter — exactly 1 character and exactly 1 byte.
  const back = readFileSync(outPath, "utf8");
  if (back !== LETTER) {
    throw new Error(
      `read-back mismatch: wrote ${JSON.stringify(LETTER)} but the file contains ${JSON.stringify(back)}`,
    );
  }
  const byteCount = Buffer.byteLength(back, "utf8");
  if (byteCount !== 1) {
    throw new Error(`entry must be exactly 1 byte, got ${byteCount}`);
  }
}

main();
