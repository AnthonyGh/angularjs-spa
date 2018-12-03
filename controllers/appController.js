app.controller("introductionCtrl", ['$scope', 'scriptService', function($scope, scriptService){
    $scope.msg="Vous êtes dans l'introduction";
    $scope.values = scriptService.scriptNote();
}]);

app.controller("partie1Ctrl", ['$scope', 'scriptService', function($scope, scriptService){
    $scope.msg="Vous êtes dans la partie 1";
    $scope.values = scriptService.scriptNote();
}]);

app.controller("partie2Ctrl", ['$scope', 'scriptService', function($scope, scriptService){
    $scope.msg="Vous êtes dans la partie 2";
    $scope.values = scriptService.scriptNote();
}]);

app.controller("partie3Ctrl", ['$scope', 'scriptService', function($scope, scriptService){
    $scope.msg="Vous êtes dans la partie 3";
    $scope.values = scriptService.scriptNote();
}]);

app.controller("videosCtrl", function($scope, videosFactory){
    $scope.msg="Vous êtes dans la partie videos";
    $scope.videos = videosFactory.getVideos();
});

app.controller("lexiqueCtrl", function($scope, $http){
    $scope.msg="Vous êtes dans la partie lexique";
  
  $http.get("resources/lexique.json")
  .then(function(response) {
      $scope.myLexique = response.data.lexique;
  });

});