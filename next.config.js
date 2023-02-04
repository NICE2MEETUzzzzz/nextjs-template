const pwaConfig = require('./tools/withPwa')
const withPwa = require('next-pwa')(pwaConfig)

// const withAnalyze = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true'
// })
const withPlugins = require('next-compose-plugins')

const nextConfig = {
    swcMinify: true
}

module.exports = async (phase, { defaultConfig }) =>
    withPlugins([withPwa], nextConfig)(phase, {
        ...defaultConfig,
        ...nextConfig
    })
