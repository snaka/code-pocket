/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ja', 'zh-CN', 'zh-TW', 'ko'],
    defaultLocale: 'ja',
  }
}

module.exports = nextConfig
