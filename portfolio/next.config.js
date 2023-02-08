/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
      esmExternals: 'loose'
  },
    images: {
      domains: ["links.papareact.com"]
    },
   webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
}

module.exports = nextConfig
