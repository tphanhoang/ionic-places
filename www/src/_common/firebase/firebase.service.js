angular.module('places').factory("FirebaseService", function ($firebaseAuth) {

	var ref = new Firebase('https://ionic-places-tph.firebaseio.com/');
	var auth = $firebaseAuth(ref);

	return {

		login: function (email,password) {

			//log with email and password			
			var promiselogin = auth.$authWithPassword({
				email: email,
				password: password
			}).catch(function(error) {
			  console.error("Authentication failed:", error);
			  return promiselogin;
			});
			return promiselogin;

		},

		signUp: function (email, password) {

			var promise = auth.$createUser({
				email: email,
				password: password
			}).catch(function (error) {
				alert("FirebaseService. " + error);
				return promise;

			});

			return promise;

		},

		logout: function (){
			console.log(auth.$unauth());
			auth.$unauth();
		}
	}

});