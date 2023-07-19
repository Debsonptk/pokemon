/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string
  readonly PACKAGE_VERSION: string
  readonly VITE_POKEAPI_BASE_URL?: string
  readonly VITE_API_SPRITES_BASE_URL?: string
  // add more env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
