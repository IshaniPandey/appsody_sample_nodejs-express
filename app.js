const app = require('express')()
var dash = require('appmetrics-dash').monitor();
app.get('/', (req, res) => {
  res.send("Hello from Cloud Pak for Applications!");
});
 
module.exports.app = app;
