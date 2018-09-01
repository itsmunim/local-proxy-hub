module.exports = {
  apps: [{
    name: 'lph-server',
    script: './lib/server.js',
    watch: './lib',
    ignore_watch: ['.idea', 'node_modules']
  }]
};
