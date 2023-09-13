/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'kmal808 Registry',
    description: 'Curated registry of custom KASM workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://kmal808.github.io/kasm-registry/',
    contactUrl: 'https://github.com/kmal808/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
