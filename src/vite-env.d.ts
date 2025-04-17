/// <reference types="vite/client" />

declare const GITVERSION: string
declare const GITCOMMITDATETIME: string
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_BUILD_TIME: string
  readonly VITE_BASE_LAYOUT_CONFIG: string
  readonly VITE_PUBLIC_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
