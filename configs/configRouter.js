app.config(function($stateProvider, $urlRouterProvider){
   
   $stateProvider
    .state("introduction", {
        url: "/introduction",
        templateUrl: "templates/introduction.html",
        controller:"introductionCtrl"
    })
    .state("partie-1", {
        url: "/partie-1",
        templateUrl: "templates/partie-1.html",
        controller:"partie1Ctrl"
    })
    .state("partie-2", {
        url: "/partie-2",
        templateUrl: "templates/partie-2.html",
        controller:"partie2Ctrl"
    })
    .state("partie-3", {
        url: "/partie-3",
        templateUrl: "templates/partie-3.html",
        controller:"partie3Ctrl"
    })
    .state("videos", {
        url: "/videos",
        templateUrl: "templates/videos.html",
        controller:"videosCtrl"
    })
    .state("lexique", {
        url: "/lexique",
        templateUrl: "templates/annexes/lexique.html",
        controller:"lexiqueCtrl"
    });
    $urlRouterProvider.otherwise('introduction');
});