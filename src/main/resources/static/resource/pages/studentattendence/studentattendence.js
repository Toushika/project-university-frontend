greenApp.controller("studentattendenceController", function ($scope) {
    $scope.IsVisible = false;

    $scope.getAttendence = function () {
        $scope.attendenceDetails = [];

        $.ajax({
            url: '/attendence/getAttendence',
            type: 'POST',
            contentType: 'application/json',
            cache: false,
            processData: false,
            async: false,
            success: function (resultData) {
                $scope.attendenceDetails = resultData;
                console.log(resultData);

            },
            error: function (e) {
                console.log(e);
            }
        });


    }
});
