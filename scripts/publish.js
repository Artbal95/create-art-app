const { execSync } = require("child_process")
const { readFileSync } = require("fs");
const { resolve } = require("path");

const prePublish = () => {
  try {
    const packageJson = readFileSync(resolve(__dirname, "../package.json"), "utf8")
    const pack = JSON.parse(packageJson);
    if (pack?.version) {
      execSync("git add .", { cwd: process.cwd() });
      execSync(`git commit -m "r${pack.version}"`, { cwd: process.cwd() })
    }
  } catch (e) {
    console.log(e);
    process.exit(1)
  }
}

prePublish()
