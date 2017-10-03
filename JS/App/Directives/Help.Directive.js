/// <reference path="../../Libs/Angular/angular-route.min.js" />
/// <reference path="../../Libs/Angular/angular.min.js" />
(function () {
    'use strict';
    dragdropapp.directive("help", help);

    function help() {
        return {
            restrict: "E",
            templateUrl: "JS/App/Templates/Help.Template.html",
            controller: function () {
                this.stopVideo = function () {
                    $('#helpvideo')[0].pause();
                    $('#helpvideo')[0].currentTime = 0;
                    $("#helpBlock").removeClass("show");
                }

            },
            controllerAs: "helpCtrl",
            scope: true,
            bindToController: {
            }
        };
    };
})();

