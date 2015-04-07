/**
 * Created by xinpan on 04/07/2015.
 */

var mainApp = angular.module("mainApp", []);

mainApp.directive('my-directive', function () {
    return {
        restrict: 'E',
        template: '<div>This is my first custom directive</div>'
    }

});
