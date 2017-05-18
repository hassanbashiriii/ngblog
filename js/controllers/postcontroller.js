myApp.controller('PostController',function($scope, $routeParams, $firebaseArray) {
    var ref = new Firebase('https://my-ngblog.firebaseio.com/posts');
    var posts = $firebaseArray(ref);

    $scope.posts = posts;
    $scope.wichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
     $scope.prevItem = Number($routeParams.itemId) - 1;
    }  else {
     $scope.prevItem = $scope.posts.length - 1;
    }

    if ($routeParams.itemId < $scope.posts.length - 1) {
     $scope.nextItem = Number($routeParams.itemId) + 1;
    }  else {
     $scope.nextItem = 0;
    }

  }); //PostController