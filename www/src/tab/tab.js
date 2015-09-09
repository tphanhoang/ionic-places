angular.module('places')
	.config(function($stateProvider) {
		$stateProvider

		  .state('tab',{
			url: '/tab',
		    abstract: true,
		    templateUrl: 'src/tab/tabs.html'
		  })

		  // Each tab has its own nav history stack:

		  .state('tab.dash', {
		    url: '^/dash',
		    views: {
		      'tab-dash': {
		        templateUrl: 'src/tab/views/tab-dash.html',
		        controller: 'DashCtrl'
		      }
		    }
		  })

		  .state('tab.myplace', {
		    url: '^/myplace',
		    views: {
		      'tab-myplace': {
		        templateUrl: 'src/tab/views/tab-myplace.html',
		        controller: 'DashCtrl'
		      }
		    }
		  })

		  .state('tab.chats', {
		      url: '^/chats',
		      views: {
		        'tab-chats': {
		          templateUrl: 'src/tab/views/tab-chats.html',
		          controller: 'ChatsCtrl'
		        }
		      }
		    })
		    .state('tab.chat-detail', {
		      url: '^/chats/:chatId',
		      views: {
		        'tab-chats': {
		          templateUrl: 'src/tab/views/chat-detail.html',
		          controller: 'ChatDetailCtrl'
		        }
		      }
		    })

		  .state('tab.account', {
		    url: '/account',
		    views: {
		      'tab-account': {
		        templateUrl: 'src/tab/views/tab-account.html',
		        controller: 'AccountCtrl'
		      }
		    }
		  })		
	})


	.controller('DashCtrl', function($scope) {})

	.controller('ChatsCtrl', function($scope, Chats) {
	  // With the new view caching in Ionic, Controllers are only called
	  // when they are recreated or on app start, instead of every page change.
	  // To listen for when this page is active (for example, to refresh data),
	  // listen for the $ionicView.enter event:
	  //
	  //$scope.$on('$ionicView.enter', function(e) {
	  //});

	  $scope.chats = Chats.all();
	  $scope.remove = function(chat) {
	    Chats.remove(chat);
	  };
	})

	.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	  $scope.chat = Chats.get($stateParams.chatId);
	})

	.controller('AccountCtrl', function($scope) {
	  $scope.settings = {
	    enableFriends: true
	  };
	})



	.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

