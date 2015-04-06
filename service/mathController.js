/**
 * Created by xinpan on 04/06/2015.
 */

mainApp.controller("mathController", function ($scope, MathService) {

    checkInput = function () {
        if ($scope.inputNum1 == null || $scope.inputNum2 == null) {
            return false;
        }
        return true;
    }

    showAlert = function () {
        alert("Input cannot be empty.")
    }

    $scope.add = function () {
        if (checkInput()) {
            $scope.result = MathService.add($scope.inputNum1, $scope.inputNum2);
        } else {
            showAlert();
        }
    }

    $scope.subtract = function () {
        if (checkInput()) {
            $scope.result = MathService.subtract($scope.inputNum1, $scope.inputNum2);
        } else {
            showAlert();
        }
    }

    $scope.multi = function () {
        if (checkInput()) {
            $scope.result = MathService.multi($scope.inputNum1, $scope.inputNum2);
        } else {
            showAlert();
        }
    }

    $scope.divide = function () {
        if (checkInput()) {
            $scope.result = MathService.divide($scope.inputNum1, $scope.inputNum2);
        } else {
            showAlert();
        }
    }

});