/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@fullcalendar/react',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/common',
  '@fullcalendar/timegrid',
])


const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'pseudo'],
    defaultLocale: 'en'
  }
}

module.exports = withTM(nextConfig)
