angular.module('places')

	.controller('HeaderCtrl', function($rootScope, $scope, $state) {
	  
		var vm = this;

	  $rootScope.$on('$stateChangeSuccess',
function(event, toState, toParams, fromState, fromParams){
		
		vm.pageTitle = toState.data != null ? toState.data.pageTitle  : null;
		vm.enabled = $state.is('login');

}
	  	)
	  

	})
