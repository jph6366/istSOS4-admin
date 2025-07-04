// TypeScript declarations for Deno API
// This is needed to use Deno environment variables in TypeScript

// Declare the global Deno namespace
declare namespace Deno {
  export interface Env {
    get(key: string): string | undefined;
    set(key: string, value: string): void;
    delete(key: string): void;
    toObject(): Record<string, string>;
  }
  
  export const env: Env;
}
