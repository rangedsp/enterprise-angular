/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="home/main.controller.ts" />
/// <reference path="../components/navbar/navbar.controller.ts" />
var app;
(function (app) {
    'use strict';
    angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
        .controller('MainCtrl', app.MainCtrl)
        .controller('NavbarCtrl', app.NavbarCtrl)
        .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'app/home/main.html',
            controller: 'MainCtrl'
        });
        $urlRouterProvider.otherwise('/');
    });
})(app || (app = {}));
