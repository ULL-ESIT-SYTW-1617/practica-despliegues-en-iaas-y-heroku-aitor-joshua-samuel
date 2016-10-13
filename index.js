const express = require('express');
const app = express();
const path = require('path');



app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/gh-pages'));




app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});