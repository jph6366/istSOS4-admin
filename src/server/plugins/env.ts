// Access Deno environment variables and make them available to the runtime config
// This is specifically for Deno Deploy environment
export default defineNitroPlugin((nitro) => {
  // Check if we're in a Deno environment
  try {
    if (typeof Deno !== 'undefined' && 'env' in Deno) {
      // Access the MapTiler API key from Deno's environment
      const maptilerApiKey = Deno.env.get('MAPTILER_API_KEY');
      
      if (maptilerApiKey) {
        // Directly set the key in the runtime context where it can be used
        // by server API routes without modifying the main runtime config
        nitro.hooks.hook('request', (event) => {
          event.context.maptilerApiKey = maptilerApiKey;
        });
        
        console.log('MapTiler API key successfully loaded from Deno environment');
      } else {
        console.warn('MAPTILER_API_KEY not found in Deno environment variables');
      }
    } else {
      console.info('Not running in Deno environment, skipping Deno.env access');
    }
  } catch (error) {
    console.error('Error accessing Deno environment variables:', error);
  }
});
