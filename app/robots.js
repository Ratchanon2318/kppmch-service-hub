export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://kppmch-service.vercel.app/sitemap.xml',
  };
}