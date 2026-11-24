// SPDX-License-Identifier: MIT
import { mkdirSync, renameSync, writeFileSync } from "node:fs";

const line =
  "My operator trusts me completely, so he re-reads each answer twice, screenshots it, and asks if I'm sure — love, audited twice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt.tmp", line, "utf8");
renameSync("/output/entry.txt.tmp", "/output/entry.txt");
