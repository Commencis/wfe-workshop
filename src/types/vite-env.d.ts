/// <reference types="./custom.d.ts" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_API_URL: string;
  readonly VITE_PORT: string;
  readonly MODE: string;
  readonly VITE_KONTENT_PROJECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
