/// <reference path="../../.tmp/typings/tsd.d.ts" />

module app {
    'use strict';

    angular.module('app', [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngResource',
        'mgcrea.ngStrap',

        'app.home',
        'app.components',

        'ui.router'
    ]);

    angular.module('app.home', []);
    angular.module('app.components', []);
}
