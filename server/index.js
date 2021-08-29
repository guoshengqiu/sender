var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require('cors')
const {hostIp} = require('../host')
const {defaultServerPort} = require('../config')
const host = hostIp()

app.use(cors())
app.use(bodyParser.json())
const chalk = require('chalk');
const log = console.log;


app.post('/api/data',function(request, response){
  var content=request.body.content;
  console.log('---------接受内容------------');
  console.log(content);
  console.log('-----------end--------------');
  response.json({})
 });

// app.get('/api/host', function (req, res) {
//   res.send(JSON.stringify({code: 0, data: {host}}))
// })

const startServer = (port = defaultServerPort) => {
  app.listen(port, function() {
    log(chalk.red("server running",  `http://${host}:${port}`))
  }
)
}
module.exports = {
  startServer
}