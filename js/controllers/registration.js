//Registraion Controller
myApp.controller('RegistraionController',['$scope','$location', '$firebaseAuth',
	function($scope, $location, $firebaseAuth) {

		var email = $scope.useremail;
		var password = $scope.userpassword;
		var ref = new Firebase('https://my-ngblog.firebaseio.com/');
		$scope.authObj = $firebaseAuth(ref);
		
		$scope.Login = function(email,password){

			ref.authWithPassword({
		        email    : String($scope.useremail),
		        password : String($scope.userpassword)
		      }, function(error, authData) {
		        if (error) {
		          console.log("Login Failed!", error);
		          console.log(String($scope.useremail));
		        } else {
		          $location.path('/dashboard');
		          $scope.$apply();
		        }
	      	});
		}//login

	 	$scope.authObj.$onAuth(function(authData) {
          if (authData) {
            $location.path('/dashboard');
            $scope.$apply();
          } else {
            $location.path('/login');
            $scope.$apply();
          }
      	});

		$scope.register = function(email,password){

			ref.createUser({
			  email    : String($scope.useremail),
			  password : String($scope.userpassword)
			}, function(error, userData) {
			  if (error) {
			    console.log("Error creating user:", error);
			  } else {
			  	$location.path('/login');
	          	$scope.$apply();
			  }
			});
		}//register

		 $scope.authObj.$onAuth(function(authData) {
          if (authData) {
            $location.path('/dashboard');
            $scope.$apply();
          } else {
            $location.path('/login');
            $scope.$apply();
          }
     	 });

}]);
