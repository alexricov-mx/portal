/// <reference types="vite/client" />

declare module "vuetify/styles";
declare module "*.css";

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
