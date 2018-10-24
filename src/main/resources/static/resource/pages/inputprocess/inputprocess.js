greenApp.controller("inputProcessController", function($scope) {
    $scope.saveStudentRecord=function () {
        alert($scope.student);
        $.ajax({
            url: '/attendence/saveStudentInfo',
            type: 'POST',
            data: JSON.stringify($scope.student),
            contentType: 'application/json',
            cache: false,
            processData: false,
            async: false,
            success: function (resultData) {

            },
            error: function (e) {
                console.log(e);
            }
        });

    }

});