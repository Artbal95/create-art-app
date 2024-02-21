import * as os from "os";

const getPlatform = (): "WINDOWS" | "MACOS" | "LINUX" | false => {
  const operatingSystem = os.platform();

  switch (operatingSystem) {
    case "win32":
      return "WINDOWS";
    case "darwin":
      return "MACOS";
    case "linux":
      return "LINUX";
    default:
      return false;
  }
};

export default getPlatform;
