/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
]);

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'pseudo'],
    defaultLocale: 'en'
  }
}

module.exports = withTM(nextConfig)
