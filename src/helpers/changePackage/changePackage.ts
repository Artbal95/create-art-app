import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import * as process from "process";

const changePackage = (dest: string, userDir: string): void => {
  const packagePath = resolve(dest, "package.json");
  const currentDirName = process.cwd().split("\\").at(-1);

  const actualUserDir = userDir === "." ? currentDirName : userDir;

  const packageJson = readFileSync(packagePath, "utf-8");
  const replace = packageJson.replace('"name": "create-art-app"', `"name": "${actualUserDir}"`);
  writeFileSync(packagePath, replace);
};

export default changePackage;
