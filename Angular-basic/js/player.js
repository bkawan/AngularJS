/**
 * Created by bikeshkawan on 22/04/2016.
 */


var myApp = angular.module('myApp', []);

myApp.controller("MyController", function Mycontroller ($scope) {
    $scope.player = {
        'name' : 'ronaldo',
        'position' : 'wings'
    }

});