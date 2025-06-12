import { defineNuxtModule } from '@nuxt/kit';
export default defineNuxtModule({
  meta: {
    name: 'istsos4-module',
    configKey: 'istsos4',
  },
  setup (options, nuxt) {
    // Module code goes here
    console.log('Setting up ISTSOS4 module');
  }
})