var app;
(function (app) {
    var home;
    (function (home) {
        'use strict';
        var HomeController = (function () {
            function HomeController() {
                this.isAngularRunning = true;
            }
            return HomeController;
        })();
        home.HomeController = HomeController;
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
