var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		//the timeline display
		.when('/', {
			templateUrl: 'article_feed.html',
			controller: 'mainController'
		})
		//the login display
		.when('/about', {
			templateUrl: 'about.html',
			controller: 'mainController'
		})
});

app.controller('mainController', function($scope){
	
});