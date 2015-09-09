angular.module('places')

	.controller('HeaderCtrl', function($scope, $rootScope, $state) {
	  
		
		var vm = this;
		_isEnabled();
		_titlePage();

	  $rootScope.$on('$stateChangeSuccess',
function(event, toState, toParams, fromState, fromParams){
		
		_titlePage();
		_isEnabled();		

}
	  	)
	  

	  function _isEnabled(){
	  	vm.enabled = $state.is('login');
	  }
	  function _titlePage(){
	  	vm.pageTitle = $state.current.data != null ? $state.current.data.pageTitle  : null;
	  }
	  

	})
