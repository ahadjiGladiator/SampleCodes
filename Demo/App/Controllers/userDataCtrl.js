'use strict';
app.controller('userDataCtrl', userDataCtrl);

function userDataCtrl($scope, adalAuthenticationService, $sessionStorage) {

    $scope.token = sessionStorage.getItem('adal.idtoken');
}