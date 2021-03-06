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

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 200) {
                 scope.changeClass = true;
             } else {
                 scope.changeClass = false;
             }
             if (this.pageYOffset >=700) {
                 scope.imgOpacity = true;
             }
             if (this.pageYOffset >=1300) {
                 scope.imgOpacity2 = true;
             }
             if (this.pageYOffset >=1900) {
                 scope.imgOpacity3 = true;
             }
             if (this.pageYOffset >=2500) {
                 scope.imgOpacity4 = true;
             }
             if (this.pageYOffset >=3100) {
                 scope.imgOpacity5 = true;
             }
             scope.$apply();
        });
    };
});
