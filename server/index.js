// 啟用設定nuxt部分

const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const { app, server } = require('./app');

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV.trim() !== 'production';

async function start() {
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // express取得nuxt的渲染
  app.use(nuxt.render);


  // 告訴server聽取3000這個Port，開啟 Server後會在console中印出訊息
  server.listen(port, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true,
    });
  });
}

start();
