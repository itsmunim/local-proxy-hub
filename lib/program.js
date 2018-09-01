#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const ROUTES_JSON_PATH = `${__dirname}/routes.json`;

let _getRoutes = () => {
  return JSON.parse(fs.readFileSync(ROUTES_JSON_PATH));
};

let _writeRoutes = (routesObj) => {
  let data = JSON.stringify(routesObj, null, 2);
  fs.writeFileSync(ROUTES_JSON_PATH, data);
};

let addOrUpdateServiceRoute = (routeUrl, proxyPort) => {
  let routesObj = _getRoutes();
  routesObj[routeUrl] = parseInt(proxyPort);
  _writeRoutes(routesObj);
  console.info('Route added successfully.');
};

let clearAllRoutes = () => {
  _writeRoutes({});
  console.info('All routes have been cleared.');
};

let listRoutes = () => {
  let routesObj = _getRoutes();
  console.info('Route Url', '\t\t\tProxy Url');
  Object.keys(routesObj).forEach(routeUrl => {
    console.info(routeUrl, `\t\t\t${routesObj[routeUrl]}`);
  })
};

// CLI
program
  .version('0.0.1')
  .description('Local Proxy Hub');

program
  .command(`add <routeurl> <proxyport>`)
  .alias('a')
  .description('add/update a route to proxy towards specific port')
  .action((routeurl, proxyport) => {
    addOrUpdateServiceRoute(routeurl, proxyport);
  });

program
  .command('clear')
  .alias('c')
  .description('remove all route to port config')
  .action((routeurl, proxyport) => {
    clearAllRoutes();
  });

program
  .command('ls')
  .alias('l')
  .description('list all existing proxied route setup')
  .action(() => {
    listRoutes();
  });

program.parse(process.argv);
