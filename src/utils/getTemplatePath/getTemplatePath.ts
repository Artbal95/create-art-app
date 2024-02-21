import { resolve } from "path";

const getTemplatePath = (templateName: string): string => {
  const currentDir = resolve(__dirname, "../../../templates");
  return resolve(currentDir, templateName);
};

export default getTemplatePath;
