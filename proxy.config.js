module.exports = [
  {
    context: '/api',
    target: 'http://localhost:8080',
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  },
  // {
  //   context: '/ws*',
  //   target: "https://localhost:8080",
  //   secure: false,
  //   changeOrigin: true,
  //   ws: true,
  //   logLevel: "debug"
  // }
];
