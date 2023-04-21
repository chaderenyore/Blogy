// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' },
      ],
    },
  },
  devServerHandlers: [],
  modules: [
    'nuxt-windicss',
    'nuxt-icon',
    '@nuxt/image-edge',
  ],
  runtimeConfig: {
    CTF_SPACE_ID: 'uh4wvf4o2442',
    CTF_CDA_ACCESS_TOKEN: 'M0rx7tWrwHAILDed1c7BQpe23zStc_1GgPILi4gbo_U',
  },
});
