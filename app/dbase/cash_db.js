// Cash ledger
db.cash_ledger.find({}, function(err, data) {
  if (err) throw err;
  // var result = JSON.stringify(data);
  for (x in data){

  	var debit = numeral(data[x].dr_entry).format();

  	var credit = numeral(data[x].cr_entry).format();

  	var drClass='', crClass='';


  	if(debit > credit){

  		var drClass='highBal';
  	} else {
  		var crClass='lowBal';
  	}

    document.getElementById("cash-list").innerHTML += "<tr><td>"+ data[x].date +"</td><td>"+data[x].particulars+"</td><td>"+ data[x].lf+"</td><td class="+drClass+">"+debit+"</td><td class="+crClass+">"+credit+"</td>";   
   }

   // Get the difference of credit and Debit

	var drResult = [];

	var crResult = [];

	 data.forEach(function(u) { drResult.push(numeral(u.dr_entry).value()) });

	 data.forEach(function(u) { crResult.push(numeral(u.cr_entry).value()) });

	 var drSum = drResult.reduce(add);

	 var crSum = crResult.reduce(add);

	 var cashBal = numeral(drSum - crSum); 

	 document.getElementById("bal").innerHTML = cashBal.format();

db.close();
});