angular.module('authTest.logout',[
	'ui.router',
	'auth0'
])
.config(function($stateProvider) {
	$stateProvider
		.state('root.logout', {
			url: '/logout',
			controller: 'LogoutCtrl'
		});
})
.controller('LogoutCtrl', function($rootScope, $state, store, auth) {
	auth.signout();
	store.remove('profile');
	store.remove('token');
	
	delete $rootScope.profile;

	$state.go('root.login');
})
;