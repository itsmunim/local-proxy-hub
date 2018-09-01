[![all downloads](https://img.shields.io/npm/dt/local-proxy-hub.svg)]()


# Local Proxy Hub

### Problem

You might have your own vps and may be lots of 
apps you want to deploy inside of it and test the
functionality. The only problem is configuring
nginx to serve all your app in different route for
your domain. For example, you want to do the following-
- `yourdomain/api` => Is for your portfolio api, which
is running at `localhost:9090` of that machine.
- `yourdomain/blog` => Is for your blog, running at
`localhost:8080` of the same machine.
- `yourdomain/fbapp` => Some cool facebook app of yours,
running at `localhost:5000`.

You might want to do it using `proxy-pass` in `nginx`,
but if you have not done this in real, let me tell 
you how painful it is and how complicated it gets when
you have to also configure `path rewrite` for your 
route- since you don't want to see this: `yourdomain/blog/a` to 
get translated into `localhost:8080/blog/a`, cause come on
that url does not exist! So, long story short, the 
nginx configuration is complicated and might take you
loads of nights to actually make it work, finally!

### Solution

If you know reverse proxy, you already know what this
tool is going to do. In case you did not understand
it yet, check below to see what it does-
![figure](https://raw.githubusercontent.com/dibosh/local-proxy-hub/master/diagram.svg)

So, one single `proxy-pass` for `location /` in nginx 
config is all you need to place. And the `proxy-pass`
should be proxying all requests to - `http://localhost:8585`;
where this hub will be running.

### Installation

- `npm install -g pm2`(`pm2` needs to be installed globally)
- `npm install -g local-proxy-hub`

The server will automatically be running after the installation
on `8585` port.

### Usage

To register any of your service/app running in the same 
machine with this hub is pretty simple via the `cli` 
that comes along-
`lph a <routeUrl> <proxyUrl>`

Example- `lph a /admin http://localhost:9093`

Check all the available commands by typing- `lph -h`

Once a route is added/updated, the server gets 
restarted automatically and you don't have to worry
about a thing.



