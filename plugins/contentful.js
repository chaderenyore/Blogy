import { createClient } from 'contentful';
import contentful from 'contentful';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const createClientFunc =
    process.env.NODE_ENV === 'development'
      ? createClient
      : contentful.createClient;

  const client = createClientFunc({
    space: 'uh4wvf4o2442',
    accessToken: 'M0rx7tWrwHAILDed1c7BQpe23zStc_1GgPILi4gbo_U',
  });

  nuxtApp.provide('contentfulClient', client);
});
