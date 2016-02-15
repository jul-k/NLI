'use strict';

/**
 * @ngdoc function
 * @name nextLevelInterviewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nextLevelInterviewApp
 */
var app = angular.module('nextLevelInterviewApp');

app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.clients = [
        {
            name: "Client 1",
            logo: "client1.jpeg"
        },
        {
            name: "Client 2",
            logo: "client2.jpg"
        },
        {
            name: "Client 3",
            logo: "client3.jpeg"
        },
        {
            name: "Client 4",
            logo: "client4.jpg"
        },
        {
            name: "Client 5",
            logo: "client5.jpg"
        },
        {
            name: "Client 6",
            logo: "client6.jpg"
        },
        {
            name: "Client 7",
            logo: "client7.jpg"
        },
        {
            name: "Client 8",
            logo: "client8.jpg"
        }
    ]
}]);
