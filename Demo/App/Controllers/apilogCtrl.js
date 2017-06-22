'use strict';
app.controller('apilogCtrl', apilogCtrl);

function apilogCtrl($scope, apiService) {

    apiService.get('', '',
        apiTypeCompleted,
        apiTypeFailed);

    function apiTypeCompleted(result) {
        $scope.Ip = result.data.ip;  
    }

    function apiTypeFailed(response) {
        notificationService.displayError("Error");
    }



    $scope.LogDetails = [
        {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        },
        {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        },
        {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        }, {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        },
        {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        },
        {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        },
        {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        },
        {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        },
        {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        },
        {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        },
        {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        },
        {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        },
        {
            "Name": "Alfreds Futterkiste",
            "Country": "Germany"
        }, {
            "Name": "Berglunds snabbköp",
            "Country": "Sweden"
        }, {
            "Name": "Centro comercial Moctezuma",
            "Country": "Mexico"
        }, {
            "Name": "Ernst Handel",
            "Country": "Austria"
        },

    ]

   
}
