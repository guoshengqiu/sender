const os = require('os')
const interfaces = os.networkInterfaces();

// 获取本地ip地址
 const hostIp = function() {
  let IPv4
  if(process.platform === 'darwin') {
      const list = interfaces.en0 || interfaces.en7
      for(let i = 0; i < list.length; i++) {
        if(list[i].family == 'IPv4') {
          IPv4 = list[i].address;
        }
      }
  } else if(process.platform === 'win32') {
    for(const devName in interfaces) {
      const iface = interfaces[devName];
      for(let i = 0; i < iface.length; i++) {
        const alias = iface[i];
        if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          IPv4 = alias.address;
        }
      }
    }
  }
  return IPv4;
}

module.exports = { hostIp } 