angular.module('authTest.home', [
	'ui.router',
	'auth0'
])
.config(function($stateProvider) {
	$stateProvider
		.state('root.home', {
			url: '/',
			controller: 'HomeCtrl',
			templateUrl: 'home/home.tpl.html',
			data: {
				requiresLogin: true
			}
		});
})
.controller('HomeCtrl', function() {
	console.log('HomeCtrl');
})
;