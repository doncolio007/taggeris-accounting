// Sales ledger

db.sales_ledger.find({}, function(err, data) {
  if (err) throw err;
  // var result = JSON.stringify(data);
  for (x in data) {

  	var netSale = numeral(data[x].net).format();

  	var vatSale = numeral(data[x].VAT).format();

  	var grossSale = numeral(data[x].gross).format();

    document.getElementById("sales-list").innerHTML += "<tr><td>"+ data[x].date +"</td><td>"+data[x].invoice_no+"</td><td>"+ data[x].customer+"</td><td class='focus-amount'>"+netSale+"</td><td>"+vatSale+"</td><td>"+grossSale+"</td><td>"+data[x].payment_type+"</td><td>"+data[x].payment_date+"</td><td>"+data[x].due_date+"</td><td><button id='"+data[x]._id+"' class='btn btn-xs btn-primary'>view</button></td></tr>";   
}
  db.close();
});
