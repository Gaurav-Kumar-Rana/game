/// <reference path="../../Libs/Angular/angular-route.min.js" />
/// <reference path="../../Libs/Angular/angular.min.js" />
(function () {
    'use strict';
    dragdropapp.directive("appAlert", scannerError);

    function scannerError() {
        return {
            restrict: "E",
            templateUrl: "JS/App/Templates/Alert.Template.html",
            controller: function () { },
            controllerAs: "appAlertCtrl",
            scope: true,
            bindToController: {
            }
        };
    };
})();

