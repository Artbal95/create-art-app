import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import * as process from "process";

const changePackage = (userDir: string): void => {
  const currentDirName = process.cwd().split("\\").at(-1) as string;

  const actualProjectName = userDir === "." ? currentDirName : userDir;
  const packageJsonPath = userDir === "." ? "" : actualProjectName;

  const packagePath = resolve(process.cwd(), packageJsonPath, "package.json");

  const packageJson = readFileSync(packagePath, "utf-8");
  const pack = JSON.parse(packageJson);
  pack.name = actualProjectName;
  writeFileSync(packagePath, JSON.stringify(pack, null, "  "));
};

export default changePackage;
