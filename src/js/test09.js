angular.module('app',['ngRoute']).config(['$routeProvider',function($routeProvider){
	console.log($routeProvider)
	$routeProvider
	.when('/',{template:'首页'})
	.when('/page1',{template:'page1'})
	.when('/page2',{template:'page2'})
	.when('/page3',{template:'page3'})
//	.otherwise({redirectTo:function(){ console.log($routeProvider);return '/';}});
}]);

