"use strict";

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');


app.set('port', (process.env.PORT || 5000));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));


app.get('/', (request, response) => {
  response.render('index', {title: "Introducción · GitBook"});
});

app.get('/gitbook', (request, response) => {
  response.render('gitbook', {title: "GitBook"});
});

app.get('/gulp', (request, response) => {
  response.render('gulp', {title: "Gulp"});
});

app.get('/gh-pages', (request, response) => {
  response.render('gh_pages', {title: "gh-pages"});
});

app.get('/modulo-gh', (request, response) => {
  response.render('modulo_gh', {title: "Gulp gh-pages"});
});

app.get('/node', (request, response) => {
  response.render('node', {title: "NodeJS"});
});

app.get('/npm', (request, response) => {
  response.render('npm', {title: "NPM"});
});

app.get('/script', (request, response) => {
  response.render('script', {title: "Scripts"});
});

app.get('/package-json', (request, response) => {
  response.render('package_json', {title: "Package.json"});
});

app.get('/despliegue-gb', (request, response) => {
  response.render('despliegue_gb', {title: "Despliegue en Gitbook"});
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
