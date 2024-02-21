#!/usr/bin/env node
const fs = require("fs");
const { Command } = require("commander");
const kolorist = require("kolorist");
const { resolve } = require("path");
const prompts = require("prompts");

const COLORS = ["Yellow", "Green", "Red"];

let projectName;
const program = new Command();

program
  .argument("<project-name>")
  .usage(`${kolorist.green("<project-name>")}`)
  .action(name => {
    projectName = name;
  })
  .parse(process.argv);


const textStyle = (color) => (text) => kolorist.underline(color(text))

const checkColor = (responseColor) => COLORS.some(c => c.toLowerCase() === responseColor);
const checkTemplateName = (temp, projectName) => temp.some(t => t.name === projectName)

const createFolder = (projectName, color) => {
  console.log(color("...Starting creating your project"));
  console.log("");
  console.log("");

  const templatesDir = resolve(__dirname, "../templates", projectName.toLowerCase().split(" ").join("-"));

  try {
    if (!fs.existsSync(templatesDir)) {
      fs.mkdirSync(templatesDir);

      const packageJson = fs.readFileSync(resolve(__dirname, './temp/package.json'), "utf8")
      const pack = JSON.parse(packageJson);
      pack.name = projectName.split(" ").join("-")
      fs.writeFileSync(resolve(templatesDir, "package.json"), JSON.stringify(pack, null, 2))

      console.log(kolorist.green("Success: Create the folder in templates"));

    } else {

      console.log(kolorist.red(`${projectName} already exist. Change project Name and try again.`));

    }
  } catch (e) {

    console.error(e);

    process.exit(1);
  }
};

const changeTemplate = (projectName, color) => {
  const templates = resolve(__dirname, "../src/constants", "templates.json");

  const templateJson = fs.readFileSync(templates, "utf-8")

  const temp = JSON.parse(templateJson)

  if (!checkTemplateName(temp, projectName)) {
    const newTemplate = {
      name: projectName,
      path: projectName.toLowerCase().split(" ").join("-"),
      color,
      isAdmin: false
    }

    const newTemplatesJson = JSON.stringify([...temp, newTemplate], null, 2)

    fs.writeFileSync(templates, newTemplatesJson)
    return temp.length + 1
  } else {
    console.log(kolorist.red(`${projectName} already exist. Change project Name and try again.`));
    process.exit(1)
  }
}

const generate = async (projectName) => {

  const responseColor = await prompts({
    type: "select",
    name: "color",
    message: "Choose Your project Color",
    choices: COLORS.map((c) => ({
      title: kolorist[c.toLowerCase()](c),
      value: c.toLowerCase()
    }))
  });

  if (checkColor(responseColor.color)) {
    const color = kolorist[responseColor.color];
    const style = textStyle(color)

    if (projectName && checkColor) {
      const tempLen = changeTemplate(projectName, responseColor.color)
      createFolder(projectName, style);
      const readme = fs.readFileSync(resolve(__dirname, "../README.md"), "utf8")
      fs.writeFileSync(resolve(__dirname, "../README.md"), readme + `${tempLen}. ${projectName}\n`)
    } else {
      process.exit(1)
    }
  } else {
    process.exit(1)
  }
};

generate(projectName)


