import { type ReactNode } from "react";

declare global {
  type LayoutChild = Readonly<{ children: ReactNode }>;

  type LayoutType = (props: LayoutChild) => ReactNode;
}
