var greenApp = angular.module('greenApp', ['ui.router']);

greenApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'resource/pages/maincontent/maincontent.html'
        })

        // nested list with custom controller
        .state('inputProcess', {
            url: '/inputProcess',
            templateUrl: 'resource/pages/inputprocess/inputprocess.html',
            controller:'inputProcessController'
        })

        // nested list with just some random string data
        .state('reportGeneration', {
            url: '/reportGeneration',
            templateUrl: 'resource/pages/reportgeneration/reportgeneration.html'
        })


        .state('viewStudentInfo', {
            url: '/viewStudentInfo',
            templateUrl: 'resource/pages/viewStudentInfo/viewStudentInfo.html',
            controller:'viewStudentController'

        })


        .state('studentAttendence', {
            url: '/studentAttendence',
            templateUrl: 'resource/pages/studentattendence/studentattendence.html',
            controller:'studentattendenceController'

        })

        .state('giveAttendence', {
            url: '/giveAttendence',
            templateUrl: 'resource/pages/giveattendence/giveattendence.html',
            controller:'giveattendenceController'

        })

});
