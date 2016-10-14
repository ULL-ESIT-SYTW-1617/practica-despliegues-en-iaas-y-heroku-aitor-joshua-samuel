const express = require('express');
const app = express();
const path = require('path');
var exec = require('child_process').exec;



app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/gh-pages'));

app.post('/sync', (request, response) => {
  function puts(error, stdout, stderr) {
    console.log(stdout)
    if(error) console.log(error);
  }
  exec("git clone git@github.com:ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-aitor-joshua-samuel.git master", puts);
});
//git@github.com:ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-aitor-joshua-samuel.git

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
