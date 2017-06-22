var app = angular.module('MWAdmin', ['ngRoute', 'ngStorage', 'chieffancypants.loadingBar', 'AdalAngular', 'ui.bootstrap', 'angularValidator']);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config(function ($routeProvider, $httpProvider, adalAuthenticationServiceProvider) {

    $routeProvider.when("/home", {
        controller: "homeCtrl",
        templateUrl: "app/views/home.html",
        requireADLogin: false
    });

    $routeProvider.when("/apilog", {
        controller: "apilogCtrl",
        templateUrl: "App/Views/apilog.html",
        requireADLogin: false
    });  

    $routeProvider.when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "App/Views/UserData.html",
        requireADLogin: false
    });

    $routeProvider.otherwise({ redirectTo: "/home" });   

    adalAuthenticationServiceProvider.init(
        {
            tenant: 'xxx', 
            clientId: 'xxx',  
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
            //popUp: true
            //endpoints: endpoints
        },
        $httpProvider
    );

});






