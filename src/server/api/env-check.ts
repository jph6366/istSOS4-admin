// This endpoint safely checks if environment variables are properly loaded
// It returns only confirmation that the variable exists, not the actual value

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  
  // Check if the MapTiler API key is available
  const hasMapTilerApiKey = !!config.maptilerApiKey;
  
  return {
    success: true,
    environmentStatus: {
      hasMapTilerApiKey
    },
    message: hasMapTilerApiKey 
      ? 'MapTiler API key is set in the environment'
      : 'MapTiler API key is not set in the environment'
  };
});
