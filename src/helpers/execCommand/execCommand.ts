import { execSync } from "child_process";

import getPaths from "../../utils/getPaths";

const execCommand = (userDir: string, command: string): Buffer => {
  const { dest } = getPaths(userDir);
  return execSync(command, { cwd: dest });
};

export default execCommand;
