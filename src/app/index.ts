/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="home/main.controller.ts" />
/// <reference path="../components/navbar/navbar.controller.ts" />

module app {
  'use strict';

  angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
    .controller('MainCtrl', MainCtrl)
    .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
}
