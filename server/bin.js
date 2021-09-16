#! /usr/bin/env node

const program = require('commander');
const server = require('./index')
program.command('start <port>')
.action((port) => {
  server.startServer(port)
})

program.command('add <data>')
.action((data) => {
  server.addData(data)
})

program.command('remove <data>')
.action((data) => {
  server.removeData(data)
})

// 移除所有数据
program.command('removeAll')
.action((data) => {
  server.removeAllData(data)
})


program.command('list')
.action(() => {
  server.getData()
})


program.parse(process.argv);