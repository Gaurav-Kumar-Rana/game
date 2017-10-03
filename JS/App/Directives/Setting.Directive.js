/// <reference path="../../Libs/Angular/angular-route.min.js" />
/// <reference path="../../Libs/Angular/angular.min.js" />
(function () {
    'use strict';
    dragdropapp.directive("appSetting", appSetting);
    function appSetting() {
        return {
            restrict: "E",
            templateUrl: "JS/App/Templates/Setting.Template.html",
            controller: function () {
            },
            controllerAs: "appSettingCtrl",
            scope: true,
            bindToController: {
            }
        };
    };
})();
