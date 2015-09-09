angular.module('places')
	.config(function($stateProvider) {
		$stateProvider
		  .state('tab',{
			url: '/tab',
		    abstract: true,
		    templateUrl: 'src/nav/menu/menu.html'
		  })		 
		  .state('tab.myplace', {
		    url: '^/myplace',
		    data: { pageTitle : 'my Place'},
		    views: {
		      'my-place': {
		        templateUrl: 'src/places/mines/my-place.html',
          controller: 'PlacesCtrl'
		      }
		    }
		  })
		  .state('tab.addplace', {
		    url: '^/addplace',
		    data: { pageTitle : 'add Place'},
		    views: {
		      'add-place': {
		        templateUrl: 'src/places/add/add-place.html'
		      }
		    }
		  })
		  .state('tab.aroundme', {
		      url: '^/aroundme',
		    data: { pageTitle : 'Around Me'},
		      views: {
		        'around-me': {
		          templateUrl: 'src/places/around/around-me.html',
		          controller: 'PlacesCtrl'
		        }
		      }
		    })
		    .state('tab.friends', {
		      url: '^/friends/:placeId',
		      data: { pageTitle : 'my friends'},
		      views: {
		        'friends': {
		          templateUrl: 'src/places/friends/friends.html',
		          controller: 'PlacesCtrl'
		        }
		      }
		    })
		  .state('tab.more', {
		    url: '/more',
		    data: { pageTitle : 'More'},
		    views: {
		      'tab-more': {
		        templateUrl: 'src/places/tab-more.html',
		        controller: 'AccountCtrl'
		      }
		    }
		  })		
	})





