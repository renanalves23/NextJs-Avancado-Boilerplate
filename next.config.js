/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
}

// module.exports = withPwa({
//   pwa: {
//     dest: 'public',
//     disable: !isProd,
//   },
// })

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
})

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = withPWA({
  // next.js config
  nextConfig,
})
