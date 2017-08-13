app.config(function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl: './test.html'
	})
	.when('/cofa', {
		templateUrl: 'cofa.html'
	});

});