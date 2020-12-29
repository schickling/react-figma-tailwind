/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist-sp' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-postcss',
    // '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    port: 8081,
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  },
}
