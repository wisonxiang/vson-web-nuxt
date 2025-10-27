// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-10-15",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://at.alicdn.com/t/c/font_4169971_5rj3mrlr6hk.css",
        },
      ],
    },
    cdnURL: process.env.NUXT_APP_CDN_URL,
  },
  modules: ["@nuxt/ui", "@nuxt/content"],
  content: {
    build: {
      markdown: {
        highlight: false,
      },
    },
  },
  fonts: {
    provider: "bunny",
  },
  css: ["~/assets/css/main.css"],
});
