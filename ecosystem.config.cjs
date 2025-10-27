module.exports = {
  apps: [
    {
      name: "homepage",
      port: "3005",
      script: "./.output/server/index.mjs",
      env: {
        NUXT_APP_CDN_URL: "https://cdn.vson.top/public/",
      },
    },
  ],
};
