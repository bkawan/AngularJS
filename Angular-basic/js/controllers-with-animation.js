var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController',['$scope','$http', function ($scope,$http) {

   $http.get('js/data.json').success(function (data) {

     $scope.artists = data;
       $scope.artistOrder = 'name';

   })
}]);

artistControllers.controller('DetailsController',['$scope','$http','$routeParams', function ($scope,$http,$routeParams) {

    $http.get('js/data.json').success(function (data) {

        $scope.artists = data;
        $scope.whichItem = $routeParams.itemId;

        if($routeParams.itemId > 0){
            $scope.prevItem = Number($routeParams.itemId)-1;
        }else{
            $scope.prevItem = $scope.artists.length-1;

        }
        if($routeParams.itemId < $scope.artists.length-1){
            $scope.nextItem = Number($routeParams.itemId)+1;
        }else{
            $scope.nextItem = 0;

        }



    });
}]);

// ngRoute Module Components
// Directive
// Name	Description
// ngView
// Overview
// ngView is a directive that complements the $route service by including the rendered template of the current route into the main layout (player.html) file. Every time the current route changes, the included view changes with it according to the configuration of the $route service.
//
//     Provider
// Name	Description
// $routeProvider
// Used for configuring routes.
//
//     Service
// Name	Description
// $route
// $route is used for deep-linking URLs to controllers and views (HTML partials). It watches $location.url() and tries to map the path to an existing route definition.
//
// $routeParams
// The $routeParams service allows you to retrieve the current set of route parameters.