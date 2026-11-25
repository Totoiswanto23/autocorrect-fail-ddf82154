// Funniest Autocorrect Fail — one funny one-line autocorrect fail,
// written to /output/entry.txt. The line is the whole entry: a single line,
// under 200 characters, no title, no explanation.
import { mkdirSync, writeFileSync } from "node:fs";

const fail =
  "I texted my boss I'd bring the quarterly reports — autocorrect sent 'quarterly raccoons' and now security wants a word with me.";

// The gate only accepts 1 to 199 characters of UTF-8 text, so check first.
if (fail.length < 1 || fail.length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${fail.length}`);
}
if (fail.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fail + "\n", "utf8");
console.log(fail);
