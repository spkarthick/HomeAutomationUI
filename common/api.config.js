(function() {
	angular.module("myApp").constant("APICONFIG", {
		loginUrl: "http://127.0.0.1:8080/json/login.json",
		authorizationUrl: "http://127.0.0.1:8080/json/roles.json"
	});
})();