angular.module('app',[]).controller('ctrl',function($scope){
	$scope.dutySelect = [{text:'全部',value:''},{text:'研发工程师',value : 1},{text:'测试工程师',value : 2},{text:'总监',value : 3}]
	$scope.duty = $scope.dutySelect[0];
	$scope.master = {firstname:'Jack',lastname:'Tom'};
	$scope.reset = function(){
		$scope.user = angular.copy($scope.master); 
	}
	$scope.reset();
	
	$scope.name = "John";
	$scope.name2 = angular.lowercase($scope.name);
	$scope.name3 = angular.uppercase($scope.name);
	$scope.isStr = angular.isString($scope.name);
	$scope.isNum = angular.isNumber($scope.name);
	$scope.number = '111';
	$scope.isNum2 = angular.isNumber($scope.number);
	
});