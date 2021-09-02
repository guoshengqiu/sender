#! /usr/bin/env node

const program = require('commander');
const shell = require('shelljs')
const {defaultServerPort} = require('./config')
const path = require('path')
const getPath = (url) => {
  return path.join(__dirname, url)
}
const clientPath = getPath('./client')
const serverPath = getPath('./server')

program
  .version(require('./package.json').version)
  .parse(process.argv) 


const run = (port) => {
  shell.exec(`
    cd ${clientPath}
    node ./bin.js start ${port}
    `, function(error, stdout, stderr) {
      console.log(error);
  })
  shell.exec(`
    cd ${serverPath}
    node ./bin.js start ${port}
    `, function(error, stdout, stderr) {
      console.log(error);
  })
}

program.command('start')
	.action(() => {
    console.log('action')
    run(defaultServerPort)
   
	})

// 修改server的端口
program.command('server <port>')
  .action((port) => {
    console.log(port);
    run(port)
  })

program.parse(process.argv)