'use strict';

module.exports = {
	options: {
		port: 8080,
		hostname: 'auth0-test.dev'
	},
	dev: {
		options: {
			open: true,
			base: [
				'app/'
			],
			middleware: function( connect ) {
				return [
					connect.static('app/')
				];
			}
		}
	}
}
