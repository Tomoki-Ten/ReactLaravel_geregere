/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = {
//   webpackDevMiddleware: (config) => {
//     config.watchOptions = {
//       poll: 800,
//       aggregateTimeout: 300,
//     };
//     return config;
//   },
// };

module.exports = {
  // basePath: "/",
  trailingSlash: true,
  reactStrictMode: true,
  // watchers: {
  //   webpack: {
  //     poll: true,
  //   },
  // },
  // env: {
  //   CONFIG: process.env.TEST_VARIABLE,
  // },
};

// module.exports = nextConfig;
