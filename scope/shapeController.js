/**
 * Created by xinpan on 04/06/2015.
 */

mainApp.controller("shapeController", function ($scope) {
    $scope.message = "Shape Controller";
    $scope.type = "Shape";
});

mainApp.controller("circleController", function ($scope) {
    $scope.message = "Circle Controller";
    $scope.type = "Circle";
    $scope.r = 10;
});

mainApp.controller("squareController", function ($scope) {
    //$scope.message = "Square Controller";
    //$scope.type = super.type;
});
