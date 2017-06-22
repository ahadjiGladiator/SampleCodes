'use strict';
app.controller('indexCtrl', indexCtrl);

function indexCtrl($scope, adalAuthenticationService, $location, $window, $sessionStorage) {

    $scope.login = function () {
        console.log("login");
        adalAuthenticationService.login();
    };
    $scope.logout = function () {
        console.log("logout");
        adalAuthenticationService.logOut();
    };    

}