// users

db.customers.findOne({}, function(err, result) {
  if (err) throw err;
  document.getElementById("page-title").innerHTML = result.name;
  console.log(result.name);
  db.close();
});

db.users.findOne({}, function(err, result) {
  if (err) throw err;
  document.getElementById("userName").innerHTML = result.name;
  db.close();
});

db.cofa.find({}, function(err, data) {
  if (err) throw err;
  // var result = JSON.stringify(data);
  for (x in data) {
    document.getElementById("cofa-list").innerHTML += data[x].acc_name +" "+ data[x].acc_num + " "+ data[x].type + "<br>";
}
  db.close();
});
  

