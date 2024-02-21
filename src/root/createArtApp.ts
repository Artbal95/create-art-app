import { textSync } from "figlet";
import { cpSync } from "fs";
import { green, red } from "kolorist";
import prompts from "prompts";

import templates from "../constants/templates.json";
import createDir from "../helpers/createDir";
import getPlatform from "../utils/getPlatform";
import getTemplatePath from "../utils/getTemplatePath";
import getPaths from "../utils/getPaths";
import changePackage from "../helpers/changePackage";
import getColor from "../utils/getColor";
import { ColorType } from "../utils/getColor/getColor";

type TemplatesType = (typeof templates)[number]["path"];

const init = async (userDir: string): Promise<void> => {
  const response: prompts.Answers<"template"> = await prompts<TemplatesType>({
    type: "select",
    name: "template",
    message: "Choose Template",
    choices: templates.map(({ path, name, color }) => ({
      title: getColor(color as ColorType)(name),
      value: path
    }))
  });

  const isCreateDir = createDir(userDir);
  const platform = getPlatform();
  const { dest } = getPaths(userDir);

  if (!platform) {
    console.log(red(`This Platform is not supported: Supported only Windows, macOS and Linux`));
    return;
  }

  if (!isCreateDir) {
    return;
  } else {
    const source = getTemplatePath(response.template as string);
    try {
      changePackage(source, userDir);
      cpSync(source, dest, { recursive: true });
    } catch (e) {
      console.log(e);
      return;
    }
  }

  console.log("");
  console.log(textSync("Success"));
  console.log("");
  console.log("Please Insert this command");
  console.log("");
  if (userDir !== ".") console.log(green(`1. cd ${userDir}`));
  console.log("");
  console.log(green("1. npm/yarn/pnpm install"));
  console.log("");
  console.log(green("2. npm/yarn/pnpm run dev"));
};

export default init;
