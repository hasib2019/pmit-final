/**
 * @author Md Hasibuzzaman
 * @email hasib.9437.hu@gmail.com
 * @create date 10/11/2022 1.00PM
 * @modify date 10/11/2022 1.00PM
 * @desc [description]
 */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  // distDir: 'build',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  trailingSlash: false,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
    buildActivity: false,
  },
  compress: false,
}