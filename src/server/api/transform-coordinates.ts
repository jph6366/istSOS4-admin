import { coordinates, config as maptilerConfig } from '@maptiler/client';

// Server-side endpoint to handle coordinate transformations
// This ensures the API key is only used server-side
export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const body = await readBody(event);
    
    // Get parameters from the request body
    const { sourceCoords, sourceCrs, targetCrs = 4326 } = body;
    
    // Validate input
    if (!sourceCoords || !sourceCrs) {
      return {
        success: false,
        error: 'Missing required parameters: sourceCoords and sourceCrs are required'
      };
    }
    
    // Try to get the API key from various sources
    let apiKey = '';
    
    // 1. First check if it's in the event context (set by our plugin)
    if (event.context && typeof event.context.maptilerApiKey === 'string') {
      apiKey = event.context.maptilerApiKey;
    }
    // 2. Check runtime config
    else if (config && typeof config.maptilerApiKey === 'string') {
      apiKey = config.maptilerApiKey;
    }
    // 3. Try to access from Deno.env directly
    else {
      try {
        if (typeof Deno !== 'undefined' && 'env' in Deno) {
          const envKey = Deno.env.get('MAPTILER_API_KEY');
          if (envKey) apiKey = envKey;
        }
      } catch (e) {
        console.warn('Could not access Deno environment variables');
      }
    }
    
    // Set API key for the server-side operation
    if (apiKey) {
      maptilerConfig.apiKey = apiKey;
    } else {
      return {
        success: false,
        error: 'MapTiler API key is not configured on the server'
      };
    }
    
    // Perform the transformation
    const result = await coordinates.transform(
      sourceCoords,
      {
        sourceCrs: parseInt(sourceCrs, 10),
        targetCrs: parseInt(targetCrs, 10)
      }
    );
    
    return {
      success: true,
      result
    };
    
  } catch (error) {
    console.error('Error in coordinate transformation:', error);
    return {
      success: false,
      error: error instanceof Error 
        ? error.message 
        : 'An error occurred during coordinate transformation'
    };
  }
});
