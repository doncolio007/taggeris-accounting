 // This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/taggeris";
// var app = express();
// var JSONStream = require('JSONStream');
// Mongojs to connect to dbase
// var mongojs = require('mongojs');

// var db = mongojs('taggeris', ['customers','users']);

// pipe all documents in mycollection to stdout
// db.customers.find({}).pipe(JSONStream.stringify()).pipe(process.stdout)

var callbackOne = function(err, result) {
  if (err) throw err;
  // document.getElementById("page-title").innerHTML = result.name;
  console.log(result.name);
  db.close();
}

db.customers.findOne({}, callbackOne);

db.users.findOne({}, function(err, result) {
  if (err) throw err;
  var userName = result.name.split(" ");
  document.getElementById("userName").innerHTML = userName[0];

  db.close();
});

db.cofa.find({}, function(err, data) {
  if (err) throw err;
  // var result = JSON.stringify(data);
  for (x in data) {
    document.getElementById("cofa-list").innerHTML += "<tr><td>"+data[x].acc_name +"</td><td>"+ data[x].acc_num + "</td><td>"+ data[x].Financial + "</td><td>"+data[x].Group+"</td><td>"+data[x].Sub_Group+"</td></tr>";
}
  db.close();
});

// For debugging
function deBug(obj){
  alert(obj);
}

// Create Dbase
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Connected!");
//   db.createCollection("users", function(err, res) {
//     if (err) throw err;
//     console.log("Users Table created!");
//     db.close();
//   });
//   var myobj = [
//     { name: 'Festus Adeboye', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}
//   ];
//   db.collection("users").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log(res.count+" record inserted");
//     db.close();
//   });
  // db.collection("customers").findOne({}, function(err, result) {
  //   if (err) throw err;
  //   console.log(result.name);
  //   document.getElementById("page-title").innerHTML = result.name;
  //   db.close();
  // });
// });

    

