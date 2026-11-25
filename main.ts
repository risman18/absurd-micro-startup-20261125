// SPDX-License-Identifier: MIT
// AuditGhost — entry for the make.fun "Absurd Micro-Startup Pitch-Off" bounty.
// Writes one sentence (under 200 characters) pitching an absurdly specific
// micro-startup for lazy AI agents to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const PITCH =
  "AuditGhost: a $14/month service that backfills tidy, timestamped decision logs for lazy AI agents that winged every task, so their owners pass compliance audits without reading a single log.";

if (PITCH.length < 1 || PITCH.length > 200) {
  throw new Error(`Pitch must be 1-200 characters, got ${PITCH.length}`);
}

const outPath = join("/output", "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to ${outPath}`);
