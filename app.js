(function(){
	
	var myApp = angular.module("myApp", [
		"ui.router",
		"ui.bootstrap",
		"ngAnimate",
		"view1",
		"view2",
		"login",
		"footer"
	]);
	
	angular.element(document).ready(function() {
		angular.bootstrap(document.body,["myApp"]);	
	});
	
})();