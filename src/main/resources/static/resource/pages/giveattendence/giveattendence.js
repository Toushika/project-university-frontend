greenApp.controller("giveattendenceController", function ($scope) {
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

    $scope.givePresent = function (studentId) {
        // alert(studentId);
        console.log(studentId);
        $("#" + studentId + '_absent').prop("disabled", true);
        $("#" + studentId + '_absent').prop("checked", false);
        $.ajax({
            url: '/attendence/giveAttendence',
            type: 'POST',
            data: JSON.stringify({"studentId": studentId, "studentAttendence": "Present"}),
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
    $scope.giveAbsent = function (studentId) {
        // alert(studentId);
        console.log(studentId);
        $("#" + studentId + '_present').prop("disabled", true);
        $("#" + studentId + '_present').prop("checked", false);
        $.ajax({
            url: '/attendence/giveAttendence',
            type: 'POST',
            data: JSON.stringify({"studentId": studentId, "studentAttendence": "Absent"}),
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
    $scope.refresh = function (studentId) {
        console.log(studentId);
        $("#" + studentId + '_present').prop("disabled", false);
        $("#" + studentId + '_absent').prop("disabled", false);
        $("#" + studentId + '_present').prop("checked", false);
        $("#" + studentId + '_absent').prop("checked", false);
    }

    /* $scope.addAttendence=function (studentInfo) {
         var studentId=$scope.studentInfo.studentId;
         console.log("gotValue "+studentId);
         $.ajax({
             url: '/attendence/giveAttendence',
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

     }*/
});
