angular.module('places')
	.controller('FriendsCtrl', function($scope, $ionicLoading,FriendsService) {

		var vm = this;

		$ionicLoading.show({
			content: 'Loading...',
			showBackdrop: false
		});

		FriendsService.getGroupedFriends().then(function(data){

			vm.friendList = data;
			$ionicLoading.hide();
			console.log(vm.friendList);

		});


	});