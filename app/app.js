/* global angular */
var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/home/homeTemplate.html',
			// controller: function() {
			// 	var vm = this;
				
			// 	vm.name = 'this';
			// },
			// controllerAs: 'vm'
		})
		.when('/extra-page',{
			templateUrl: 'app/extraPage/extraPage.html',
			// controller: function() {
			// 	var vm = this;
				
			// 	vm.that = 'that';
			// },
			// controllerAs: 'vm'
		})
		.otherwise({redirectTo: '/'});
});

app.directive('dirDisplay', [function() {
	return {
		restrict: 'E',
		
		// replace: true,
		
		templateUrl: 'app/home/dir-display.html',
		
		controller: function($scope) {
			var vm = this;
			
			$scope.users = [
				{
					name: 'Geoff McMammy',
					age: 43,
					email: 'geofdude@gmail.com'
				},
				{
					name: 'Samuel Skeen',
					age: 23,
					email: 'rndmbjnkf@gmail.com'
				},
				{
					name: 'elmo',
					age: '7',
					email: 'elmo@sesamestreet.com'
				}
			];
			
			$scope.showThis = true;
			
			vm.testing = 'Testing';
		},
		
		// controllerAs: 'ddctrl',
		
		
		link: function(scope, iElement, iAttribs) {
			iElement.on('click', function() {
				if (scope.showThis) {
					scope.showThis = false;
				} else scope.showThis = true;
				
				scope.$apply();
			});
			
			iElement.on('load', function() {
				scope.$apply();
			});
			
			// console.log('test');
		}
		// bindToController: true
	}
}]);
