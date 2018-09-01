module.exports = {
  apps: [{
    name: 'lph-server',
    script: './lib/server.js',
    watch: './lib/routes.json',
    watch_options: {
      usePolling: true,
      alwaysStat: true,
      useFsEvents: false
    }
  }]
};
