/**
 * Created by xinpan on 04/02/2015.
 */

dataMain.controller("dataController", function ($scope, $http) {
    var url = "data.json";
    $http.getUrl(url).success(function (resp) {
        $scope.students = resp;
    });
});
