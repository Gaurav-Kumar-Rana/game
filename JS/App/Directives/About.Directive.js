/// <reference path="../../Libs/Angular/angular-route.min.js" />
/// <reference path="../../Libs/Angular/angular.min.js" />
(function () {
    'use strict';
    dragdropapp.directive("about", about);

    function about() {
        return {
            restrict: "E",
            templateUrl: "JS/App/Templates/About.Template.html",
            controller: function () { },
            controllerAs: "aboutCtrl",
            scope: true,
            bindToController: {
            }
        };
    };
})();

