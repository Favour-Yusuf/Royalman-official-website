import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import SitemapPlugin  from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    SitemapPlugin({
      baseUrl: 'https://www.royalmandigitalconcept.com',  // Replace with your domain
      outDir: './public',                    // Output directory for the sitemap
      // dynamicRoutes: ['/dynamic-route1', '/dynamic-route2'],  // Add your dynamic routes here if any
      routes: [
        {
          url: '/',
          lastmod: new Date().toISOString(),
          priority: 1.0,
        },
        {
          url: '/about',
          lastmod: new Date().toISOString(),
          priority: 0.8,
        },
        // Add more static routes as needed
      ],
    }),
  ],
});
