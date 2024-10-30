const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // outputStandalone: true,
    },
    staticPageGenerationTimeout: 1000,
    eslint: {
        dirs: ['src'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    i18n,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
}

module.exports = nextConfig
