/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'kasm test repo',
    description: 'second attempt',
    icon: '/img/logo.svg',
    listUrl: 'https://jack-coocoo.github.io/test-repo/ ',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/test-repo/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
