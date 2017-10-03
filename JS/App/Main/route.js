/// <reference path="../../Libs/Angular/angular.js" />
/// <reference path="../../Libs/Angular/route/angular-ui-router.js" />
(function () {
    'use strict';
    dragdropapp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "View/gamesetting.html",
        })
        .state('game', {
            url: "/game",
            templateUrl: "View/game.html",
        })

    });
})();