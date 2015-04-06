/**
 * Created by xinpan on 04/06/2015.
 */

mainApp.controller("mathController", function ($scope, MathService) {
    $scope.add = function () {
        $scope.result = MathService.add($scope.inputNum1, $scope.inputNum2);
    }

    $scope.subtract = function () {
        $scope.result = MathService.subtract($scope.inputNum1, $scope.inputNum2);
    }

    $scope.multi = function () {
        $scope.result = MathService.multi($scope.inputNum1, $scope.inputNum2);
    }

    $scope.divide = function () {
        $scope.result = MathService.divide($scope.inputNum1, $scope.inputNum2);
    }

});