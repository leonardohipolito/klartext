var app = module.exports = require('appjs');

require('fs');

app.serveFilesFrom(__dirname + '/content');

var window = app.createWindow({
  width  : 430,
  height : 300,
  icons  : __dirname + '/content/icons'
});
window.on('create', function(){
  console.log("Window Created");
  window.frame.show();
  window.frame.center();
});

window.on('ready', function(){
  console.log("Window Ready");
  window.require = require;
  window.process = process;
  window.module = module;
  var util = require('util');
  window.exec = require('child_process').exec;

  window.puts = function (error, stdout, stderr) { util.puts(stdout) }

  function F12(e){ return e.keyIdentifier === 'F12' }
  function Command_Option_J(e){ return e.keyCode === 74 && e.metaKey && e.altKey }

  //window.frame.openDevTools();

  window.addEventListener('keydown', function(e){
    if (F12(e) || Command_Option_J(e)) {
      window.frame.openDevTools();
    }
  });
});

window.on('close', function(){
  console.log("Window Closed");
});
