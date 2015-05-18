/// <reference path="../../.tmp/typings/tsd.d.ts" />

module app {
    'use strict';

    angular.module('app', [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngResource',
        'ui.router',
        'ngMaterial'
    ]);

    angular.module('app.home', []);
    angular.module('app.components', []);
}
