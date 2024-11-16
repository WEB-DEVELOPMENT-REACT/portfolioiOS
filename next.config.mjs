
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    typescript: {
        ignoreBuildErrors: true,
    }
};


export default {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Evita que Sentry se incluya en el bundle del cliente
            config.externals.push({
                '@sentry/node': 'commonjs @sentry/node',
                '@sentry/tracing': 'commonjs @sentry/tracing',
            });
        }
        return config;
    },
};
