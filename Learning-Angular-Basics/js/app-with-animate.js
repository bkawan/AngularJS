/**
 * Created by bikeshkawan on 22/04/2016.
 */

var myApp = angular.module('myApp',[
    'ngRoute',// turn on route features
    'artistControllers' //js that will handle  this module
]);

/**
 * $routeProvider
   Used for configuring routes.
    Methods
    when(path, route);
    Adds a new route definition to the $route service.
    otherwise(params);
    Sets route definition that will be used on route change when no other route definition is matched.
   more: https://docs.angularjs.org/api/ngRoute/provider/$routeProvider

 */
myApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/list-with-animate', {
        templateUrl:'partials/list-with-animate.html',
        controller:'ListController'

    }).when('/details/:itemId',{
        templateUrl:'partials/details.html',
        controller:'DetailsController'

    }).otherwise({
        redirectTo:'/list-with-animate'
    });


}]);
//
// Module Components
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
//     $routeParams
// The $routeParams service allows you to retrieve the current set of route parameters.