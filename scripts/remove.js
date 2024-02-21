const fs = require("fs");
const { resolve } = require("path");
const { Command } = require("commander");
const prompts = require("prompts");
const kolorist = require("kolorist");

const removeFolder = async (projectName) => {
  const templatesDir = resolve(__dirname, "../templates", projectName);

  if (!fs.existsSync(templatesDir)) {
    return;
  }

  const isHaveFiles = !!fs.readdirSync(templatesDir).length

  if (isHaveFiles) {

    const resConfirm = await prompts({
      type: "confirm",
      name: "confirm",
      message: "The folder is not empty. Are you sure you want to delete?",
    })

    if (resConfirm.confirm) {

      fs.rmSync(templatesDir, { recursive: true, force: true })
    } else {

      process.exit(1)
    }
  } else {
    fs.rmSync(templatesDir, { recursive: true, force: true })
  }

}


const changeTemplate = (templateDir, removeName, temps) => {
  const removeTemplate = temps.filter(({ path }) => path !== removeName);

  fs.writeFileSync(templateDir, JSON.stringify(removeTemplate, null, 2))
}

const remove = async () => {
  const templates = resolve(__dirname, "../src/constants", "templates.json");

  const templatesJson = fs.readFileSync(templates, "utf-8");
  const temps = JSON.parse(templatesJson);

  const filterTemps = temps.filter(t => !t.isAdmin);

  const templateName = await prompts({
    type: "select",
    name: "name",
    message: "Choose Your project name",
    choices: filterTemps.map(({ name, path, color }) => ({
      title: kolorist[color](name),
      value: path
    }))
  });

  if (templateName.name) {
    try {
      await removeFolder(templateName.name)
      changeTemplate(templates, templateName.name, temps)
      const readme = fs.readFileSync(resolve(__dirname, "./temp/readme.txt"), "utf8");
      const filterTempName = temps.filter(t => t.path !== templateName.name)
      let tempsNames = ""
      for (let i = 1; i <= filterTempName.length; i++) {
        tempsNames += `${i}. ${filterTempName[i - 1].name}\n`
      }
      fs.writeFileSync(resolve(__dirname, "../README.md"), readme + "\n" + tempsNames)
    } catch (e) {
      console.log(e);
      process.exit(1)
    }
  }
};

remove();
