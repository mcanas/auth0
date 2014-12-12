angular.module('authTest.signup', [
	'ui.router',
	'auth0'
])
.config(function($stateProvider) {
	$stateProvider
		.state('root.signup', {
			url: '/signup',
			controller: 'SignupCtrl',
			templateUrl: 'signup/signup.tpl.html'
		});
})
.controller('SignupCtrl', function($scope) {
	console.log('SignupCtrl');

	$scope.submit = function() {}
})
.controller('SignupFormCtrl', function($scope) {
	
})
;