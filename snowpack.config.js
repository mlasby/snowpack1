// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        /* see "Plugin Options" online */
      },
    ],
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: "msedge"
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
