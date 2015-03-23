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

    };
});
