var app;
(function (app) {
    var components;
    (function (components) {
        'use strict';
        var NavbarController = (function () {
            function NavbarController($scope) {
                $scope.date = new Date();
            }
            return NavbarController;
        })();
        components.NavbarController = NavbarController;
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
