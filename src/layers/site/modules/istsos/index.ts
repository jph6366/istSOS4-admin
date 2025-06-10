import { defineNuxtModule } from '@nuxt/kit';
import { Observation } from "./model/Observation";
import { type ObservationRepository } from "./repository/ObservationRepository";
import { GetObservation } from "./usecase/GetObservation";

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