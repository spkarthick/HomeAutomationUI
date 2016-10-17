(function(){
	
	var module = angular.module("header");
	
	module.controller("headerController", ["headerService", function(headerService) {
		var vm = this;
		vm.name = "header";
	}]);
	
})();