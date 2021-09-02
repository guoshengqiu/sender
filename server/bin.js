#! /usr/bin/env node

const program = require('commander');
const server = require('./index')
program.command('start <port>')
	.action((port) => {
    console.log(port);
    server.startServer(port)
	})

program.parse(process.argv);