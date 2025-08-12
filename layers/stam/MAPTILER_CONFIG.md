# MapTiler API Key Configuration

To properly configure the MapTiler API key for coordinate transformations, follow these steps:

1. Sign up for a free MapTiler account at [MapTiler](https://www.maptiler.com/)
2. Generate an API key from your MapTiler dashboard
3. Set the environment variable in one of these ways:

## Development

Create or modify the `.env` file in the project root and add:
```
NUXT_PUBLIC_MAPTILER_API_KEY=your_maptiler_api_key_here
```

## Production

For production environments, set the environment variable through your deployment platform:

- For Deno Deploy: Add `NUXT_PUBLIC_MAPTILER_API_KEY` in the environment variables section
- For Docker: Add it to your Docker Compose file or command

## Troubleshooting

If you see an error like:
```
ServiceError: Call to endpoint https://api.maptiler.com/coordinates/transform/...json?key=undefined&s_srs=2056&t_srs=4326 failed with the status code 403. Key is missing, invalid or restricted
```

This means the MapTiler API key is not properly configured. Check that:

1. The environment variable is correctly set
2. Your API key is valid and has the necessary permissions
3. The domain you're using is allowed in your MapTiler account settings

After updating the environment variable, restart your Nuxt application for the changes to take effect.
