(function(){
	
	var module = angular.module("view2");
	
	module.controller("view2Controller", ["view2Service", function(view2Service) {
		var vm = this;
		vm.name = "view2";
	}]);
	
})();