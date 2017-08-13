// 'use_strict';
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron').remote;
const { BrowserWindow } = electron;
var changeCase = require('change-case');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/taggeris";
// var shell = require('shelljs');


// Mongojs initialization
var mongojs = require('mongojs');
var db = mongojs('taggeris', ['customers','users','cash_ledger','sales_ledger','bank_ledger','cofa','trial_balance']);
var numeral = require('numeral');
var moment = require('moment');
const ipcRenderer = require('electron').ipcRenderer;



// var startMongod = shell.exec('service mongod restart', {async:true}, function(code, stdout, stderr) {
//   console.log('Exit code:', code);
//   console.log('Program output:', stdout);
//   console.log('Program stderr:', stderr);
//   if(code === 4)
//   {
//   	alert('Cannot connect to database');
//   }
// });

// console.log(version);
 
var currStr = '$0,0.00';
numeral.defaultFormat(currStr);


// Load jQuery 
window.$ = window.jQuery = require('./vendors/jquery/dist/jquery.js');


// db.sales_ledger.find({}, function(err, data) {
//   if (err) throw err;

//   var result = [];

//   data.forEach(function(u) { result.push(u.net) });

//   var sum = result.reduce(add);

//   var totSale = numeral(sum).format();

//   ipcRenderer.send('async', totSale);


// db.close();

// });



// ipcRenderer.on('async-reply', (event, arg)=>{
//   console.log(arg + "- Testing IPC from renderer");
// })


// Set page title
// var urlPath = window.location.pathname;
// var pathArray = urlPath.split("/");
// var path = pathArray[pathArray.length-1];
// var pathName = path.split(".");
// var headTitle = pathName[0];
// var titleHead = changeCase.title(headTitle);
// document.getElementById("title").innerHTML = titleHead;

// cosole.log(urlPath)

// Set and Get CurrStr short for currency String in database settings

function add(a, b){
	return a + b;
}

function openWindow(filename) {

  let win = new BrowserWindow({width:750, height:550})

  win.loadURL(`file://${__dirname}/`+filename+`.html`)

win.once('ready-to-show', () => {
win.show()
})

win.on('close',function(){
  win = null
})

 require('./menu/mainmenu')
}
