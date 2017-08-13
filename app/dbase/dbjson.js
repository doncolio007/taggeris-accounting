// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/taggeris";
// var express = require('express');
// var app = express();
// const ipc = require('electron').ipcRenderer;
// var mongoose = require('mongoose');                     // mongoose for mongodb
// var morgan = require('morgan');             // log requests to the console (express4)
// var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
// var methodOverride = require('method-override');
// var JSONStream = require('JSONStream');
// Mongojs to connect to dbase
// var mongojs = require('mongojs');

// app.use(express.static(__dirname + '/'));
    // app.use(morgan('dev'));                                         // log every request to the console
    // app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    // app.use(bodyParser.json());                                     // parse application/json
    // app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    // app.use(methodOverride());


 // define model =================
    // var customers = mongoose.model('Todo', {
    //     text : String
    // });


    // api ---------------------------------------------------------------------
    // get all todos
    // app.get('./db.js', function(req, res) {

    //     // use mongoose to get all todos in the database
    //     customers.find(function(err, customers) {

    //         // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    //         if (err)
    //             res.send(err)

    //         res.json(customers); // return all todos in JSON format
    //     });
    // });