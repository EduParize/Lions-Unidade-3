import fs, { read } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "..", "database.json");

export function readData() {
  try {
    const data = fs.readFileSync(dbPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return { flashcards: [], baralhos: [] };
  }
}

export function writeData(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}
