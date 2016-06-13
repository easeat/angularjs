angular.module('app',[]).service('$log',function(){
	this.info = function(msg){
		console.log(msg);
	}
}).service('$fnc',function(){
	this.toHex = function(num){
		return num.toString(16);
	}
}).filter('moneyFormat',function(){
	return function(num){
		num = num/100;
		return num.toFixed(2);
	}
}).controller('ctrl',function($scope,$location,$http,$timeout,$interval,$log,$fnc){
	$log.info($fnc.toHex(11));
	
	$scope.absUrl = $location.absUrl();
//	$http.get("../js/test05.json").then(function(response){
//	header('Access-Control-Allow-Origin:*');
//	$http.get("http://www.runoob.com/try/angularjs/data/Customers_JSON.php").then(function(response){
//	$http.get("http://www.runoob.com/try/angularjs/data/Customers_JSON.php").success(function(response){
//		$log.info(JSON)
//		$log.info(response)
//	});
	
	$scope.word = 'hello world';
	$timeout(function(){
		$scope.word = 'how are you';
	},2000);
	
	$scope.currTime = new Date().toLocaleTimeString();
	$interval(function(){
		$scope.currTime = new Date().toLocaleTimeString();
	},1000)
	
	$scope.money = 10012;
});