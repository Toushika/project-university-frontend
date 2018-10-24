greenApp.controller("viewStudentController", function ($scope) {
    $scope.IsVisible = false;

    $scope.viewAllStudents = function () {
        $scope.students = [];

        $.ajax({
            url: '/attendence/searchAllStudents',
            type: 'POST',
            contentType: 'application/json',
            cache: false,
            processData: false,
            async: false,
            success: function (resultData) {
                $scope.students = resultData;
                console.log(resultData);

            },
            error: function (e) {
                console.log(e);
            }
        });


    }
});