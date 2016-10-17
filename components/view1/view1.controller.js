(function(){
	
	var module = angular.module("view1");
	
	module.controller("view1Controller", ["view1Service", function(view1Service) {
		var vm = this;
		vm.name = "view1";
	}]);
	
})();