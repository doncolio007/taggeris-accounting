// Database Schema set-up
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/taggeris";

// var table = 'financial';

// createTable(table, MongoClient, url);

// var table = 'group';

// createTable(table, MongoClient, url);
// var table = 'sub_group';

// createTable(table, MongoClient, url);
// var table = 'favorites';

// createTable(table, MongoClient, url);


var myobj = [
{ "acc_name" : "Cash(Hand)", "acc_num" : "1000", "debit": "", "credit" : 25000, "date": "13-08-17" },
  { "acc_name": "Rent", "acc_num": "6000", "debit": 25000, "credit": "", "date": "13-08-17" }];
// { "acc_name" : "Sales", "acc_num" : "4000", "Financial": "Profit or Loss", "Group" : "Income", "Sub_Group": "Sales and Inventory" },
// { "acc_name" : "Purchases", "acc_num" : "5000", "Financial": "Balance Sheet", "Group" : "Current Asset", "Sub_Group": "COGS" },
// { "acc_name" : "Rent", "acc_num" : "6000", "Financial": "Profit or Loss", "Group" : "Expense", "Sub_Group": "Rents and Office Expense" },
// { "acc_name" : "Loan(1 year)", "acc_num" : "2000", "Financial": "Balance Sheet", "Group" : "Liability", "Sub_Group": "Current Liability" },
// { "acc_name" : "Account Receivables", "acc_num" : "1200", "Financial": "Balace Sheet", "Group" : "Asset", "Sub_Group": "Current Asset" },
// { "acc_name" : "Account Payable", "acc_num" : "2100", "Financial": "Balace Sheet", "Group" : "Liability", "Sub_Group": "Current Liability" },
// { "acc_name" : "Salary", "acc_num" : "6100", "Financial": "Balace Sheet", "Group" : "Current Asset", "Sub_Group": "Salary and Admin Expense" }];


insertMany(MongoClient, url, table, myobj);


// Create table
function createTable(table, Client, url){
  Client.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Connected!");
  db.createCollection(table, function(err, res) {
    if (err) throw err;
    console.log(table + " Table created!");
    db.close();
  });
});
}

// Insert one
function insertOne(Client, url, table, obj){
  Client.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Connected for insertion!");
  db.collection(table).insertOne(obj, function(err, res) {
    if (err) throw err;
    console.log(" Records Added");
    db.close();
  });
});
}

// Insert Many
function insertMany(Client, url, table, obj){
  Client.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Connected for insertion!");
  db.collection(table).insertMany(obj, function(err, res) {
    if (err) throw err;
    console.log(res.insertedCount+" records Added");
    db.close();
  });
});
}



// CASH LEDGER SHEMA
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Connected!");
//   db.createCollection("cash_ledger", function(err, res) {
//     if (err) throw err;
//     console.log("cash_ledger Table created!");
//     db.close();
//   });
//   var myobj = [
//     { particulars: "Owner's Equity", lf: '', folio: '3100', dr_entry: 150000, cr_entry: '', date: '03-08-2017'},
//     { particulars: 'Rent-Office space', lf: '', folio: '4100', dr_entry: '', cr_entry: 25000, date: '03-08-2017'}];
//   db.collection("cash_ledger").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Records inserted");
//     db.close();
//   });
// });


// SALES LEDGER SCHEMA
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Connected!");
//   db.createCollection("sales_ledger", function(err, res) {
//     if (err) throw err;
//     console.log("sales_ledger Table created!");
//     db.close();
//   });
//   var myobj = [
//     { invoice_no: '12345', customer: 'Oil PLC', net: 150000, VAT: 7500, gross: 157500, date: '03-08-2017', payment_type: '', payment_date: '', due_date: '28-08-2017'},
//     { invoice_no: '12346', customer: 'Nano PLC', net: 200000, VAT: 20000, gross: 220000, date: '03-08-2017', payment_type: 'Visa Card', payment_date: '03-08-2017', due_date: '28-08-2017'}
//   ];
//   db.collection("sales_ledger").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Records inserted");
//     db.close();
//   });
// });


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

// Create Dbase
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Connected!");
//   db.createCollection("test", function(err, res) {
//     if (err) throw err;
//     console.log("test Table created!");
//     db.close();
//   });
//   var myobj = [
//     { lf: '', folio: '3100', dr_entry: 50000, cr_entry: '', date: '03-08-2017'},
//     { particulars: 'Salary-Admin', lf: '', folio: '4200', dr_entry: ''},
//     { particulars: 'Purchases', cr_entry: 2000, date: '03-08-2017'}];
//   db.collection("test").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log(res.insertedCount+" records Added");
//     db.close();
//   });
// });