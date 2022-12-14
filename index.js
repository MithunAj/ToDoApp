const express = require('express');
const port = 8000;
const path = require('path');
const app = express();


const db = require('./config/mongoose')

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));
// setting the view engine to be ejs
app.set('view engine', 'ejs');
// setting the views directory to be views folder
app.set('views',path.join(__dirname,'views'));
//middleware for using the static files
app.use(express.static('assets'));



app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(err, 'There was an error in listening');
        return;
    }

    console.log('The app is listening on Port :',port);
})