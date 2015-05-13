/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="home/home.controller.ts" />
/// <reference path="../components/navbar/navbar.controller.ts" />
var app;
(function (app) {
    'use strict';
    angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
        .controller('app.home.HomeController', app.home.HomeController)
        .controller('app.components.NavbarController', app.components.NavbarController)
        .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'app.home.HomeController'
        });
        $urlRouterProvider.otherwise('/');
    });
})(app || (app = {}));
