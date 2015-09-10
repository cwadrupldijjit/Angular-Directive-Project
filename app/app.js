/* global angular */
var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/home/homeTemplate.html',
			controller: function() {
				var vm = this;
				
				vm.name = 'this';
			},
			controllerAs: 'vm'
		})
		.when('/extra-page',{
			templateUrl: 'app/extraPage/extraPage.html',
			controller: function() {
				var vm = this;
				
				vm.that = 'that';
			},
			controllerAs: 'vm'
		})
		.otherwise({redirectTo: '/'});
});
