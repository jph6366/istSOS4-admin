import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  // Only run MSW setup in development mode
  if (process.dev) {
    console.log('[MSW Plugin] Development mode detected. Attempting to initialize MSW.');

    // Server-side MSW setup (e.g., for SSR or API route mocking in dev)
    if (process.server) {
      try {
        // IMPORTANT: Replace with your actual server-side MSW setup.
        // This might involve importing `setupServer` from 'msw/node'
        // and your request handlers.
        // Example:
        // const { setupServer } = await import('msw/node');
        // const { handlers } = await import('~/mocks/handlers'); // Adjust path to your handlers
        // const server = setupServer(...handlers);
        // server.listen({ onUnhandledRequest: 'bypass' });
        // console.log('[MSW Plugin] Server interceptors (msw/node) initialized for development.');

        // If you were directly using @mswjs/interceptors (as suggested by the error):
        // const { ClientRequestInterceptor } = await import('@mswjs/interceptors/ClientRequest');
        // const interceptor = new ClientRequestInterceptor();
        // interceptor.apply(); // This was likely the problematic call
        // console.log('[MSW Plugin] ClientRequestInterceptor applied for development (server-side).');

        // For now, this is a placeholder. Integrate your actual MSW server setup here.
        console.log('[MSW Plugin] Server-side MSW setup would occur here if configured.');
      } catch (error) {
        console.error('[MSW Plugin] Failed to initialize server-side MSW interceptors in development:', error);
      }
    }

    // Client-side MSW setup (for browser mocking)
    if (process.client) {
      try {
        // IMPORTANT: Replace with your actual client-side MSW setup.
        // This might involve importing `setupWorker` from 'msw/browser'
        // and your request handlers.
        // Example:
        // const { setupWorker } = await import('msw/browser');
        // const { handlers } = await import('~/mocks/handlers'); // Adjust path to your handlers
        // const worker = setupWorker(...handlers);
        // await worker.start({ onUnhandledRequest: 'bypass' });
        // console.log('[MSW Plugin] Browser worker (msw/browser) initialized for development.');

        // For now, this is a placeholder. Integrate your actual MSW browser setup here.
        console.log('[MSW Plugin] Client-side MSW setup would occur here if configured.');
      } catch (error) {
        console.error('[MSW Plugin] Failed to initialize MSW browser worker in development:', error);
      }
    }
  } else {
    // In production, MSW will not be initialized.
    // You can add a log here if you want to confirm it's skipped in production.
    // console.log('[MSW Plugin] Production mode. MSW is disabled.');
  }
})
