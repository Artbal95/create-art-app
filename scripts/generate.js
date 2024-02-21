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

  const templatesDir = resolve(__dirname, "../templates", projectName.split(" ").join("-"));

  try {
    if (!fs.existsSync(templatesDir)) {
      fs.mkdirSync(templatesDir);
      fs.writeFileSync(resolve(templatesDir, '.gitkeep'), "")

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
      path: projectName.split(" ").join("-"),
      color,
      isAdmin: false
    }

    const newTemplatesJson = JSON.stringify([...temp, newTemplate])

    fs.writeFileSync(templates, newTemplatesJson)
  } else {
    console.log(kolorist.red(`${projectName} already exist. Change project Name and try again.`));
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
      changeTemplate(projectName, responseColor.color)
      createFolder(projectName, style);
    } else {
      process.exit(1)
    }
  } else {
    process.exit(1)
  }
};

generate(projectName)


