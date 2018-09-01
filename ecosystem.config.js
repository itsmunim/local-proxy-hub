module.exports = {
  apps: [{
    name: 'lph-server',
    script: './lib/server.js',
    watch: true,
    ignore_watch: [
      'node_modules',
      '.editorconfig',
      '.gitignore',
      'package.json',
      'ecosystem.config.js',
      'yarn.lock',
      '.idea'
    ]
  }]
};
