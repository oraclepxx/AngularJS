/**
 * Created by xinpan on 03/23/2015.
 */

mainApp.controller("studentController", function ($scope) {

    $scope.student = {
        firstName: "Jim",
        lastName: "Green",
        fees: 5000,
        subjects: [
            {name: 'History', marks: 76}, {name: 'Math', marks: 65}, {name: 'Chemistry', marks: 82}
        ],
        fullName: function () {
            var studentObj = $scope.student;
            return studentObj.firstName + " " + studentObj.lastName;
        }

    },


    //$scope.reset = function () {
    //    $scope.firstNameInput = "123";
    //    $scope.lastNameInput = "ABC";
    //    $scope.emailInput = "123@abc.com";
    //},

    $scope.submitForm = function () {
        var firstName = $scope.firstNameInput;
        var lastName = $scope.lastNameInput;
        $scope.msg = "[" + firstName + ", " + lastName + "] submitted";
    },

    $scope.resetForm = function() {
        $scope.firstNameInput = "";
        $scope.lastNameInput = "";
        $scope.msg = "";
    };

});
