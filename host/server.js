
const {hostIp} = require('../host')
const hostname = hostIp()

function httpServerStart(
  httpServer,
  serverOptions
) {
  return new Promise((resolve, reject) => {
    let { port, strictPort, host, logger, loginfo } = serverOptions

    const onError = (e) => {
      if (e.code === 'EADDRINUSE') {
        if (strictPort) {
          httpServer.removeListener('error', onError)
          reject(new Error(`Port ${port} is already in use`))
        } else {
          console.log(`Port ${port} is in use, trying another one...`)
          httpServer.listen(++port, host)
        }
      } else {
        httpServer.removeListener('error', onError)
        reject(e)
      }
      console.log(`${loginfo} http://${hostname}:${port}`)
    }

    httpServer.on('error', onError)

    httpServer.listen(port, host, () => {
      httpServer.removeListener('error', onError)
      resolve(port)
    })
  })
}
module.exports = {
  httpServerStart
}