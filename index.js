#! /usr/bin/env node

const program = require('commander');
const shell = require('shelljs')
const {defaultServerPort} = require('./config')
const path = require('path')
const getPath = (url) => {
  return path.join(__dirname, url)
}

const serverPath = getPath('./server')

program
  .version(require('./package.json').version, '-v, --version')

program
  .addHelpText('after', `
  add <data>
  remove <data>
  removeAll
  list
  `
)

const run = (port) => {
  shell.exec(`
    cd ${serverPath}
    node ./bin.js start ${port}
    `, function(error, stdout, stderr) {
      console.log(error);
  })
}

program.command('start [port]')
	.action((port) => {
    if (port !== undefined) {
      // 指定server的端口
      if (typeof port === 'string') {
        run(port)
      }
    } else {
      run(defaultServerPort)
    }
	})

// 透传其它参数
program
  .argument('[other...]')
  .action((other) => {
    // console.log(other, 'other');
    const rest = other.join(' ')
    shell.exec(`
      cd ${serverPath}
      node ./bin.js ${rest}
      `, function(error, stdout, stderr) {
        if (error) {
          console.log(error, stdout, stderr);
        }
    })
  })

program.parse(process.argv)