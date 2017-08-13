// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   db.collection("customers").findOne({}, function(err, res) {
//     if (err) throw err;
//     console.log(res);
//   });
//   db.close();
// });

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'festus.adeboye1@gmail.com',
//     pass: 'teniola18'
//   }
// });
//
// var mailOptions = {
//   from: 'festus.adeboye1@gmail.com',
//   to: 'festus.adeboye@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };
//
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
