/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'pseudo'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig
