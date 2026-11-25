import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — a single self-contained funny line.
// Setup: a concrete, modern detail. Payoff: a twist that reframes it.
const LINE =
  "I asked an AI to write my will. It left everything to the cloud.";

// Gate validation, mirroring the sealed scorer: UTF-8 text of 1 to 140
// characters, not only whitespace. Fail loudly instead of shipping an
// invalid entry.
const chars = [...LINE];
if (LINE.length === 0 || LINE.trim().length === 0) {
  throw new Error("entry line is empty or only whitespace");
}
if (chars.length > 140) {
  throw new Error(`entry line is ${chars.length} characters, over the 140 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
