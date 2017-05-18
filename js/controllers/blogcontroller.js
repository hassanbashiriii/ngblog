myApp.controller('BlogController',['$scope', '$firebaseArray','$firebaseAuth', '$location',
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
}]); //listController



//reading json file
// postControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
//   $http.get('js/data.json').success(function(data) {
//     $scope.posts = data;
//   });
// }]);

// //passing post data between routes
// postControllers.controller('PostController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
//   $http.get('js/data.json').success(function(data) {
//     $scope.posts = data;
//     $scope.wichItem = $routeParams.itemId;

//     if ($routeParams.itemId > 0) {
//      $scope.prevItem = Number($routeParams.itemId) - 1;
//     }  else {
//      $scope.prevItem = $scope.posts.length - 1;
//     }

//     if ($routeParams.itemId < $scope.posts.length - 1) {
//      $scope.nextItem = Number($routeParams.itemId) + 1;
//     }  else {
//      $scope.nextItem = 0;
//     }

//   });
// }]);