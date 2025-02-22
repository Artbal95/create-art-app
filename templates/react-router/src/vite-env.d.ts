/// <reference types="vite/client" />

import { FC, ReactNode } from "react";

declare global {
  type FCC<PROPS = object> = FC<{ children?: ReactNode } & PROPS>;

  interface ImportMetaEnv {
    readonly VITE_BASE_URL?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
