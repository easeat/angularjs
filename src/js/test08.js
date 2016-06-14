angular.module('app',[]).factory('$fac',function(){
	return {
		fnc1:function(){
			alert("fuc1");
		},
		multiply: function(a,b){
			return a*b;
		}
	}
}).value('param1','value1').constant("cons1","value2").controller('ctrl',function($scope,param1,$fac,cons1){
	alert(param1);
	alert(cons1);
	$fac.fnc1();
	alert($fac.multiply(2,3));
});