angular.module('authTest.login',[
	'ui.router',
	'auth0'
])
.config(function($stateProvider) {
	$stateProvider
		.state('root.login', {
			url: '/login',
			controller: 'LoginCtrl',
			templateUrl: 'login/login.tpl.html'
		});
})
.controller('LoginCtrl', function() {
	console.log('LoginCtrl');
})
.controller('LoginFormCtrl', function($scope, $state, auth, store) {
	console.log('LoginFormCtrl');

	$scope.submit = function() {
		if(!$scope.loginForm.$pristine && $scope.loginForm.$valid) {
			auth.signin({
				email: $scope.login.email,
				password: $scope.login.password,
				connection: 'Username-Password-Authentication'
			}, function success(profile, id_token, access_token, state, refresh_token) {
				console.log('login success');

				store.set('profile', profile);
				store.set('token', id_token);

				$state.go('root.home');
			}, function error() {
				console.log('login error', arguments);
			});
		}
	}
})
;