import { defineNuxtModule } from '@nuxt/kit';
export default defineNuxtModule({
  meta: {
    name: 'istsos-module',
    configKey: 'istsos',
  },
  setup (options, nuxt) {
    // Module code goes here
    console.log('Setting up ISTSOS module');
  }
})