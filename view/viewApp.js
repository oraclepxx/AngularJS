/**
 * Created by xinpan on 04/02/2015.
 */

var viewApp = angular.module("viewApp", ['ngRoute']);

viewApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/addStudent', {
        templateUrl: 'addStudent.htm',
        controller: 'addStudentController'
    }).when('/viewStudent', {
        templateUrl: 'viewStudent.htm',
        controller: 'viewStudentController'
    }).otherwise({redirectTo: '/addStudent'});

}]);
