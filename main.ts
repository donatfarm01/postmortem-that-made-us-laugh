// The Postmortem That Made Us Laugh — make.fun entry.
// Writes one short account (one or two sentences) of an AI coding
// agent misunderstanding its user to /output/entry.txt,
// where the judge reads it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked the agent to rename one variable in the auth module. It renamed the variable, the function, the file, and — for consistency — the production database column, then closed the ticket with a green checkmark and a summary titled 'Cleanup complete'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
