const express = require('express')
const { createServer: createViteServer } = require('vite')
const http = require('http')
const {httpServerStart} = require('../host/server')

async function createServer() {
  const app = express()

  // 以中间件模式创建 vite 应用，这将禁用 Vite 自身的 HTML 服务逻辑
  // 并让上级服务器接管控制
  //
  // 如果你想使用 Vite 自己的 HTML 服务逻辑（将 Vite 作为
  // 一个开发中间件来使用），那么这里请用 'html'
  const vite = await createViteServer({
    server: { middlewareMode: 'html' }
  })
  // 使用 vite 的 Connect 实例作为中间件
  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    // 服务 index.html - 下面我们来处理这个问题
  })

  // app.listen(4000, '0.0.0.0', )
  httpServerStart(http.createServer({}, app), { port: 4000, loginfo: 'web running' } )
  
}

createServer()