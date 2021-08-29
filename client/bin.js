const program = require('commander');
const shell = require('shelljs')
program.command('start <port>')
	.action((port = 8989) => {
    console.log(port, 'port')
    process.env.SERVER_PORT = port
    shell.exec(`
    npm run start
    `, function(error, stdout, stderr) {
      console.log(error);
    })
	})

program.parse(process.argv);