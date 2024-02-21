#!/usr/bin/env node
import { Command } from "commander";
import { textSync } from "figlet";
import { green } from "kolorist";
import * as process from "process";
import { readFileSync } from "fs";
import { resolve } from "path";

import init from "./root";

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split(".");
const major = semver[0];

if (+major < 14) {
  console.error(
    `You are running Node ${currentNodeVersion}.\n` +
      `Create Art App requires Node 14 or higher. \n` +
      `Please update your version of Node.`
  );
  process.exit(1);
}

const packageJson = readFileSync(resolve(__dirname, "../package.json"), "utf-8");
const packJson = JSON.parse(packageJson);

let projectName = "";
const program = new Command(packJson.name as string);

console.log(textSync("React Templates"));

program
  .version(packJson.version as string)
  .argument("<project-directory>")
  .usage(`${green("<project-directory>")}`)
  .action(name => {
    projectName = name;
  })
  .on("--help", () => {
    console.log("");
    console.log(`  Only ${green("<project-directory>")} is required.`);
  })
  .parse(process.argv);

if (!projectName) process.exit(1);

init(projectName);
