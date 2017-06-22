'use strict';
app.factory('apiService', apiService);

function apiService($http, $location, notificationService, $rootScope) {

    var serviceBase = 'http://ip.jsontest.com/';

    var service = {
        get: get,
        post: post,
        CallFailed: CallFailed
    };

    function get(url, config, success, failure) {        
        return $http.get(serviceBase + url, config)
            .then(function (result) {
                success(result);
            }, function (error) {
                if (error.status == '401') {
                    notificationService.displayError('Authentication required.');
                    $rootScope.previousState = $location.path();
                    $location.path('/login');
                }
                else if (failure != null) {
                    failure(error);
                }
            });
    }

    function post(url, data, success, failure) {
        return $http.post(serviceBase + url, data)
            .then(function (result) {
                success(result);
            }, function (error) {
                    failure(error);                
            });
    }

    function CallFailed(response) {
        notificationService.displayError(response.data.Message);
    }

    return service; 
}