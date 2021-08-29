#! /usr/bin/env node

const program = require('commander');
const shell = require('shelljs')
const {defaultServerPort} = require('../config')

program.command('start')
	.action(() => {
    console.log('action')
    // // 运行client
		shell.exec(`
      cd client
      node ./bin.js start ${defaultServerPort}
    `, function(error, stdout, stderr) {
      console.log(error);
    })
    // 运行server端
    shell.exec(`
    cd client & node ./server/bin.js start ${defaultServerPort}
    `, function(error, stdout, stderr) {
      console.log(error);
    })
	})

// 修改server的端口
program.command('server <port>')
  .action((port) => {
    console.log(port);
    shell.exec(`
    cd client & node ./server/bin.js start ${port}
    `, function(error, stdout, stderr) {
      console.log(error);
    })
    // 重启client
		shell.exec(`
      cd client
      node ./bin.js start ${port}
    `, function(error, stdout, stderr) {
      console.log(error);
    })
  })

program.parse(process.argv)