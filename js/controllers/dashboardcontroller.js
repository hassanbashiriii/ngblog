myApp.controller('DashBoardController',['$scope', '$firebaseArray','$firebaseAuth', '$location',
  function($scope, $firebaseArray,$firebaseAuth ,$location) {
    var ref = new Firebase('https://my-ngblog.firebaseio.com/posts');
    var posts = $firebaseArray(ref);
    $scope.authObj = $firebaseAuth(ref);

    $scope.posts = posts; //read posts

    $scope.addPost = function(){
      posts.$add({
        title: $scope.posttitle,
        intro: $scope.postintro,
        body: $scope.postbody,
        image: "img/01.jpg",
        date: $scope.postdate
      })
    }//addPost

    $scope.deletePost = function(key){
        posts.$remove(key);
    }//delete post

        $(document).ready(function(){
          $('.tooltipped').tooltip({delay: 50});
        });

      $scope.initTooltip = function() {
         $('.tooltipped').tooltip({delay: 50}); // Initialize the tooltip
      }

      $scope.removeTooltip = function() {
         $('.tooltipped').tooltip('remove'); // remove the tooltip
      }

      $scope.authObj.$onAuth(function(authData) {
          if (authData) {
            $location.path('/dashboard');
            $scope.$apply();
          } else {
            $location.path('/login');
            $scope.$apply();
          }
      });

}]); //listController