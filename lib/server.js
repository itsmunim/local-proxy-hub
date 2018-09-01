const express = require('express');
const proxy = require('http-proxy-middleware');
const routesObj = require('./routes');

function startServer() {
  let app = express();
  Object.keys(routesObj).forEach(routeUrl => {
    app.use(routeUrl, proxy({
      target: routesObj[routeUrl],
      pathRewrite: (path) => {
        return path.replace(routeUrl, '/');
      }
    }));
  });

  app.listen(8585, () => {
    console.info('Local Proxy Hub instantiated.');
  });
}

startServer();


