/// <reference path="../../Libs/Angular/angular.js" />
var dragdropapp = angular.module('gameapp', ['ngTouch', 'ui.router']);
(function () {
    'use strict';

    dragdropapp.controller('gameappController', ['$scope', 'initApp', '$state', 'WinLossComp', function ($scope, initApp, $state, WinLossComp) {
        $scope._initApp = initApp;

        $scope.radioGroup = function (radioid) {

            $(".radiobtn").removeClass("active");
            $(".radiobtn").children("input[name='oprations']").prop('checked', false);
            $('#' + radioid).children("input[name='oprations']").prop('checked', true);
            $('#' + radioid).addClass("active");      
        };
        
        $scope.reloadApp = function () {
            $state.go('home');
        }
        $scope.loding = function () {
            $(".loding").addClass("show");
        }
        $scope.moveToApp = function (game, level) {
            this._initApp.playerLevel = level

            switch (level) {
                case 'B':
                    $scope.levelName = 'Beginner'
                    break;
                case 'M':
                    $scope.levelName = 'Moderate'
                    break;
                case 'E':
                    $scope.levelName = 'Expert'
                    this._initApp.playerSteps = 1;
                    this._initApp.playerMaxStep = 3;
                    break;
            }
            $state.go(game);
        };
        $scope.aboutShow = function () {
            $("#aboutBlock").addClass("show");
        }
        $scope.aboutHide = function () {
            $("#aboutBlock").removeClass("show");
        }
        $scope.helpShow = function () {
            $("#helpBlock").addClass("show");
            $('#helpvideo')[0].play();
        }
        //$scope.doSurvay = function () {
            //WinLossComp.survar();
        //}
        //$scope.doSurvay();
    }]);
})();