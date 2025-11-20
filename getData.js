import fs from "fs/promises";
(async () => {
  await fs.writeFile("./data.txt", String(Math.random()), "utf-8");
})();
