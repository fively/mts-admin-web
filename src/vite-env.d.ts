/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 自定义的环境变量
  readonly VITE_CDN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
