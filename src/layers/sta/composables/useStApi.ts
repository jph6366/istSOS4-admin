
export const useStApi = defineStore('staService', () => {
    const rootLinks = ref([]);
    const serverSettings = ref({});

    const setServerData = (data:any) => {
        if (data && data.value && data.serverSettings) {
        rootLinks.value = data.value;
        serverSettings.value = data.serverSettings;
        } else {
        console.error("Invalid data structure provided to setServerData.");
        }
    };
    
    return {
        rootLinks,
        serverSettings,
        setServerData,
    };
})