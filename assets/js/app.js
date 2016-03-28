'use strict';

var mrktApp = angular.module('mrktApp', ['ngRoute','ui.bootstrap']);
mrktApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '/templates/item.html',
			controller: 'ItemCtrl'
		}).otherwise({
			redirectTo: '/',
			caseInsensitiveMath: true
		})
	}]);

mrktApp.controller('ItemCtrl', ['$scope', '$rootScope', 'ItemService', function($scope, $rootScope, ItemService) {
	$scope.formData = {};
	$scope.items = [];

	ItemService.getItems().then(function(response) {
		$scope.items = response;
	});

	$scope.addItem = function() {
		ItemService.addItem($scope.formData).then(function(response) {
			$scope.items.push($scope.formData)
			$scope.formData = {};
		});
	}

	$scope.removeItem = function(item) {
		ItemService.removeItem(item).then(function(response) {
			$scope.items.splice($scope.items.indexOf(item), 1)
		});
	}
}]);

