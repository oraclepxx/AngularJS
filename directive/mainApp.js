/**
 * Created by xinpan on 04/07/2015.
 */

var mainApp = angular.module("mainApp", []);

mainApp.directive("my-directive", function () {

    return {
        restrict: "A",
        templateUrl: "<h1>This is my first custom directive</h1>"
    };

    //var directive = {};
    //directive.restrict = "A";
    //directive.template = "<h1>This is my first custom directive.</h1>";
    //return directive;

});
