/**
 * Created by xinpan on 04/06/2015.
 */

mainApp.controller("calculateController", function ($scope, CalcService, defaultInputValue) {

    $scope.inputValue = defaultInputValue;

    $scope.square = function () {
        $scope.result = CalcService.square($scope.inputValue);
    }

    $scope.sqrt = function () {
        $scope.result = CalcService.sqrt($scope.inputValue);
    }

});