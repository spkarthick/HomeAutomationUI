(function(){
	
	var module = angular.module("login");
	
	module.factory("loginService", ["$http","APICONFIG", "$q", function($http, APICONFIG) {
		 return {
			 user: {},
			 isValidUser: function() {
				 return $http.get(APICONFIG.loginUrl);
			 },
			 isAuthorized: function() {
				 var promise = $q.deferred();
				 return $http.get(APICONFIG.authorizationUrl);
			 }
		 };
	}]);
	
})();