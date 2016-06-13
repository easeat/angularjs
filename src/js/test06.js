angular.module('app',[]).controller('ctrl',function($scope){
	$scope.dutySelect = [{text:'全部',value:''},{text:'研发工程师',value : 1},{text:'测试工程师',value : 2},{text:'总监',value : 3}]
	$scope.duty = $scope.dutySelect[0];
	$scope.master = {firstname:'Jack',lastname:'Tom'};
	$scope.reset = function(){
		$scope.user = angular.copy($scope.master); 
	}
	$scope.reset();
});