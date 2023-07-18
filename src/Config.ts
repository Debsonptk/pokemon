const Config = {
  app: {
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.PACKAGE_VERSION,
  },
  api: {
    baseUrl: import.meta.env.VITE_POKEAPI_BASE_URL,
  },
}

export default Config
