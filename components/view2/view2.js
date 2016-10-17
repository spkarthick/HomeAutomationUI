(function(){
	
	var module = angular.module("view2", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "view2",
			url: "/view2",
			template: "<view2></view2>",
		});
	}]);
	
	
})();