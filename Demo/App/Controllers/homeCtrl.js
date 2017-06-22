app.controller('homeCtrl', homeCtrl);

function homeCtrl($scope, apiService, adalAuthenticationService) {

    $scope.loadingInfo = true;
    $scope.todayDate = new Date().toDateString();


    adalAuthenticationService.getUser().then(function (result) {
        
    }, function (error) {
       
    });    
   
}