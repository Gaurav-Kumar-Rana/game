/// <reference path="../../Libs/Angular/angular-route.min.js" />
/// <reference path="../../Libs/Angular/angular.min.js" />
(function () {
    'use strict';
    dragdropapp.directive("appError", appError);

    function appError() {
        return {
            restrict: "E",
            templateUrl: "JS/App/Templates/Error.Template.html",
            controller: function () {
                this.destroyError = function () {
                    $(".errorBlock").toggleClass("activeModal");
                }
            },
            controllerAs: "appErrorCtrl",
            scope: true,
            bindToController: {
            }
        };
    };
})();
