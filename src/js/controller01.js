angular.module('app',[]).controller('ctrl',function($scope){
	$scope.firstname='Jack';
	$scope.lastname='Tom';
	$scope.total = 100.12;
	$scope.arr = [{name:'Jack',age:21},{name:'Rose',age:19},{name:'Tom',age:20}];
});