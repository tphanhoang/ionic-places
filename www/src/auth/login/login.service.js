angular.module('places').factory("LoginService", function (FirebaseService) {

	return {

		login: function(email,password) {
			return FirebaseService.login(email,password);
		},

		logout: function(){
			return FirebaseService.logout();
		},

		signUp:function(email, password){
			return FirebaseService.signUp(email,password);
		}
	}

});