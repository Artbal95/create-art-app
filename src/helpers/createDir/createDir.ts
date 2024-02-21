import { existsSync, mkdirSync } from "fs";
import { textSync } from "figlet";
import { red } from "kolorist";

import getPaths from "../../utils/getPaths";

const createDir = (userDir: string): boolean => {
  const { dest } = getPaths(userDir);

  try {
    const isExist = existsSync(dest);
    if (isExist) {
      console.log("");
      console.log("");
      console.log(textSync("Error"));
      if (userDir === ".") {
        console.log(red(`Please delete all of current folder and try again`));
      } else {
        console.log(red(`Please delete the folder: ${userDir}`));
      }
      return false;
    }
    mkdirSync(userDir);
    return true;
  } catch (e: unknown) {
    console.log(e);
    return false;
  }
};

export default createDir;
