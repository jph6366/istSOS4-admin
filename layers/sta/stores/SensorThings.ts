
export const useSensorThingsStore = defineStore('SensorThingsQuery', {
  state: () => ({ querySequence:  process.env.NUXT_SERVICE_ROOT_URI || ''}),
  getters: {
    readQuery: (state) => state.querySequence,
  },
  actions: {
    generateQuery(...request: string[]) {
      this.querySequence = this.querySequence.concat(request as any)
    },
  },
})