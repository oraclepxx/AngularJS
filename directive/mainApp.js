/**
 * Created by xinpan on 04/07/2015.
 */

var mainApp = angular.module("mainApp", []);

mainApp.directive("mydirective", function () {

    return {
        restrict: "E",
        template: "<h1>This is a custom directive</h1>"
    };

    //var mydirective = {};
    //mydirective.restrict = "A";
    //mydirective.template = "<h1>This is my first custom directive.</h1>";
    //return mydirective;

});

mainApp.directive('hello1', function () {
    return {
        restrict: 'A',
        replace: false,
        template: '<span>NotReplace</span>'
    };
});

mainApp.directive('hello2', function () {
    return {
        restrict: 'A',
        replace: true,
        template: '<span>Replace</span>'
    };
});

mainApp.directive('hello3', function () {
    return {
        restrict: 'A',
        template: '<span>Replace?NotReplace</span>'
    };
});

mainApp.directive('myd1', function () {
    return {
        restrict: 'A',
        template: '<span>directive template1</span>',
        replace: true
    }
});

mainApp.directive('myd2', function () {
    return {
        restrict: 'A',
        template: '<span>directive template2</span>',
        replace: false
    }
});
