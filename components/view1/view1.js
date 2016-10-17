(function(){
	
	var module = angular.module("view1", ["ui.router","header"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "view1",
			url: "/view1",
			template: "<view1></view1>"
		});
	}]);
	
	
})();