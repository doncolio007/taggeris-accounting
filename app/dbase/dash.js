// Sales ledger
db.sales_ledger.find({}, function(err, data) {
  if (err) throw err;

  var result = [];

  data.forEach(function(u) { result.push(u.net) });

  var sum = result.reduce(add);

  var totSale = numeral(sum).format();

  document.getElementById("sales-amount").innerHTML = totSale;

db.close();

});

// Cash Balance
db.cash_ledger.find({}, function(err, data) {
  if (err) throw err;
   // Get the difference of credit and Debit

	var drResult = [];

	var crResult = [];

	 data.forEach(function(u) { drResult.push(numeral(u.dr_entry).value()) });

	 data.forEach(function(u) { crResult.push(numeral(u.cr_entry).value()) });

	 var drSum = drResult.reduce(add);

	 var crSum = crResult.reduce(add);

	 var cashBal = numeral(drSum - crSum); 

	 document.getElementById("cash-bal").innerHTML = cashBal.format();

db.close();
});

// Bank balance
db.bank_ledger.find({}, function(err, data) {
  if (err) throw err;
   // Get the difference of credit and Debit

	var drResult = [];

	var crResult = [];

	 data.forEach(function(u) { drResult.push(numeral(u.dr_entry).value()) });

	 data.forEach(function(u) { crResult.push(numeral(u.cr_entry).value()) });

	 var drSum = drResult.reduce(add);

	 var crSum = crResult.reduce(add);

	 var bankBal = numeral(drSum - crSum); 

	 document.getElementById("bank-bal").innerHTML = bankBal.format();

db.close();
});


