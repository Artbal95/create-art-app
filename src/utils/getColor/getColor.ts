import * as kolorist from "kolorist";

export type ColorType = "yellow" | "green" | "red";

const getColor = (color: ColorType): ((t: string | number) => string) => {
  const c = kolorist;

  return c[color];
};

export default getColor;
