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

let addOrUpdateServiceRoute = (routeUrl, proxyUrl) => {
  let routesObj = _getRoutes();
  routesObj[routeUrl] = proxyUrl;
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
  .command(`add-route <routeurl> <proxyurl>`)
  .alias('a')
  .description('add a route to proxy')
  .action((routeurl, proxyurl) => {
    addOrUpdateServiceRoute(routeurl, proxyurl);
  });

program
  .command(`update-route <routeurl> <changedproxy>`)
  .alias('u')
  .description('update proxy address for an already added route')
  .action((routeurl, proxyurl) => {
    addOrUpdateServiceRoute(routeurl, proxyurl);
  });

program
  .command('ls')
  .alias('l')
  .description('list all existing proxied route setup')
  .action(() => {
    listRoutes();
  });

program.parse(process.argv);
