var myApp = angular.module('myApp', [
	'ngRoute',
	'firebase'
]);

myApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
		when('/login',{
			templateUrl: 'partials/login.html',
			controller: 'RegistraionController'
		}). //login form
		when('/register',{
			templateUrl: 'partials/register.html',
			controller: 'RegistraionController'
		}). //register form

		when('/about',{
			template : "<h1>About</h1>"
		}). //about

		when('/contact',{
			template : "<h1>contact</h1>"
		}). //contact

		when('/posts/:itemId',{
			templateUrl : 'partials/post.html',
			controller: 'PostController'
		}). //single post

		//using ListController
		when('/dashboard',{
			templateUrl: 'partials/dashboard.html',
			controller: 'DashBoardController'
		}). //dashboard

		when('/addpost',{
			templateUrl: 'partials/add-post.html',
			controller: 'BlogController'
		}). //addpost

		when('/blog',{
			templateUrl: 'partials/blog-list.html',
			controller: 'BlogController'
		}). //home page
		otherwise({
			redirectTo: '/blog'
		});
}]);  

myApp.directive('repeatDone', function() {
    return function(scope, element, attrs) {
        if (scope.$last) { // all are rendered
            scope.$eval(attrs.repeatDone);
        }
    }
});