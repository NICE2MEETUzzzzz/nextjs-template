const { join } = require('path')

const withPlugins = require('next-compose-plugins')

const pwaConfig = require('./tools/withPwa')
const withPwa = require('next-pwa')(pwaConfig)

// const withAnalyze = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true'
// })

const nextConfig = {
    swcMinify: true,
    webpack(config, options) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': __dirname,
            '@pages': join(__dirname, 'src/pages'),
            '@components': join(__dirname, 'src/components'),
            '@shared': join(__dirname, 'src/components/shared'),
            '@styles': join(__dirname, 'src/styles'),
            '@modules': join(__dirname, 'src/components/modules'),
            '@public': join(__dirname, 'src/public')
        }
        return config
    }
}

module.exports = async (phase, { defaultConfig }) =>
    withPlugins([withPwa], nextConfig)(phase, {
        ...defaultConfig,
        ...nextConfig
    })
